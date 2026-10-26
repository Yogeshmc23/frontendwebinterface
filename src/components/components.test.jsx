import { useState } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import EmptyState from './EmptyState.jsx'
import Modal from './Modal.jsx'
import TaskCard from './TaskCard.jsx'
import { mockTasks } from '../utils/mockData.js'

describe('EmptyState', () => {
  it('renders a named icon instead of the raw icon name', () => {
    render(<EmptyState icon="projects" title="No projects match your filters" />)

    expect(screen.getByText('No projects match your filters')).toBeInTheDocument()
    expect(screen.queryByText('projects')).not.toBeInTheDocument()
    expect(document.querySelector('.empty-icon svg')).not.toBeNull()
  })
})

describe('TaskCard', () => {
  const task = mockTasks[0]

  it('exposes the task title as a keyboard-accessible button', () => {
    const onView = vi.fn()
    render(<TaskCard task={task} onView={onView} />)

    const title = screen.getByRole('button', { name: task.title })
    expect(title.tagName).toBe('BUTTON')
    fireEvent.click(title)
    expect(onView).toHaveBeenCalledWith(task)
  })

  it('moves a task through the status selector', () => {
    const onMove = vi.fn()
    render(<TaskCard task={task} onMove={onMove} />)

    fireEvent.change(screen.getByLabelText(`Status for ${task.title}`), { target: { value: 'Done' } })
    expect(onMove).toHaveBeenCalledWith(task, 'Done')
  })
})

function ModalHarness() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>Open dialog</button>
      <Modal open={open} onClose={() => setOpen(false)} title="Demo dialog">
        <p>Body content</p>
        <button type="button">Inside action</button>
      </Modal>
    </div>
  )
}

describe('Modal', () => {
  it('is labelled, locks scroll, closes on Escape, and restores focus', async () => {
    render(<ModalHarness />)

    const trigger = screen.getByRole('button', { name: 'Open dialog' })
    trigger.focus()
    fireEvent.click(trigger)

    expect(screen.getByRole('dialog', { name: 'Demo dialog' })).toBeInTheDocument()
    expect(document.body.style.overflow).toBe('hidden')
    expect(screen.getByRole('button', { name: 'Close dialog' })).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Escape' })

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
    expect(document.body.style.overflow).toBe('')
    expect(trigger).toHaveFocus()
  })
})

import { render, screen, waitFor, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

function renderAt(path) {
  window.history.pushState({}, '', path)
  return render(<App />)
}

describe('application routes', () => {
  it('renders the landing page', () => {
    renderAt('/')
    expect(
      screen.getByRole('heading', { level: 1, name: /A task and project workspace for product teams/i })
    ).toBeInTheDocument()
  })

  it('renders the projects page', () => {
    renderAt('/projects')
    expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument()
  })

  it('renders the task board', () => {
    renderAt('/tasks')
    expect(screen.getByRole('heading', { level: 1, name: 'Task Board' })).toBeInTheDocument()
  })

  it('renders a project detail page from the route parameter', () => {
    renderAt('/projects/p1')
    expect(screen.getByRole('heading', { level: 1, name: 'TaskFlow Website Redesign' })).toBeInTheDocument()
  })

  it('renders the legal pages', () => {
    const { unmount } = renderAt('/privacy')
    expect(screen.getByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeInTheDocument()
    unmount()

    renderAt('/terms')
    expect(screen.getByRole('heading', { level: 1, name: 'Terms and Conditions' })).toBeInTheDocument()
  })

  it('renders the custom 404 page', () => {
    renderAt('/this-route-does-not-exist')
    expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument()
  })
})

describe('protected routes', () => {
  it('redirects signed-out visitors to the login page', async () => {
    renderAt('/dashboard')

    expect(screen.getByRole('heading', { level: 1, name: 'Welcome back' })).toBeInTheDocument()
    await waitFor(() => expect(window.location.pathname).toBe('/login'))
  })
})

describe('signup legal links', () => {
  it('points the terms checkbox at the real legal pages', () => {
    renderAt('/signup')

    const consent = screen.getByText(/I agree to the/i).closest('label')
    expect(consent).not.toBeNull()

    expect(within(consent).getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms')
    expect(within(consent).getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy')
  })
})

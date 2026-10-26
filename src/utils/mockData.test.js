import { describe, expect, it } from 'vitest'
import { mockProjects, mockTasks, mockTeam, mockUser, paginate } from './mockData.js'

describe('paginate', () => {
  const list = Array.from({ length: 12 }, (_, index) => index + 1)

  it('returns the requested page', () => {
    expect(paginate(list, 1, 6)).toEqual([1, 2, 3, 4, 5, 6])
    expect(paginate(list, 2, 6)).toEqual([7, 8, 9, 10, 11, 12])
  })

  it('returns an empty array past the end', () => {
    expect(paginate(list, 3, 6)).toEqual([])
  })
})

describe('demo data integrity', () => {
  it('uses local avatars only', () => {
    const images = [
      mockUser.avatar,
      ...mockProjects.flatMap((project) => project.members),
      ...mockTasks.map((task) => task.assigneeAvatar),
      ...mockTeam.map((member) => member.avatar),
    ]

    expect(images.length).toBeGreaterThan(0)
    for (const src of images) {
      expect(src.startsWith('data:image/svg+xml,')).toBe(true)
    }
  })

  it('keeps task references valid', () => {
    const projectIds = new Set(mockProjects.map((project) => project.id))
    const taskIds = new Set(mockTasks.map((task) => task.id))

    expect(taskIds.size).toBe(mockTasks.length)
    for (const task of mockTasks) {
      expect(projectIds.has(task.projectId)).toBe(true)
      expect(task.assignee).toBeTruthy()
      expect(task.status).toMatch(/^(Todo|In Progress|Review|Done)$/)
    }
  })

  it('does not use real-looking contact addresses', () => {
    expect(mockUser.email).toMatch(/@taskflow\.demo$/)
    for (const member of mockTeam) {
      expect(member.email).toMatch(/@taskflow\.demo$/)
    }
  })
})

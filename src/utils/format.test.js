import { describe, expect, it } from 'vitest'
import { formatDate, isOverdue, priorityColor, slugify, statusColor } from './format.js'

describe('formatDate', () => {
  it('formats ISO dates for display', () => {
    expect(formatDate('2026-11-08')).toBe('08 Nov 2026')
  })

  it('handles missing and invalid values without throwing', () => {
    expect(formatDate('')).toBe('Not set')
    expect(formatDate(null)).toBe('Not set')
    expect(formatDate('not-a-date')).toBe('not-a-date')
  })
})

describe('isOverdue', () => {
  it('returns true for past dates and false for future dates', () => {
    expect(isOverdue('2000-01-01')).toBe(true)
    expect(isOverdue('2999-01-01')).toBe(false)
    expect(isOverdue('')).toBe(false)
  })
})

describe('colour helpers', () => {
  it('maps priorities to badge variants', () => {
    expect(priorityColor('High')).toBe('danger')
    expect(priorityColor('Medium')).toBe('warning')
    expect(priorityColor('Low')).toBe('info')
    expect(priorityColor('Unknown')).toBe('neutral')
  })

  it('maps statuses to badge variants', () => {
    expect(statusColor('Done')).toBe('success')
    expect(statusColor('Completed')).toBe('success')
    expect(statusColor('In Progress')).toBe('info')
    expect(statusColor('Review')).toBe('warning')
    expect(statusColor('Todo')).toBe('neutral')
  })
})

describe('slugify', () => {
  it('creates URL-safe slugs', () => {
    expect(slugify('TaskFlow Website Redesign')).toBe('taskflow-website-redesign')
    expect(slugify('  Hello, World! ')).toBe('hello-world')
  })
})

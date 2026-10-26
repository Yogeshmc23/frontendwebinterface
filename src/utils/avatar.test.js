import { describe, expect, it } from 'vitest'
import { avatarFor, initialsOf } from './avatar.js'

describe('initialsOf', () => {
  it('uses the first and last name', () => {
    expect(initialsOf('Priya Nair')).toBe('PN')
    expect(initialsOf('Alex Morgan Smith')).toBe('AS')
    expect(initialsOf('Alice')).toBe('A')
  })

  it('handles empty and unsafe input', () => {
    expect(initialsOf('')).toBe('?')
    expect(initialsOf(null)).toBe('?')
    expect(initialsOf('<script>')).toBe('?')
  })
})

describe('avatarFor', () => {
  it('returns a local SVG data URI, never a remote URL', () => {
    const avatar = avatarFor('Priya Nair')
    expect(avatar.startsWith('data:image/svg+xml,')).toBe(true)
    expect(avatar).not.toMatch(/^https?:/)
    expect(decodeURIComponent(avatar)).toContain('PN')
  })

  it('is deterministic for the same name', () => {
    expect(avatarFor('Marcus Lee')).toBe(avatarFor('Marcus Lee'))
    expect(avatarFor('Marcus Lee')).not.toBe(avatarFor('Sana Ali'))
  })

  it('respects the requested pixel size', () => {
    expect(decodeURIComponent(avatarFor('Emma Stone', 180))).toContain('width="180"')
  })
})

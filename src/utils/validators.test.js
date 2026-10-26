import { describe, expect, it } from 'vitest'
import {
  validateEmail,
  validateLogin,
  validateProject,
  validateSignup,
  validateTask,
} from './validators.js'

describe('validateEmail', () => {
  it('accepts a normal address', () => {
    expect(validateEmail('alex@taskflow.demo')).toBe(true)
  })

  it('rejects malformed addresses', () => {
    expect(validateEmail('alex')).toBe(false)
    expect(validateEmail('alex@taskflow')).toBe(false)
    expect(validateEmail('alex @taskflow.demo')).toBe(false)
  })
})

describe('validateLogin', () => {
  it('requires an email and password', () => {
    expect(validateLogin({})).toEqual({ email: 'Email is required.', password: 'Password is required.' })
  })

  it('rejects a short password and invalid email', () => {
    const errors = validateLogin({ email: 'not-an-email', password: '123' })
    expect(errors.email).toBe('Enter a valid email address.')
    expect(errors.password).toBe('Password must be at least 6 characters.')
  })

  it('passes for the documented demo credentials', () => {
    expect(validateLogin({ email: 'alex@taskflow.demo', password: 'demo1234' })).toEqual({})
  })
})

describe('validateSignup', () => {
  const valid = {
    name: 'Alex Morgan',
    email: 'alex@taskflow.demo',
    password: 'demo1234',
    confirmPassword: 'demo1234',
  }

  it('accepts a complete form', () => {
    expect(validateSignup(valid)).toEqual({})
  })

  it('requires a name of at least two characters', () => {
    expect(validateSignup({ ...valid, name: 'A' }).name).toBe('Name must be at least 2 characters.')
  })

  it('requires a strong enough password and a matching confirmation', () => {
    expect(validateSignup({ ...valid, password: 'abcdefgh' }).password).toBe(
      'Include at least one letter and one number.'
    )
    expect(validateSignup({ ...valid, password: 'short1' }).password).toBe(
      'Password must be at least 8 characters.'
    )
    expect(validateSignup({ ...valid, confirmPassword: 'demo12345' }).confirmPassword).toBe(
      'Passwords do not match.'
    )
  })
})

describe('validateProject and validateTask', () => {
  it('flags missing project fields', () => {
    expect(Object.keys(validateProject({}))).toEqual(['name', 'description', 'dueDate'])
  })

  it('flags missing task fields', () => {
    expect(Object.keys(validateTask({}))).toEqual(['title', 'projectId', 'priority', 'dueDate'])
  })

  it('accepts complete project and task payloads', () => {
    expect(validateProject({ name: 'Redesign', description: 'Landing page', dueDate: '2026-12-01' })).toEqual({})
    expect(validateTask({ title: 'Ship it', projectId: 'p1', priority: 'High', dueDate: '2026-12-01' })).toEqual({})
  })
})

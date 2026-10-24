export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validateLogin({ email, password }) {
  const errors = {}
  if (!email?.trim()) errors.email = 'Email is required.'
  else if (!validateEmail(email.trim())) errors.email = 'Enter a valid email address.'
  if (!password) errors.password = 'Password is required.'
  else if (password.length < 6) errors.password = 'Password must be at least 6 characters.'
  return errors
}

export function validateSignup({ name, email, password, confirmPassword }) {
  const errors = {}
  if (!name?.trim()) errors.name = 'Full name is required.'
  else if (name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'
  if (!email?.trim()) errors.email = 'Email is required.'
  else if (!validateEmail(email.trim())) errors.email = 'Enter a valid email address.'
  if (!password) errors.password = 'Password is required.'
  else if (password.length < 8) errors.password = 'Password must be at least 8 characters.'
  else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password)) errors.password = 'Include at least one letter and one number.'
  if (confirmPassword !== password) errors.confirmPassword = 'Passwords do not match.'
  return errors
}

export function validateProject({ name, description, dueDate }) {
  const errors = {}
  if (!name?.trim()) errors.name = 'Project name is required.'
  if (!description?.trim()) errors.description = 'Description is required.'
  if (!dueDate) errors.dueDate = 'Due date is required.'
  return errors
}

export function validateTask({ title, projectId, priority, dueDate }) {
  const errors = {}
  if (!title?.trim()) errors.title = 'Task title is required.'
  if (!projectId) errors.projectId = 'Please select a project.'
  if (!priority) errors.priority = 'Priority is required.'
  if (!dueDate) errors.dueDate = 'Due date is required.'
  return errors
}

export function formatDate(dateStr) {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export function isOverdue(dateStr) {
  if (!dateStr) return false
  const d = new Date(dateStr)
  const today = new Date()
  today.setHours(0,0,0,0)
  return d < today
}

export function priorityColor(priority) {
  switch (priority) {
    case 'High': return 'danger'
    case 'Medium': return 'warning'
    case 'Low': return 'info'
    default: return 'neutral'
  }
}

export function statusColor(status) {
  switch (status) {
    case 'Completed':
    case 'Done': return 'success'
    case 'In Progress': return 'info'
    case 'Review': return 'warning'
    case 'Planning':
    case 'Todo': return 'neutral'
    default: return 'neutral'
  }
}

export function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
}

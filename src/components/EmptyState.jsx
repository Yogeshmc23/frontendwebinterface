import { Icon } from './Icon.jsx'

export default function EmptyState({ icon = 'search', title = 'Nothing here yet', description, action }) {
  const glyph = typeof icon === 'string' ? <Icon name={icon} size={18} /> : icon

  return (
    <div className="empty">
      <div className="empty-icon" aria-hidden>{glyph}</div>
      <div style={{ fontWeight: 800 }}>{title}</div>
      {description && <p style={{ margin: 0, color: 'var(--color-text-3)', fontSize: 13, maxWidth: 460 }}>{description}</p>}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  )
}

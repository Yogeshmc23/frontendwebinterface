export default function EmptyState({ icon = '∅', title = 'Nothing here yet', description, action }) {
  return (
    <div className="empty">
      <div className="empty-icon" aria-hidden>{icon}</div>
      <div style={{ fontWeight: 800 }}>{title}</div>
      {description && <p style={{ margin: 0, color: 'var(--color-text-3)', fontSize: 13, maxWidth: 460 }}>{description}</p>}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  )
}

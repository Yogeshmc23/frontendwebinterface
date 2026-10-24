export default function StatCard({ icon, label, value, delta, deltaLabel }) {
  const deltaClass = delta?.startsWith('+') ? 'up' : delta?.startsWith('-') ? 'down' : ''
  return (
    <div className="stat-card">
      <div className="stat-card-head">
        <div className="small muted" style={{ fontWeight: 700, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase' }}>{label}</div>
        <div className="stat-icon" aria-hidden>{icon}</div>
      </div>
      <div className="stat-value">{value}</div>
      {(delta || deltaLabel) && (
        <div className="small" style={{ display: 'flex', gap: 6, alignItems: 'center', color: 'var(--color-text-3)' }}>
          {delta && <span className={`stat-delta ${deltaClass}`} style={{ fontWeight: 700 }}>{delta}</span>}
          {deltaLabel && <span>{deltaLabel}</span>}
        </div>
      )}
    </div>
  )
}

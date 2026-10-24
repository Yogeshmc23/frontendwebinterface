export default function Loading({ label = 'Loading…' }) {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="spinner" aria-hidden />
      <div style={{ fontWeight: 600, fontSize: 14 }}>{label}</div>
    </div>
  )
}

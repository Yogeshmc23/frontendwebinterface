import { Link, Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="auth-wrap">
      <div className="auth-hero">
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 18 }}>
          <span style={{ width: 34, height: 34, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'white', color: 'var(--color-primary)', fontWeight: 800 }}>◈</span>
          TaskFlow
        </Link>
        <h2>Work that flows. Teams that ship.</h2>
        <p style={{ opacity: .9, lineHeight: 1.6, margin: 0, maxWidth: 520 }}>A focused workspace for projects, tasks, and progress — built with a clean MERN-ready frontend. Demo data is active; connect your Express API via <code style={{ background: 'rgba(255,255,255,.16)', padding: '2px 8px', borderRadius: 999, border: '1px solid rgba(255,255,255,.24)' }}>VITE_API_BASE_URL</code>.</p>
        <ul>
          <li><span>✓</span> <span><strong>Kanban board</strong> with filters, search & pagination</span></li>
          <li><span>✓</span> <span><strong>Project analytics</strong> and activity feed</span></li>
          <li><span>✓</span> <span><strong>Responsive</strong> — mobile to desktop, light & dark themes</span></li>
          <li><span>✓</span> <span><strong>API layer</strong> ready for Node/Express + MongoDB</span></li>
        </ul>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6 }}>
          <span className="badge" style={{ background: 'white', color: 'var(--color-primary)', borderColor: 'white' }}>Trusted UI</span>
          <span className="badge" style={{ background: 'rgba(255,255,255,.14)', color: 'white', borderColor: 'rgba(255,255,255,.28)' }}>No lock-in</span>
        </div>
      </div>
      <div className="auth-panel">
        <Outlet />
      </div>
    </div>
  )
}

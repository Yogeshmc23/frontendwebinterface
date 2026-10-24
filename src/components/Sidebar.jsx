import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const items = [
    { to: '/dashboard', label: 'Overview', icon: '◰' },
    { to: '/projects', label: 'Projects', icon: '▦' },
    { to: '/tasks', label: 'Task Board', icon: '☰' },
    { to: '/team', label: 'Team', icon: '◐' },
    { to: '/profile', label: 'Profile', icon: '◉' },
    { to: '/settings', label: 'Settings', icon: '⚙' },
  ]
  return (
    <aside className="sidebar" aria-label="Dashboard sidebar">
      <div>
        <div className="sidebar-section-title">Workspace</div>
        <nav style={{ display: 'grid', gap: 6 }}>
          {items.map((it) => (
            <NavLink key={it.to} to={it.to} className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}>
              <span className="icon" aria-hidden>{it.icon}</span>
              {it.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="surface" style={{ padding: 14, borderRadius: 14, display: 'grid', gap: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 13, display: 'flex', justifyContent: 'space-between' }}>
          <span>Upgrade plan</span>
          <span className="badge badge-warning small">PRO</span>
        </div>
        <p style={{ margin: 0, color: 'var(--color-text-3)', fontSize: 12, lineHeight: 1.6 }}>Unlock unlimited projects, advanced analytics, and priority support.</p>
        <button className="btn btn-primary btn-sm btn-block" type="button" onClick={() => alert('Demo: Billing page would open (requires backend).')}>View plans</button>
      </div>

      <div style={{ padding: 8, color: 'var(--color-text-3)', fontSize: 12 }}>
        <div style={{ fontWeight: 700, color: 'var(--color-text-2)', fontSize: 12 }}>Demo mode</div>
        Data shown is mock. Connect <code style={{ background: 'var(--color-surface-2)', padding: '2px 6px', borderRadius: 6, border: '1px solid var(--color-border)' }}>VITE_API_BASE_URL</code> to your Express API.
      </div>
    </aside>
  )
}

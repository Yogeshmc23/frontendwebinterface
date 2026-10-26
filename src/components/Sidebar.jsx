import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from './Icon.jsx'

export default function Sidebar() {
  const [notice, setNotice] = useState('')
  const items = [
    { to: '/dashboard', label: 'Overview', icon: 'dashboard' },
    { to: '/projects', label: 'Projects', icon: 'projects' },
    { to: '/tasks', label: 'Board', icon: 'tasks' },
    { to: '/team', label: 'Team', icon: 'team' },
    { to: '/profile', label: 'Profile', icon: 'profile' },
    { to: '/settings', label: 'Settings', icon: 'settings' },
  ]

  return (
    <aside className="sidebar" aria-label="Dashboard sidebar">
      <div>
        <div className="sidebar-section-title">Workspace</div>
        <nav style={{ display: 'grid', gap: 4 }}>
          {items.map((it) => (
            <NavLink key={it.to} to={it.to} className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}>
              <span className="icon" aria-hidden><Icon name={it.icon} size={14} /></span>
              {it.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="surface" style={{ padding: 12, borderRadius: 'var(--radius-md)', display: 'grid', gap: 8 }}>
        <div style={{ fontWeight: 600, fontSize: 13, display: 'flex', justifyContent: 'space-between' }}>
          <span>Upgrade plan</span>
          <span className="badge badge-warning">Pro</span>
        </div>
        <p style={{ margin: 0, color: 'var(--color-text-3)', fontSize: 12, lineHeight: 1.6 }}>Billing is a demo placeholder. A real checkout would connect to your backend and show current subscription status.</p>
        <button type="button" className="btn btn-primary btn-sm btn-block" onClick={() => setNotice('Billing is not connected in demo mode. No payment is processed.')}>View plans</button>
        {notice && <p role="status" className="small muted" style={{ margin: 0, fontSize: 11.5 }}>{notice}</p>}
      </div>

      <div style={{ padding: 8, color: 'var(--color-text-3)', fontSize: 11.5, lineHeight: 1.5 }}>
        <div style={{ fontWeight: 600, color: 'var(--color-text-2)', fontSize: 11.5 }}>Demo data</div>
        Sample projects and tasks are shown locally. Connect VITE_API_BASE_URL to your Express API to replace them with live data.
      </div>
    </aside>
  )
}

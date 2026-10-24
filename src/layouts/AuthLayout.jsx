import { Link, Outlet } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'

export default function AuthLayout() {
  return (
    <div className="auth-wrap">
      <div className="auth-hero">
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 15 }}>
          <span style={{ width: 28, height: 28, borderRadius: 'var(--radius-md)', display: 'grid', placeItems: 'center', background: 'var(--color-primary)', color: 'white', fontWeight: 700, fontSize: 11 }}>TF</span>
          TaskFlow
        </Link>
        <h2>Sign in to your workspace</h2>
        <p style={{ color: 'var(--color-text-2)', lineHeight: 1.6, margin: 0, maxWidth: 520, fontSize: 13.5 }}>A focused workspace for projects, tasks, and progress. The interface shows sample data. Connect your Express API via <code style={{ background: 'var(--color-surface)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: 12 }}>VITE_API_BASE_URL</code> to show live data.</p>
        <ul>
          <li><Icon name="tasks" size={14} /> <span><strong>Kanban board</strong> with search, filters, and pagination</span></li>
          <li><Icon name="dashboard" size={14} /> <span><strong>Project overview</strong> with progress and due dates</span></li>
          <li><Icon name="settings" size={14} /> <span><strong>Responsive</strong> from mobile to desktop, light and dark themes</span></li>
          <li><Icon name="projects" size={14} /> <span><strong>API layer</strong> ready for Node, Express, and MongoDB</span></li>
        </ul>
        <p className="small muted" style={{ margin: 0, fontSize: 11.5 }}>No credit card required for demo. Create an account to explore sample projects.</p>
      </div>
      <div className="auth-panel">
        <Outlet />
      </div>
    </div>
  )
}

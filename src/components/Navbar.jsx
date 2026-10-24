import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const { theme, toggle } = useTheme()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/tasks', label: 'Board' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" aria-label="TaskFlow home">
          <span className="brand-mark" aria-hidden>◈</span>
          <span>TaskFlow</span>
          <span className="badge badge-primary small" style={{ marginLeft: 4 }}>MERN</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="btn btn-ghost btn-sm" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="btn btn-secondary btn-sm hide-mobile">Dashboard</Link>
              <Link to="/profile" className="cluster hide-mobile" style={{ gap: 8, padding: '4px 8px', borderRadius: 999, border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
                <img src={user?.avatar} alt={user?.name} width={24} height={24} style={{ borderRadius: '50%' }} />
                <span style={{ fontSize: 13, fontWeight: 600 }}>{user?.name?.split(' ')[0]}</span>
              </Link>
              <button className="btn btn-ghost btn-sm hide-mobile" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost btn-sm hide-mobile">Log in</Link>
              <Link to="/signup" className="btn btn-primary btn-sm hide-mobile">Start free</Link>
            </>
          )}

          <button className="mobile-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <div className="divider" />
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="btn btn-secondary" onClick={() => setOpen(false)}>Dashboard</Link>
            <Link to="/profile" className="btn btn-ghost" onClick={() => setOpen(false)}>Profile</Link>
            <button className="btn btn-ghost" onClick={() => { setOpen(false); handleLogout() }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-secondary" onClick={() => setOpen(false)}>Log in</Link>
            <Link to="/signup" className="btn btn-primary" onClick={() => setOpen(false)}>Create account</Link>
          </>
        )}
      </div>
    </header>
  )
}

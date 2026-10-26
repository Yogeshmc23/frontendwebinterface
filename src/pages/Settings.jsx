import { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Settings() {
  const { theme, toggle } = useTheme()
  const [notifs, setNotifs] = useState({ email: true, push: false, weekly: true })
  const [saved, setSaved] = useState(false)

  const save = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 1800)
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Preferences and workspace settings • Saved in <code>localStorage</code> (demo)</p>
        </div>
        {saved && <span className="badge badge-success">Saved</span>}
      </div>

      <div className="grid grid-2">
        <div className="surface" style={{ padding: 18, display: 'grid', gap: 14 }}>
          <h3 style={{ margin: 0, fontSize: 15 }}>Appearance</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-2)' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13 }}>Theme</div>
              <div className="small muted">Choose light or dark. Stored as <code>taskflow_theme</code>.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="small" style={{ fontWeight: 700, textTransform: 'capitalize' }}>{theme}</span>
              <button className={`toggle ${theme === 'dark' ? 'active' : ''}`} onClick={toggle} aria-label="Toggle theme"><span className="toggle-knob" /></button>
            </div>
          </div>

          <h3 style={{ margin: '4px 0 0', fontSize: 15 }}>Notifications</h3>
          {[
            { k: 'email', label: 'Email notifications', desc: 'Task assignments, mentions, due reminders' },
            { k: 'push', label: 'Push notifications', desc: 'Requires backend + service worker' },
            { k: 'weekly', label: 'Weekly summary', desc: 'Progress digest every Monday' },
          ].map((item) => (
            <div key={item.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{item.label}</div>
                <div className="small muted">{item.desc}</div>
              </div>
              <button className={`toggle ${notifs[item.k] ? 'active' : ''}`} onClick={() => setNotifs((s) => ({ ...s, [item.k]: !s[item.k] }))} aria-label={`Toggle ${item.label}`}><span className="toggle-knob" /></button>
            </div>
          ))}
          <button className="btn btn-primary" onClick={save}>Save preferences</button>
        </div>

        <div className="surface" style={{ padding: 18, display: 'grid', gap: 14 }}>
          <h3 style={{ margin: 0, fontSize: 15 }}>Workspace</h3>
          <div className="field">
            <label className="label" htmlFor="ws">Workspace name</label>
            <input id="ws" className="input" defaultValue="Sample Workspace" />
            <span className="help">Demo workspace name. Backend: <code>PUT /workspace</code></span>
          </div>
          <div className="field">
            <label className="label" htmlFor="url">API Base URL</label>
            <input id="url" className="input" defaultValue={import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'} readOnly />
            <span className="help">Set via <code>.env</code> as <code>VITE_API_BASE_URL</code>. Never hardcode secrets in frontend.</span>
          </div>
          <div style={{ background: 'var(--color-warning-soft)', border: '1px solid #FDE68A', borderRadius: 'var(--radius-md)', padding: 12, fontSize: 12, color: '#92400E', lineHeight: 1.6 }}>
            <strong>Security:</strong> Do not store sensitive tokens in localStorage in production - prefer <code>httpOnly</code> cookies set by Express. Demo uses localStorage for convenience.
          </div>
        </div>
      </div>
    </div>
  )
}

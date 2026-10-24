import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Profile() {
  const { user } = useAuth()
  const [form, setForm] = useState({
    name: user?.name || 'Alex Morgan',
    email: user?.email || 'alex@taskflow.demo',
    role: user?.role || 'Product Manager',
    bio: 'Building TaskFlow to help teams ship work faster. Focused on clarity, momentum, and craft.',
  })
  const [saved, setSaved] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Profile</h1>
          <p className="page-subtitle">Manage your personal information. Demo saves locally — wire to <code>PUT /users/me</code> for persistence.</p>
        </div>
        {saved && <span className="badge badge-success">Saved ✓</span>}
      </div>

      <div className="detail-grid">
        <form onSubmit={onSubmit} className="surface" style={{ padding: 18, display: 'grid', gap: 14 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <img src={user?.avatar || 'https://i.pravatar.cc/200?img=32'} alt={user?.name} width={64} height={64} style={{ borderRadius: '50%', border: '2px solid var(--color-border)' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 16 }}>{user?.name}</div>
              <div className="small muted">{user?.email}</div>
              <button type="button" className="btn btn-secondary btn-sm" style={{ marginTop: 8 }} onClick={() => alert('Demo: Upload avatar (requires backend storage)')}>Change photo</button>
            </div>
          </div>

          <div className="grid grid-2">
            <div className="field">
              <label className="label" htmlFor="name">Full name</label>
              <input id="name" className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="field">
              <label className="label" htmlFor="role">Role</label>
              <input id="role" className="input" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input id="email" type="email" className="input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <span className="help">We&apos;ll never share your email. Used for notifications via backend.</span>
          </div>

          <div className="field">
            <label className="label" htmlFor="bio">Bio</label>
            <textarea id="bio" className="textarea" rows={4} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />
          </div>

          <button className="btn btn-primary" type="submit">Save changes</button>
        </form>

        <div style={{ display: 'grid', gap: 14 }}>
          <div className="surface" style={{ padding: 16, display: 'grid', gap: 10 }}>
            <h3 style={{ margin: 0, fontSize: 14 }}>Account details</h3>
            <div style={{ display: 'grid', gap: 8, fontSize: 13 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="muted">Member since</span><strong>Oct 2024</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="muted">Projects</span><strong>12</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="muted">Tasks completed</span><strong>184</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="muted">Status</span><span className="badge badge-success">Active</span></div>
            </div>
          </div>

          <div className="surface" style={{ padding: 16, display: 'grid', gap: 10, borderColor: '#FECACA', background: 'var(--color-danger-soft)' }}>
            <h3 style={{ margin: 0, fontSize: 14, color: '#991B1B' }}>Danger zone</h3>
            <p style={{ margin: 0, fontSize: 12, color: '#7F1D1D', lineHeight: 1.6 }}>Deleting your account removes all demo data locally. Backend should implement <code>DELETE /users/me</code>.</p>
            <button className="btn btn-ghost btn-sm" style={{ color: 'var(--color-danger)', border: '1px solid #FECACA', background: 'white' }} onClick={() => alert('Demo: Delete account (requires backend)')}>Delete account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

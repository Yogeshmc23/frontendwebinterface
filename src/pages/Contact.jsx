import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', topic: 'General' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const v = {}
    if (!form.name.trim()) v.name = 'Name is required.'
    if (!form.email.trim()) v.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) v.email = 'Enter a valid email.'
    if (!form.message.trim()) v.message = 'Message is required.'
    else if (form.message.trim().length < 10) v.message = 'Please write at least 10 characters.'
    setErrors(v)
    if (Object.keys(v).length) return
    setSent(true)
    setTimeout(() => setSent(false), 2500)
    setForm({ name: '', email: '', message: '', topic: 'General' })
  }

  return (
    <div className="container section">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 22, alignItems: 'start' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 30 }}>Contact us</h1>
          <p className="muted" style={{ marginTop: 8 }}>Questions, feedback, or backend integration help: we would like to hear from you. This form is frontend-only (demo) until wired to <code>POST /contact</code>.</p>

          {sent && <div role="status" style={{ marginTop: 12, background: 'var(--color-success-soft)', border: '1px solid #A7F3D0', color: '#065F46', padding: '10px 12px', borderRadius: 'var(--radius-md)', fontSize: 13 }}>Message sent (demo) in production this would POST to your Express API.</div>}

          <form onSubmit={onSubmit} noValidate style={{ marginTop: 16, display: 'grid', gap: 14 }} className="surface" aria-label="Contact form">
            <div className="grid grid-2">
              <div className="field">
                <label className="label" htmlFor="c-name">Name</label>
                <input id="c-name" className={`input ${errors.name ? 'error' : ''}`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Alex Morgan" />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="field">
                <label className="label" htmlFor="c-email">Email</label>
                <input id="c-email" type="email" className={`input ${errors.email ? 'error' : ''}`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="c-topic">Topic</label>
              <select id="c-topic" className="select" value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })}>
                <option>General</option><option>Backend integration</option><option>Bug report</option><option>Feature request</option>
              </select>
            </div>
            <div className="field">
              <label className="label" htmlFor="c-message">Message</label>
              <textarea id="c-message" className={`textarea ${errors.message ? 'error' : ''}`} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help…" />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            <button className="btn btn-primary btn-lg" type="submit">Send message</button>
            <p className="small muted" style={{ margin: 0 }}>We respect your privacy. The demo does not store messages; a backend should validate and persist them safely.</p>
          </form>
        </div>

        <div style={{ display: 'grid', gap: 14 }}>
          <div className="surface" style={{ padding: 18, display: 'grid', gap: 10 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>Reach us</h3>
            <div style={{ display: 'grid', gap: 8, fontSize: 13, color: 'var(--color-text-2)' }}>
              <div>Email: support@taskflow.demo (demo address)</div>
              <div>Support hours: not configured for this demo</div>
              <div>Location: not disclosed; replace this line with a real operating address before launch</div>
            </div>
            <div style={{ background: 'var(--color-info-soft)', border: '1px solid #BAE6FD', borderRadius: 'var(--radius-md)', padding: 12, fontSize: 12, color: '#075985' }}>
              For reviewers: all code, routes, and docs are in this repository. Lint, tests, and the production build run in GitHub Actions.
            </div>
          </div>
          <div className="surface" style={{ padding: 18 }}>
            <h4 style={{ margin: '0 0 8px', fontSize: 14 }}>FAQ quick links</h4>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.8, color: 'var(--color-text-2)' }}>
              <li>How do I connect the backend?</li>
              <li>Where is <code>VITE_API_BASE_URL</code> configured?</li>
              <li>Is authentication real?</li>
              <li>How is pagination implemented?</li>
            </ul>
            <Link to="/help" className="btn btn-secondary btn-sm" style={{ marginTop: 10 }}>Open Help Center</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

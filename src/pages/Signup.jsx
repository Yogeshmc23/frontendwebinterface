import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { validateSignup } from '../utils/validators.js'

export default function Signup() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', agree: false })
  const [show, setShow] = useState(false)
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setServerError('')
    const v = validateSignup(form)
    if (!form.agree) v.agree = 'Please accept the terms to continue.'
    setErrors(v)
    if (Object.keys(v).length) return

    setLoading(true)
    try {
      await register(form)
      navigate('/dashboard', { replace: true })
    } catch (err) {
      setServerError(err.message || 'Registration failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-card">
      <div>
        <h1 style={{ margin: '0 0 6px', fontSize: 26, letterSpacing: '-.02em' }}>Create your workspace</h1>
        <p className="muted" style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}>Free to start. Invite your team after signup. <span className="badge badge-success">No backend required for demo</span></p>
      </div>

      {serverError && <div role="alert" style={{ background: 'var(--color-danger-soft)', border: '1px solid #FECACA', color: '#991B1B', padding: '10px 12px', borderRadius: 'var(--radius-md)', fontSize: 13 }}>{serverError}</div>}

      <form onSubmit={onSubmit} noValidate style={{ display: 'grid', gap: 14 }}>
        <div className="field">
          <label className="label" htmlFor="name">Full name</label>
          <input id="name" className={`input ${errors.name ? 'error' : ''}`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Alex Morgan" autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="field">
          <label className="label" htmlFor="email">Work email</label>
          <input id="email" className={`input ${errors.email ? 'error' : ''}`} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" autoComplete="email" aria-invalid={!!errors.email} />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="field">
          <label className="label" htmlFor="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input id="password" className={`input ${errors.password ? 'error' : ''}`} type={show ? 'text' : 'password'} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="At least 8 characters" autoComplete="new-password" aria-invalid={!!errors.password} />
            <button type="button" onClick={() => setShow((s) => !s)} className="btn btn-ghost btn-sm" style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)' }}>{show ? 'Hide' : 'Show'}</button>
          </div>
          {errors.password && <span className="error-text">{errors.password}</span>}
          <span className="help">Use 8+ characters with a letter and number.</span>
        </div>

        <div className="field">
          <label className="label" htmlFor="confirmPassword">Confirm password</label>
          <input id="confirmPassword" className={`input ${errors.confirmPassword ? 'error' : ''}`} type={show ? 'text' : 'password'} value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} placeholder="Repeat password" autoComplete="new-password" aria-invalid={!!errors.confirmPassword} />
          {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
        </div>

        <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: 'var(--color-text-2)', cursor: 'pointer' }}>
          <input type="checkbox" checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })} style={{ marginTop: 3 }} />
          <span>I agree to the <Link to="/help" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Terms</Link> and <Link to="/help" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Privacy Policy</Link>.</span>
        </label>
        {errors.agree && <span className="error-text" style={{ marginTop: -8 }}>{errors.agree}</span>}

        <button className="btn btn-primary btn-block btn-lg" type="submit" disabled={loading}>{loading ? 'Creating account…' : 'Create account'}</button>

        <p className="small text-center" style={{ margin: 0 }}>Already have an account? <Link to="/login" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Sign in</Link></p>
      </form>
    </div>
  )
}

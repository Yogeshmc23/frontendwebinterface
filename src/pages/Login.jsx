import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { validateLogin } from '../utils/validators.js'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'

  const [form, setForm] = useState({ email: 'alex@taskflow.demo', password: 'demo1234' })
  const [show, setShow] = useState(false)
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setServerError('')
    const v = validateLogin(form)
    setErrors(v)
    if (Object.keys(v).length) return

    setLoading(true)
    try {
      await login(form)
      navigate(from, { replace: true })
    } catch (err) {
      setServerError(err.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-card">
      <div>
        <h1 style={{ margin: '0 0 6px', fontSize: 26, letterSpacing: '-.02em' }}>Welcome back</h1>
        <p className="muted" style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}>Sign in to your TaskFlow workspace. <span className="badge badge-info">Demo mode: any valid email works</span></p>
      </div>

      {serverError && (
        <div role="alert" style={{ background: 'var(--color-danger-soft)', border: '1px solid #FECACA', color: '#991B1B', padding: '10px 12px', borderRadius: 'var(--radius-md)', fontSize: 13 }}>{serverError}</div>
      )}

      <form onSubmit={onSubmit} noValidate style={{ display: 'grid', gap: 14 }}>
        <div className="field">
          <label className="label" htmlFor="email">Email address</label>
          <input
            id="email" className={`input ${errors.email ? 'error' : ''}`} type="email" autoComplete="email"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com"
            aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <span id="email-error" className="error-text">{errors.email}</span>}
        </div>

        <div className="field">
          <label className="label" htmlFor="password">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              id="password" className={`input ${errors.password ? 'error' : ''}`} type={show ? 'text' : 'password'} autoComplete="current-password"
              value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="••••••••"
              aria-invalid={!!errors.password} aria-describedby={errors.password ? 'password-error' : undefined}
            />
            <button type="button" onClick={() => setShow((s) => !s)} className="btn btn-ghost btn-sm" style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)' }} aria-label={show ? 'Hide password' : 'Show password'}>
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span id="password-error" className="error-text">{errors.password}</span>}
          <Link to="/help" className="small" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Forgot password?</Link>
        </div>

        <button className="btn btn-primary btn-block btn-lg" type="submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>

        <div className="surface" style={{ padding: 12, borderRadius: 'var(--radius-md)', fontSize: 12, color: 'var(--color-text-3)', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--color-text-2)' }}>MERN integration note:</strong> This demo stores auth locally. With a real backend, replace <code>login()</code> in <code>src/context/AuthContext.jsx</code> with <code>authService.login()</code> from <code>src/services/api.js</code> which calls <code>POST /auth/login</code> and expects an <code>httpOnly</code> cookie or token.
        </div>

        <p className="small text-center" style={{ margin: 0 }}>
          Don&apos;t have an account? <Link to="/signup" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Create account</Link>
        </p>
      </form>
    </div>
  )
}

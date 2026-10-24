import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { mockUser } from '../utils/mockData.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('taskflow_user')
      return raw ? JSON.parse(raw) : null
    } catch { return null }
  })
  const [token, setToken] = useState(() => localStorage.getItem('taskflow_token') || null)

  useEffect(() => {
    if (user) localStorage.setItem('taskflow_user', JSON.stringify(user))
    else localStorage.removeItem('taskflow_user')
  }, [user])

  useEffect(() => {
    if (token) localStorage.setItem('taskflow_token', token)
    else localStorage.removeItem('taskflow_token')
  }, [token])

  const login = async ({ email, password }) => {
    // Demo mode: accept any valid form; real implementation would call authService.login
    // We keep it local but indicate demo badge in UI
    if (!email || !password) throw new Error('Missing credentials')
    const demoUser = { ...mockUser, email: email.trim(), name: mockUser.name }
    setUser(demoUser)
    setToken('demo_token_' + Date.now())
    return demoUser
  }

  const register = async ({ name, email, password }) => {
    if (!name || !email || !password) throw new Error('Missing fields')
    const newUser = { id: 'u_' + Date.now(), name: name.trim(), email: email.trim(), role: 'Member', avatar: mockUser.avatar }
    setUser(newUser)
    setToken('demo_token_' + Date.now())
    return newUser
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    // In real app: await authService.logout()
  }

  const value = useMemo(() => ({ user, token, isAuthenticated: !!user, login, register, logout }), [user, token])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

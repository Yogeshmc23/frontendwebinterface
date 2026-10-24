import axios from 'axios'

/**
 * Centralized API layer for TaskFlow.
 * All frontend requests should go through this file.
 * Backend is expected at VITE_API_BASE_URL (Node.js + Express + MongoDB).
 * Demo mode: when backend is unreachable we fall back to local mock data.
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
  withCredentials: true,
})

// Attach auth token if present (for JWT-based flows — backend may use httpOnly cookies instead)
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('taskflow_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error.message ||
      'Something went wrong'
    return Promise.reject(new Error(message))
  }
)

// Generic helpers
export async function apiGet(path, params) {
  const { data } = await apiClient.get(path, { params })
  return data
}
export async function apiPost(path, body) {
  const { data } = await apiClient.post(path, body)
  return data
}
export async function apiPut(path, body) {
  const { data } = await apiClient.put(path, body)
  return data
}
export async function apiPatch(path, body) {
  const { data } = await apiClient.patch(path, body)
  return data
}
export async function apiDelete(path) {
  const { data } = await apiClient.delete(path)
  return data
}

// Domain service functions — align with expected Express routes
export const authService = {
  login: (payload) => apiPost('/auth/login', payload),
  register: (payload) => apiPost('/auth/register', payload),
  logout: () => apiPost('/auth/logout', {}),
  me: () => apiGet('/auth/me'),
  forgotPassword: (payload) => apiPost('/auth/forgot-password', payload),
}

export const projectsService = {
  list: (params) => apiGet('/projects', params),
  get: (id) => apiGet(`/projects/${id}`),
  create: (payload) => apiPost('/projects', payload),
  update: (id, payload) => apiPut(`/projects/${id}`, payload),
  remove: (id) => apiDelete(`/projects/${id}`),
}

export const tasksService = {
  list: (params) => apiGet('/tasks', params),
  get: (id) => apiGet(`/tasks/${id}`),
  create: (payload) => apiPost('/tasks', payload),
  update: (id, payload) => apiPut(`/tasks/${id}`, payload),
  remove: (id) => apiDelete(`/tasks/${id}`),
  move: (id, status) => apiPatch(`/tasks/${id}/status`, { status }),
}

export const teamService = {
  list: () => apiGet('/team'),
}

export const statsService = {
  overview: () => apiGet('/stats/overview'),
}

export { API_BASE_URL }

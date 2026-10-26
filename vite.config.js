import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiBaseUrl = env.VITE_API_BASE_URL || 'http://localhost:5000/api'
  // The dev proxy expects the backend origin, not the /api path.
  const proxyTarget = env.VITE_DEV_PROXY_TARGET || apiBaseUrl.replace(/\/api\/?$/, '')

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      // Required for proxied preview hosts in cloud workspaces. Set an explicit
      // allowlist in production hosting instead of allowing every host.
      allowedHosts: true,
      proxy: {
        '/api': {
          target: proxyTarget,
          changeOrigin: true,
        },
      },
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
      allowedHosts: true,
    },
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.js',
      include: ['src/**/*.test.{js,jsx}'],
      clearMocks: true,
      restoreMocks: true,
    },
  }
})

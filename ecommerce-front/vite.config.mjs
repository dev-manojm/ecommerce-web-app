import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_')

  return {
    plugins: [react({ jsxRuntime: 'classic' })],
    server: { port: 3000 },
    build: { outDir: 'build' },
    define: {
      'process.env.REACT_APP_API_URL': env.REACT_APP_API_URL === undefined
        ? 'undefined'
        : JSON.stringify(env.REACT_APP_API_URL)
    }
  }
})

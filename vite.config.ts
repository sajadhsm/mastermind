/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const r = (...args: string[]) => resolve(__dirname, ...args)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  root: r('src'),
  resolve: {
    alias: {
      '@': r('src'),
    },
  },
  
  test: {
    globals: true,
    coverage: {
      reportsDirectory: 'tests/coverage',
    }
  },
})

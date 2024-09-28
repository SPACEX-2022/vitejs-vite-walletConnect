import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteVConsole } from 'vite-plugin-vconsole'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      viteVConsole({
        entry: path.resolve('src/main.js'), // or you can use entry: [path.resolve('src/main.ts')]
        enabled: true,
        config: {
          maxLogNumber: 1000,
          theme: 'dark'
        }
      })
  ],
})

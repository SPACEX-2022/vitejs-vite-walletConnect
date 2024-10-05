import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteVConsole } from 'vite-plugin-vconsole'
import * as path from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import mkcert from 'vite-plugin-mkcert'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   https: true
  // },
  build: {
    sourcemap: false
  },
  plugins: [
      vue(),
      // mkcert(),
      // basicSsl({
      //     /** name of certification */
      //     name: 'test',
      //     /** custom trust domains */
      //     domains: ['*.custom.com'],
      //     /** custom certification directory */
      //     certDir: '/Users/.../.devServer/cert'
      // }),
      viteVConsole({
        entry: path.resolve('src/main.js'), // or you can use entry: [path.resolve('src/main.ts')]
        enabled: true,
        config: {
          maxLogNumber: 1000,
          theme: 'dark'
        }
      })
  ],
    css: {
      postcss: {
          plugins: [
              postCssPxToRem({
                  rootValue:37.5,
                  propList:['*'],
              })
          ]
      }
    }
})

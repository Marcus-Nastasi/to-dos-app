import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
   rollupOptions: {
      input: {
         home: 'index.html',
         login: 'pages/login.html',
         updateTodo: 'pages/updateTodo.html',
         configurations: 'pages/config.html',
         account: 'pages/account.html',
         about: 'pages/about.html'
      },
      output: {
         dir: './dist'
      }
   }
  }
});



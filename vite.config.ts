import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 这引入node内置模块会有报错，要记住
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * root是用来设置根目录的位置，目的是可以访问到根目录下的index.html文件。如果模版文件在src外，这个就不生效了
   */
  root: path.join(__dirname, 'src'),
  plugins: [react()]
})

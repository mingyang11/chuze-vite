import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import path from 'path'
import autoprefixer from 'autoprefixer';

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * root是用来设置根目录的位置，目的是可以访问到根目录下的index.html文件。如果模版文件在src外，这个就不生效了
   */
  root: path.join(__dirname, 'src'),
  plugins: [react()],
  // 配置全局样式注入，这样就不用在每个文件入口处手动引入全局样式了
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
})

import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import path from 'path'
import autoprefixer from 'autoprefixer';
import svgr from "vite-plugin-svgr";
// import viteImagemin from 'vite-plugin-imagemin';

// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@assets": path.resolve(__dirname, 'src/assets')
    }
  },
  /**
   * root是用来设置根目录的位置，目的是可以访问到根目录下的index.html文件。如果模版文件在src外，这个就不生效了
   */
  // root: path.join(__dirname, 'src'),
  plugins: [
    react(),
    svgr(),
    // 图片压缩插件
    // viteImagemin({
    //   // 无损压缩配置，无损压缩下图片质量不会变差
    //   optipng: {
    //     optimizationLevel: 7
    //   },
    //   // 有损压缩配置，有损压缩下图片质量可能会变差
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //   },
    //   // svg 优化
    //   svgo: {
    //     plugins: [
    //       {
    //         name: 'removeViewBox'
    //       },
    //       {
    //         name: 'removeEmptyAttrs',
    //         active: false
    //       }
    //     ]
    //   }
    // })
  ],
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
  },
  // 设置静态资源界限，超过界限值则生成单独文件，否则作为base64字符串插入代码中
  build: {
    assetsInlineLimit: 8 * 1024
  },
  server: {
    open: true,
    port: 3301
  }
})

import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // ElementPlus({
    //   importStyle: 'sass',
    //   useSource: true
    // })
  ],
  resolve: {
    // 设置文件快捷路径
    alias: {
      '@': resolve('src')
    }
  },
})

function resolve(dir) {
  return path.join(__dirname, dir)
}


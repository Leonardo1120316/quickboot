import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import path, { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const { VITE_PUBLIC_PATH } = viteEnv
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    plugins: [
      vue(),
      /** 将 SVG 静态图转化为 Vue 组件 */
      svgLoader({ defaultImport: 'url' }),
      /** SVG */
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
        symbolId: "icon-[dir]-[name]"
      })
    ],
  }
}

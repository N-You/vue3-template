// vite.config.js
import { defineConfig, loadEnv } from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/vite@5.3.1_@types+node@20.12.7_less@4.2.0_sass@1.77.6/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.3.1_@types+node@20.12.7_less@4.2.0_sass@1.77.6__vue@3.4.30_typescript@5.4.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { VueUseComponentsResolver, ElementPlusResolver } from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/unplugin-vue-components@0.25.2_@babel+parser@7.24.7_rollup@4.14.1_vue@3.4.30_typescript@5.4.4_/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import AutoImport from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.11.0_vue@3.4.30_typescript@5.4.4___rollup@4.14.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/unplugin-vue-components@0.25.2_@babel+parser@7.24.7_rollup@4.14.1_vue@3.4.30_typescript@5.4.4_/node_modules/unplugin-vue-components/dist/vite.mjs";
import Pages from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/vite-plugin-pages@0.32.3_@vue+compiler-sfc@3.4.30_vite@5.3.1_@types+node@20.12.7_less@4.2.0_s_xnerucqpdxkseg25xl5amjwit4/node_modules/vite-plugin-pages/dist/index.js";
import { Plugin as importToCDN } from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/vite-plugin-cdn-import@0.3.5_rollup@4.14.1/node_modules/vite-plugin-cdn-import/dist/index.js";
import { visualizer } from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.14.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import Icons from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/unplugin-icons@0.17.4_@vue+compiler-sfc@3.4.30/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/unplugin-icons@0.17.4_@vue+compiler-sfc@3.4.30/node_modules/unplugin-icons/dist/resolver.mjs";
import { viteMockServe } from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/vite-plugin-mock@3.0.2_esbuild@0.21.5_mockjs@1.1.0_vite@5.3.1_@types+node@20.12.7_less@4.2.0_sass@1.77.6_/node_modules/vite-plugin-mock/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/web%E9%A1%B9%E7%9B%AE/%E4%BB%A8%E4%BA%BA%E8%A1%8C/vue3-template/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.3.1_@types+node@20.12.7_less@4.2.0_sass@1.77.6_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\web\u9879\u76EE\\\u4EE8\u4EBA\u884C\\vue3-template";
var vite_config_default = ({ mode }) => {
  const { VITE_PORT, VITE_BASE_URL } = loadEnv(mode, process.cwd());
  const proxy = {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, "")
    }
  };
  return defineConfig({
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      // 自动导入方法
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        resolvers: [VueUseComponentsResolver()],
        eslintrc: {
          enabled: true
        },
        dts: true
      }),
      // 动态导入第三方组件
      Components({
        resolvers: [
          // icons图标库导入
          IconsResolver({
            prefix: "icon"
          }),
          ElementPlusResolver()
        ]
      }),
      //svg插件配置
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]"
      }),
      // 导入icons图标
      Icons({
        autoInstall: true,
        compiler: "vue3"
      }),
      // 自动生成路由
      Pages({
        importMode: "async",
        // 识别带有vue后缀的文件为路由
        extensions: ["vue"],
        // 排除components下的路由
        exclude: ["**/components/*.vue"]
      }),
      //优化生产环境下cdn方式引入第三方库
      importToCDN({
        modules: [
          {
            name: "vue",
            var: "Vue",
            path: "https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.min.js"
          },
          {
            name: "vue-demi",
            var: "VueDemi",
            path: "https://cdn.jsdelivr.net/npm/vue-demi@0.14.6/lib/index.iife.min.js"
          },
          {
            name: "dayjs",
            var: "dayjs",
            path: "https://cdn.jsdelivr.net/npm/dayjs@1.11.10/dayjs.min.js"
          },
          {
            name: "pinia",
            var: "Pinia",
            path: "https://cdn.jsdelivr.net/npm/pinia@2.1.7/dist/pinia.iife.min.js"
          },
          {
            name: "vue-i18n",
            var: "VueI18n",
            path: "https://cdn.jsdelivr.net/npm/vue-i18n@9.11.1/dist/vue-i18n.global.min.js"
          },
          {
            name: "element-plus",
            var: "ElementPlus",
            path: "https://cdn.jsdelivr.net/npm/element-plus@2.7.6/dist/index.full.min.js",
            css: "https://cdn.jsdelivr.net/npm/element-plus@2.7.6/dist/index.min.css"
          }
        ]
      }),
      // Mock
      viteMockServe({
        // 在哪个文件夹下编写模拟接口的代码
        mockPath: "./src/mock",
        // 在开发环境开启mock
        localEnabled: true
      }),
      // 打包体积预览
      visualizer({
        open: true
      })
    ],
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src")
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve("src/style/variables.less")}";`
          },
          math: "strict",
          javascriptEnabled: true
        }
      }
    },
    optimizeDeps: {
      include: ["mitt", "dayjs", "axios", "pinia", "@vueuse/core", "vue-i18n"],
      exclude: ["@iconify-icons/lets-icons"]
    },
    server: {
      // 端口号
      port: VITE_PORT,
      // 监听所有地址
      host: "0.0.0.0",
      // 服务启动时是否自动打开浏览器
      open: true,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {},
      // 预热文件以提前转换和缓存结果，降低启动期间的初始页面加载时长并防止转换瀑布
      warmup: {
        clientFiles: ["./index.html", "./src/{views,components}/*"]
      }
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: "es2015",
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2e3,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
      // 自定义底层的 Rollup 打包配置
      rollupOptions: {
        output: {
          // 指定 chunks 的入口文件模式
          entryFileNames: "static/js/[name]-[hash].js",
          // 对代码分割中产生的 chunk 自定义命名
          chunkFileNames: "static/js/[name]-[hash].js",
          // 自定义构建结果中的静态资源名称
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          // 压缩 Rollup 产生的额外代码
          compact: true,
          // 创建自定义的公共 chunk
          manualChunks: {
            vue: ["vue-router"]
          }
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJcdTk4NzlcdTc2RUVcXFxcXHU0RUU4XHU0RUJBXHU4ODRDXFxcXHZ1ZTMtdGVtcGxhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdlYlx1OTg3OVx1NzZFRVxcXFxcdTRFRThcdTRFQkFcdTg4NENcXFxcdnVlMy10ZW1wbGF0ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd2ViJUU5JUExJUI5JUU3JTlCJUFFLyVFNCVCQiVBOCVFNCVCQSVCQSVFOCVBMSU4Qy92dWUzLXRlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5cbmltcG9ydCB7IFZ1ZVVzZUNvbXBvbmVudHNSZXNvbHZlciwgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJztcbmltcG9ydCB7IFBsdWdpbiBhcyBpbXBvcnRUb0NETiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWNkbi1pbXBvcnQnO1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XG5cbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJztcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJztcblxuaW1wb3J0IHsgdml0ZU1vY2tTZXJ2ZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xuXG4vLyBzdmdcdTdFQzRcdTRFRjZcdTYzRDJcdTRFRjZcdTVCRkNcdTUxNjVcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IHsgVklURV9QT1JULCBWSVRFX0JBU0VfVVJMIH0gPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpO1xuXG4gIC8vIFx1NTQwRVx1N0FFRlx1NjNBNVx1NTNFM1x1NEVFM1x1NzQwNlx1OTE0RFx1N0Y2RVxuICBjb25zdCBwcm94eSA9IHtcbiAgICAnL2FwaSc6IHtcbiAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XG4gICAgYmFzZTogVklURV9CQVNFX1VSTCxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NjVCOVx1NkNENVxuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAncGluaWEnXSxcbiAgICAgICAgcmVzb2x2ZXJzOiBbVnVlVXNlQ29tcG9uZW50c1Jlc29sdmVyKCldLFxuICAgICAgICBlc2xpbnRyYzoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGR0czogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgLy8gXHU1MkE4XHU2MDAxXHU1QkZDXHU1MTY1XHU3QjJDXHU0RTA5XHU2NUI5XHU3RUM0XHU0RUY2XG4gICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgLy8gaWNvbnNcdTU2RkVcdTY4MDdcdTVFOTNcdTVCRkNcdTUxNjVcbiAgICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICAgIHByZWZpeDogJ2ljb24nLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgLy9zdmdcdTYzRDJcdTRFRjZcdTkxNERcdTdGNkVcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgICAgIGljb25EaXJzOiBbcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcbiAgICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXG4gICAgICB9KSxcbiAgICAgIC8vIFx1NUJGQ1x1NTE2NWljb25zXHU1NkZFXHU2ODA3XG4gICAgICBJY29ucyh7XG4gICAgICAgIGF1dG9JbnN0YWxsOiB0cnVlLFxuICAgICAgICBjb21waWxlcjogJ3Z1ZTMnLFxuICAgICAgfSksXG4gICAgICAvLyBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdThERUZcdTc1MzFcbiAgICAgIFBhZ2VzKHtcbiAgICAgICAgaW1wb3J0TW9kZTogJ2FzeW5jJyxcbiAgICAgICAgLy8gXHU4QkM2XHU1MjJCXHU1RTI2XHU2NzA5dnVlXHU1NDBFXHU3RjAwXHU3Njg0XHU2NTg3XHU0RUY2XHU0RTNBXHU4REVGXHU3NTMxXG4gICAgICAgIGV4dGVuc2lvbnM6IFsndnVlJ10sXG4gICAgICAgIC8vIFx1NjM5Mlx1OTY2NGNvbXBvbmVudHNcdTRFMEJcdTc2ODRcdThERUZcdTc1MzFcbiAgICAgICAgZXhjbHVkZTogWycqKi9jb21wb25lbnRzLyoudnVlJ10sXG4gICAgICB9KSxcbiAgICAgIC8vXHU0RjE4XHU1MzE2XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU0RTBCY2RuXHU2NUI5XHU1RjBGXHU1RjE1XHU1MTY1XHU3QjJDXHU0RTA5XHU2NUI5XHU1RTkzXG4gICAgICBpbXBvcnRUb0NETih7XG4gICAgICAgIG1vZHVsZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndnVlJyxcbiAgICAgICAgICAgIHZhcjogJ1Z1ZScsXG4gICAgICAgICAgICBwYXRoOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS92dWVAMy40LjIxL2Rpc3QvdnVlLmdsb2JhbC5taW4uanMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3Z1ZS1kZW1pJyxcbiAgICAgICAgICAgIHZhcjogJ1Z1ZURlbWknLFxuICAgICAgICAgICAgcGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vdnVlLWRlbWlAMC4xNC42L2xpYi9pbmRleC5paWZlLm1pbi5qcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZGF5anMnLFxuICAgICAgICAgICAgdmFyOiAnZGF5anMnLFxuICAgICAgICAgICAgcGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZGF5anNAMS4xMS4xMC9kYXlqcy5taW4uanMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3BpbmlhJyxcbiAgICAgICAgICAgIHZhcjogJ1BpbmlhJyxcbiAgICAgICAgICAgIHBhdGg6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BpbmlhQDIuMS43L2Rpc3QvcGluaWEuaWlmZS5taW4uanMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3Z1ZS1pMThuJyxcbiAgICAgICAgICAgIHZhcjogJ1Z1ZUkxOG4nLFxuICAgICAgICAgICAgcGF0aDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vdnVlLWkxOG5AOS4xMS4xL2Rpc3QvdnVlLWkxOG4uZ2xvYmFsLm1pbi5qcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZWxlbWVudC1wbHVzJyxcbiAgICAgICAgICAgIHZhcjogJ0VsZW1lbnRQbHVzJyxcbiAgICAgICAgICAgIHBhdGg6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2VsZW1lbnQtcGx1c0AyLjcuNi9kaXN0L2luZGV4LmZ1bGwubWluLmpzJyxcbiAgICAgICAgICAgIGNzczogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vZWxlbWVudC1wbHVzQDIuNy42L2Rpc3QvaW5kZXgubWluLmNzcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgLy8gTW9ja1xuICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgIC8vIFx1NTcyOFx1NTRFQVx1NEUyQVx1NjU4N1x1NEVGNlx1NTkzOVx1NEUwQlx1N0YxNlx1NTE5OVx1NkEyMVx1NjJERlx1NjNBNVx1NTNFM1x1NzY4NFx1NEVFM1x1NzgwMVxuICAgICAgICBtb2NrUGF0aDogJy4vc3JjL21vY2snLFxuICAgICAgICAvLyBcdTU3MjhcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTVGMDBcdTU0MkZtb2NrXG4gICAgICAgIGxvY2FsRW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgLy8gXHU2MjUzXHU1MzA1XHU0RjUzXHU3OUVGXHU5ODg0XHU4OUM4XG4gICAgICB2aXN1YWxpemVyKHtcbiAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBsZXNzOiB7XG4gICAgICAgICAgbW9kaWZ5VmFyczoge1xuICAgICAgICAgICAgaGFjazogYHRydWU7IEBpbXBvcnQgKHJlZmVyZW5jZSkgXCIke3Jlc29sdmUoJ3NyYy9zdHlsZS92YXJpYWJsZXMubGVzcycpfVwiO2AsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXRoOiAnc3RyaWN0JyxcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGluY2x1ZGU6IFsnbWl0dCcsICdkYXlqcycsICdheGlvcycsICdwaW5pYScsICdAdnVldXNlL2NvcmUnLCAndnVlLWkxOG4nXSxcbiAgICAgIGV4Y2x1ZGU6IFsnQGljb25pZnktaWNvbnMvbGV0cy1pY29ucyddLFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAvLyBcdTdBRUZcdTUzRTNcdTUzRjdcbiAgICAgIHBvcnQ6IFZJVEVfUE9SVCxcbiAgICAgIC8vIFx1NzZEMVx1NTQyQ1x1NjI0MFx1NjcwOVx1NTczMFx1NTc0MFxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgLy8gXHU2NzBEXHU1MkExXHU1NDJGXHU1MkE4XHU2NUY2XHU2NjJGXHU1NDI2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgLy8gXHU1MTQxXHU4QkI4XHU4REU4XHU1N0RGXG4gICAgICBjb3JzOiB0cnVlLFxuICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RUUzXHU3NDA2XHU4OUM0XHU1MjE5XG4gICAgICBwcm94eToge30sXG4gICAgICAvLyBcdTk4ODRcdTcwRURcdTY1ODdcdTRFRjZcdTRFRTVcdTYzRDBcdTUyNERcdThGNkNcdTYzNjJcdTU0OENcdTdGMTNcdTVCNThcdTdFRDNcdTY3OUNcdUZGMENcdTk2NERcdTRGNEVcdTU0MkZcdTUyQThcdTY3MUZcdTk1RjRcdTc2ODRcdTUyMURcdTU5Q0JcdTk4NzVcdTk3NjJcdTUyQTBcdThGN0RcdTY1RjZcdTk1N0ZcdTVFNzZcdTk2MzJcdTZCNjJcdThGNkNcdTYzNjJcdTcwMTFcdTVFMDNcbiAgICAgIHdhcm11cDoge1xuICAgICAgICBjbGllbnRGaWxlczogWycuL2luZGV4Lmh0bWwnLCAnLi9zcmMve3ZpZXdzLGNvbXBvbmVudHN9LyonXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgLy8gXHU4QkJFXHU3RjZFXHU2NzAwXHU3RUM4XHU2Nzg0XHU1RUZBXHU3Njg0XHU2RDRGXHU4OUM4XHU1NjY4XHU1MTdDXHU1QkI5XHU3NkVFXHU2ODA3XG4gICAgICB0YXJnZXQ6ICdlczIwMTUnLFxuICAgICAgLy8gXHU2Nzg0XHU1RUZBXHU1NDBFXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwIHNvdXJjZSBtYXAgXHU2NTg3XHU0RUY2XG4gICAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgICAgLy8gIGNodW5rIFx1NTkyN1x1NUMwRlx1OEI2Nlx1NTQ0QVx1NzY4NFx1OTY1MFx1NTIzNlx1RkYwOFx1NEVFNSBrYnMgXHU0RTNBXHU1MzU1XHU0RjREXHVGRjA5XG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsXG4gICAgICAvLyBcdTU0MkZcdTc1MjgvXHU3OTgxXHU3NTI4IGd6aXAgXHU1MzhCXHU3RjI5XHU1OTI3XHU1QzBGXHU2MkE1XHU1NDRBXG4gICAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogZmFsc2UsXG4gICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTVFOTVcdTVDNDJcdTc2ODQgUm9sbHVwIFx1NjI1M1x1NTMwNVx1OTE0RFx1N0Y2RVxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAvLyBcdTYzMDdcdTVCOUEgY2h1bmtzIFx1NzY4NFx1NTE2NVx1NTNFM1x1NjU4N1x1NEVGNlx1NkEyMVx1NUYwRlxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAgIC8vIFx1NUJGOVx1NEVFM1x1NzgwMVx1NTIwNlx1NTI3Mlx1NEUyRFx1NEVBN1x1NzUxRlx1NzY4NCBjaHVuayBcdTgxRUFcdTVCOUFcdTRFNDlcdTU0N0RcdTU0MERcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogJ3N0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTY3ODRcdTVFRkFcdTdFRDNcdTY3OUNcdTRFMkRcdTc2ODRcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTU0MERcdTc5RjBcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ3N0YXRpYy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJyxcbiAgICAgICAgICAvLyBcdTUzOEJcdTdGMjkgUm9sbHVwIFx1NEVBN1x1NzUxRlx1NzY4NFx1OTg5RFx1NTkxNlx1NEVFM1x1NzgwMVxuICAgICAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICAgICAgLy8gXHU1MjFCXHU1RUZBXHU4MUVBXHU1QjlBXHU0RTQ5XHU3Njg0XHU1MTZDXHU1MTcxIGNodW5rXG4gICAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgICB2dWU6IFsndnVlLXJvdXRlciddLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1QsU0FBUyxjQUFjLGVBQWU7QUFDdFYsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUVoQixTQUFTLDBCQUEwQiwyQkFBMkI7QUFDOUQsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsVUFBVSxtQkFBbUI7QUFDdEMsU0FBUyxrQkFBa0I7QUFFM0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBRTFCLFNBQVMscUJBQXFCO0FBRzlCLFNBQVMsNEJBQTRCO0FBakJyQyxJQUFNLG1DQUFtQztBQW1CekMsSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQzNCLFFBQU0sRUFBRSxXQUFXLGNBQWMsSUFBSSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFHaEUsUUFBTSxRQUFRO0FBQUEsSUFDWixRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixjQUFjO0FBQUEsTUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsSUFDOUM7QUFBQSxFQUNGO0FBRUEsU0FBTyxhQUFhO0FBQUEsSUFDbEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBO0FBQUEsTUFFSixXQUFXO0FBQUEsUUFDVCxTQUFTLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQSxRQUN0QyxXQUFXLENBQUMseUJBQXlCLENBQUM7QUFBQSxRQUN0QyxVQUFVO0FBQUEsVUFDUixTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsS0FBSztBQUFBLE1BQ1AsQ0FBQztBQUFBO0FBQUEsTUFFRCxXQUFXO0FBQUEsUUFDVCxXQUFXO0FBQUE7QUFBQSxVQUVULGNBQWM7QUFBQSxZQUNaLFFBQVE7QUFBQSxVQUNWLENBQUM7QUFBQSxVQUNELG9CQUFvQjtBQUFBLFFBQ3RCO0FBQUEsTUFDRixDQUFDO0FBQUE7QUFBQSxNQUVELHFCQUFxQjtBQUFBO0FBQUEsUUFFbkIsVUFBVSxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQTtBQUFBLFFBRXJELFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQTtBQUFBLE1BRUQsTUFBTTtBQUFBLFFBQ0osYUFBYTtBQUFBLFFBQ2IsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBO0FBQUEsTUFFRCxNQUFNO0FBQUEsUUFDSixZQUFZO0FBQUE7QUFBQSxRQUVaLFlBQVksQ0FBQyxLQUFLO0FBQUE7QUFBQSxRQUVsQixTQUFTLENBQUMscUJBQXFCO0FBQUEsTUFDakMsQ0FBQztBQUFBO0FBQUEsTUFFRCxZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxVQUNQO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBO0FBQUEsTUFFRCxjQUFjO0FBQUE7QUFBQSxRQUVaLFVBQVU7QUFBQTtBQUFBLFFBRVYsY0FBYztBQUFBLE1BQ2hCLENBQUM7QUFBQTtBQUFBLE1BRUQsV0FBVztBQUFBLFFBQ1QsTUFBTTtBQUFBLE1BQ1IsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixZQUFZO0FBQUEsWUFDVixNQUFNLDhCQUE4QixRQUFRLDBCQUEwQixDQUFDO0FBQUEsVUFDekU7QUFBQSxVQUNBLE1BQU07QUFBQSxVQUNOLG1CQUFtQjtBQUFBLFFBQ3JCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaLFNBQVMsQ0FBQyxRQUFRLFNBQVMsU0FBUyxTQUFTLGdCQUFnQixVQUFVO0FBQUEsTUFDdkUsU0FBUyxDQUFDLDJCQUEyQjtBQUFBLElBQ3ZDO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFBQSxNQUVOLE1BQU07QUFBQTtBQUFBLE1BRU4sTUFBTTtBQUFBO0FBQUEsTUFFTixNQUFNO0FBQUE7QUFBQSxNQUVOLE1BQU07QUFBQTtBQUFBLE1BRU4sT0FBTyxDQUFDO0FBQUE7QUFBQSxNQUVSLFFBQVE7QUFBQSxRQUNOLGFBQWEsQ0FBQyxnQkFBZ0IsNEJBQTRCO0FBQUEsTUFDNUQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUE7QUFBQSxNQUVMLFFBQVE7QUFBQTtBQUFBLE1BRVIsV0FBVztBQUFBO0FBQUEsTUFFWCx1QkFBdUI7QUFBQTtBQUFBLE1BRXZCLHNCQUFzQjtBQUFBO0FBQUEsTUFFdEIsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBO0FBQUEsVUFFTixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIsZ0JBQWdCO0FBQUE7QUFBQSxVQUVoQixTQUFTO0FBQUE7QUFBQSxVQUVULGNBQWM7QUFBQSxZQUNaLEtBQUssQ0FBQyxZQUFZO0FBQUEsVUFDcEI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K

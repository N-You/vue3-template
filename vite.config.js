import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import { Plugin as importToCDN } from 'vite-plugin-cdn-import';
import { visualizer } from 'rollup-plugin-visualizer';

import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

import { viteMockServe } from 'vite-plugin-mock';

// svg组件插件导入
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default ({ mode }) => {
  const { VITE_PORT, VITE_BASE_URL } = loadEnv(mode, process.cwd());

  // 后端接口代理配置
  const proxy = {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  };

  return defineConfig({
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      // 自动导入方法
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [VueUseComponentsResolver()],
        eslintrc: {
          enabled: true,
        },
        dts: true,
      }),
      // 动态导入第三方组件
      Components({
        resolvers: [
          // icons图标库导入
          IconsResolver({
            prefix: 'icon',
          }),
        ],
      }),
      //svg插件配置
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      // 导入icons图标
      Icons({
        autoInstall: true,
        compiler: 'vue3',
      }),
      // 自动生成路由
      Pages({
        importMode: 'async',
        // 识别带有vue后缀的文件为路由
        extensions: ['vue'],
        // 排除components下的路由
        exclude: ['**/components/*.vue'],
      }),
      //优化生产环境下cdn方式引入第三方库
      importToCDN({
        modules: [
          {
            name: 'vue',
            var: 'Vue',
            path: 'https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.min.js',
          },
          {
            name: 'vue-demi',
            var: 'VueDemi',
            path: 'https://cdn.jsdelivr.net/npm/vue-demi@0.14.6/lib/index.iife.min.js',
          },
          {
            name: 'dayjs',
            var: 'dayjs',
            path: 'https://cdn.jsdelivr.net/npm/dayjs@1.11.10/dayjs.min.js',
          },
          {
            name: 'pinia',
            var: 'Pinia',
            path: 'https://cdn.jsdelivr.net/npm/pinia@2.1.7/dist/pinia.iife.min.js',
          },
          {
            name: 'vue-i18n',
            var: 'VueI18n',
            path: 'https://cdn.jsdelivr.net/npm/vue-i18n@9.11.1/dist/vue-i18n.global.min.js',
          },
        ],
      }),
      // Mock
      viteMockServe({
        // 在哪个文件夹下编写模拟接口的代码
        mockPath: './src/mock',
        // 在开发环境开启mock
        localEnabled: true,
      }),
      // 打包体积预览
      visualizer({
        open: true,
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/style/variables.less')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
    },
    optimizeDeps: {
      include: ['mitt', 'dayjs', 'axios', 'pinia', '@vueuse/core', 'vue-i18n'],
      exclude: ['@iconify-icons/lets-icons'],
    },
    server: {
      // 端口号
      port: VITE_PORT,
      // 监听所有地址
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      open: true,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {},
      // 预热文件以提前转换和缓存结果，降低启动期间的初始页面加载时长并防止转换瀑布
      warmup: {
        clientFiles: ['./index.html', './src/{views,components}/*'],
      },
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
      // 自定义底层的 Rollup 打包配置
      rollupOptions: {
        output: {
          // 指定 chunks 的入口文件模式
          entryFileNames: 'static/js/[name]-[hash].js',
          // 对代码分割中产生的 chunk 自定义命名
          chunkFileNames: 'static/js/[name]-[hash].js',
          // 自定义构建结果中的静态资源名称
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 压缩 Rollup 产生的额外代码
          compact: true,
          // 创建自定义的公共 chunk
          manualChunks: {
            vue: ['vue-router'],
          },
        },
      },
    },
  });
};

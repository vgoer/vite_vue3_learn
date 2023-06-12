import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],

    // 路径
    resolve: {
        alias: {
            '@': path.resolve('./src'), // @代替src
        },
    },

    // less
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve(
                        'src/styles/base.less',
                    )}";`,
                },
                javascriptEnabled: true,
            },
        },
    },

    // 内网
    server: {
        host: true, // 指定监听的IP地址
        port: 3333, // 指定服务器端口
        open: true, // 开发服务器启动时，自动在浏览器打开
        strictPort: false, // 设为 true 时，若端口已被占用会直接退出，不会尝试下一个可用端口
        https: false, // 是否开启 https 服务
        cors: true, // 允许跨域
        // 配置代理
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000', // 接口地址。
                changeOrigin: true, // 接口跨域。
                secure: false, // 启用 https 服务时需要配置。
            },
        },
    },

    // 打包
    build: {
        target: 'modules', // 浏览器兼容目标
        outDir: 'dist', // 打包输出路径
        assetsDir: 'assets', // 静态资源存放路径
        cssCodeSplit: true, // 允许 css 代码拆分
        sourcemap: false, // 不生成 sourceMap 文件
        minify: 'terser', // 缩小文件体积
        terserOptions: {
            compress: {
                drop_console: true, // 取消 console
                drop_debugger: true, // 取消 debugger
            },
        },
    },
});

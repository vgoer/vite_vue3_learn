import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],

    // 路径
    resolve:{
        alias:{
            '@':path.resolve('./src'),   // @代替src
        }
    },

    // less 
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve("src/styles/base.less")}";`,
                },
                javascriptEnabled: true,
            },
        },
    },

    // 内网
    server:{
        host:true,  // 内网
        cors:true,  //为开发服务器配置 CORS , 默认启用并允许任何源
        open:false,  //服务启动时自动在浏览器中打开应用
        port:'8888'
    },
    // 打包
    build:{
      target:"modules",    //浏览器兼容性  "esnext"|"modules"
      outDir: "dist",       //指定输出路径
      cssCodeSplit:true,   //启用/禁用 CSS 代码拆分
    }
})

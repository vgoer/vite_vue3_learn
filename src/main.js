import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index.js';
import { createPinia } from 'pinia'

// css
import './style.css';
import './reset.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App);
// router
app.use(router);

const pinia = createPinia()
app.use(pinia)


app.use(ElementPlus,{
    locale:zhCn
})


app.mount('#app');

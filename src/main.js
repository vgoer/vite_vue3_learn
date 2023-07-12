import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index.js';
import { createPinia } from 'pinia';

// 数据大屏
import DataVVue3  from '@kjgl77/datav-vue3'

// css
import './style.css';
import './reset.css';
import './tailwind.css';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const app = createApp(App);
// router
app.use(router);


app.use(DataVVue3)

const pinia = createPinia();
app.use(pinia);


app.use(ElementPlus, {
    locale: zhCn,
});




app.mount('#app');

import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index.js';
import { createPinia } from 'pinia'

// css
import './style.css';
import './reset.css'
import 'element-plus/dist/index.css'

const app = createApp(App);
// router
app.use(router);

const pinia = createPinia()
app.use(pinia)


app.mount('#app');

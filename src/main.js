import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index.js';

// css
import './style.css';
import './reset.css'
import 'element-plus/dist/index.css'

const app = createApp(App);
// router
app.use(router);

app.mount('#app');

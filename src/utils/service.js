import axios from 'axios';

// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: true, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 更改启动时使用的最小百分比
    parent: 'body', //指定进度条的父容器
});

/**
 * 请求配置
 */
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 4000,
    headers: {
        'Content-Type': 'application/json;chartset=utf-8',
    },
});

/**
 * 请求拦截器
 */
service.interceptors.request.use(
    (config) => {
        NProgress.start();
        return config;
    },

    (error) => {
        return Promise.reject(error);
    },
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
    (response) => {
        NProgress.done();
        return response;
    },

    (error) => {
        NProgress.done();
        return Promise.reject(error);
    },
);

export default service;

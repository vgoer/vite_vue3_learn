import { createRouter, createWebHashHistory } from 'vue-router';

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

const routes = [
    // 首页
    {
        path: '/',
        name: 'Index',
        redirect: '/home',
        component: () => import('@/layout/layout.vue'),
        children: [
            // 首页
            {
                path: '/',
                name: 'Home',
                component: () => import('@/views/home/home.vue'),
            },

            // 面板
            {
                path: '/panel',
                name: 'Panel',
                component: () => import('@/views/panel/panel.vue'),
            },
        ],
    },
    // 数据面板
    {
        path:"/data",
        name:"Data",
        component:() => import('@/views/data/data.vue')
    },
    // 登录
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login.vue'),
    },
    {
        path: '/echarts',
        name: 'Echarts',
        component: () => import('@/views/echarts/echarts.vue'),
    },
    {
        path: '/guangdong',
        name: 'Guangdong',
        component: () => import('@/views/guangdong/guangdong.vue'),
    },

    // 404
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/404/404.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

router.afterEach((to, from) => {
    NProgress.done();
});
export default router;

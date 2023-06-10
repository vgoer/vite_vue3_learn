import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    // 首页
    {
        path:'/',
        name:'Index',
        redirect: "/home",
        component:() => import("@/layout/layout.vue"),
        children:[
            // 首页
            {
                path:"/home",
                name:"Home",
                component:() => import("@/views/home/home.vue")
            },
            
            // 面板
            {
                path:"/panel",
                name:"Panel",
                component:() => import("@/views/panel/panel.vue")
            }
        ]
    },


    // 登录
    {
        path:"/login",
        name:"Login",
        component:() => import("@/views/login/login.vue")
    },

    // 404
    {
        path:"/:pathMatch(.*)*",
        name:"NotFound",
        component:() => import("@/views/404/404.vue")
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
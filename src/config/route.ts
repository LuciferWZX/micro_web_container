

const routes:any[]=[
    //登录的layout
    {
        path: '/entrance',
        component: '@/layouts/loginLayout',
        routes: [
            { path: '/entrance',redirect:'/entrance/login'},
            { path: '/entrance/login', component: 'login' },
        ],
    },
    //主页的路由
    {
        path: '/',
        component: '@/layouts/homeLayout',
        routes: [
            { path: '/',redirect:'/home'},
            { path: '/home', component: 'home' },
        ],
    }, ]
export default routes
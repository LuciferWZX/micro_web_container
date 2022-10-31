

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
            { path: '/socket', component: 'socket' },
            { path: '/json', component: 'json' },
            { path: '/lowCode', component: 'lowCode' },
        ],
    }, ]
export default routes
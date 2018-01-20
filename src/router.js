const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
        path: '/post',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/post.vue'], resolve)
    },{
        path: '/player',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/player.vue'], resolve)
    },{
        path: '/ebook',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/ebook.vue'], resolve)
    },{
        path: '/article',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/article.vue'], resolve)
    },{
        path:'*',
        redirect:'/'
    }
];
export default routers;
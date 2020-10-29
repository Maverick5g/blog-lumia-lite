var routes = [
    {
        path:'/',
        component:{
            template:'<home></home>'
        }
    },{
        path:'/blog',
        components:{
            blogcard: {
                template: '<blogcard></blogcard>'
            },
        }
    },{
        path:'/about',
        component:{
            template:'<about></about>'
        }
    },{
        path: '/blog/:article',
        components:{
            template:'<article></article>'
        }
    }
]

var router = new VueRouter({
    routes:routes,
})

var app = new Vue({
    el:'#app',
    router:router,
})
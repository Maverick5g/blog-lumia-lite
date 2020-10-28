var routes = [
    {
        path:'/',
        component:{
            template:'<h1>WelcomeToHome</h1>'
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
            template:'<h1>关于我</h1>'
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
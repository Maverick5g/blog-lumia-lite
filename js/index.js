var routes = [
    {
        path:'/',
        components:{
            home: {
                template:'<home></home>'
            }
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
        components:{
            about: {
                template:'<about></about>'
            }
        }
    },{
        path: '/blog/:article',
        components:{
            blogArticle: {
                template:'<blogArticle></blogArticle>'
            }
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
Vue.component('blogcard', {
    data() {
        return {
            items: []
        }
    },
    template: '<div id="blogs" class="container">\n' +
        '    <div class="blog-titles" v-for="item in items">\n' +
        '       <router-link v-bind:to=" \'/blog/\' + item.slug">' +
        '        <div class="card">\n' +
        '            <div class="card-body">\n' +
        '                <h5 class="card-title">{{item.title}}</h5>\n' +
        '                <div v-for="tag in item.tags">\n' +
        '                    <h6 class="card-subtitle mb-2 text-muted">{{tag.name}}</h6>\n' +
        '                </div>\n' +
        '                <p class="card-text">{{item.excerpt.substring(0,80)}}</p>\n' +
        '            </div>\n' +
        '     </router-link>' +
        '        </div>\n' +
        '    </div>\n' +
        '   </div>',
    methods: {
        onclick: function () {
            alert('hello')
        },
    }, created: function () {
        fetch('https://blog.lumia.pw/api/posts.json')
            .then(res => res.json())
            .then(items => this.items = items)
    }
});

Vue.component('home', {
    template: '<div class="jumbotron container">\n' +
        '    <h1 class="display-3">Welcome to Lumia</h1>\n' +
        '    <p align="right" class="lead">你知道吗？在芬兰语中，它是"lumi"的复数形式，表示"雪"。</p>\n' +
        '    <hr class="my-4">\n' +
        '    <p></p>\n' +
        '</div>'
})

Vue.component('about', {
    template: '<div class="media container">\n' +
        '  <img class="align-self-start mr-3" src="https://avatars3.githubusercontent.com/u/25610655?s=460&u=51b3d03d41d456d0a31467a09e1153018e871155&v=4" alt="Generic placeholder image">\n' +
        '  <div class="media-body">\n' +
        '    <h5 class="mt-0">Hi,I am marvrick</h5>\n' +
        '    <p>Welcome to my blog. </p>\n' +
        '    <p>this blog create by vue,hope you like it ;)</p>\n' +
        '   <p> <a href="https://github.com/Maverick5g/blog-lumia-lite">GitHub</a></p>\n' +
        '  </div>\n' +
        '</div>'
})

Vue.component('blogArticle', {
    data() {
        return {
            item: ''
        }
    },
    template: `<div class="container">
    <div class=" row  blogarticles">
        <div class="col-3"></div>
        <div class="col  m-auto" >
            <div class="article-info">
                <h1>{{item.title}}</h1>
                <span>{{item.date}}</span>
            </div>
            <div class="content" v-html="item.content"></div>
        </div>
        <div class="col-3"></div>
    </div>
    </div>`,
    methods: {
        onclick: function () {
            alert('hello')
        },
    }, created: function () {
        console.log('Hello')
        fetch(`https://blog.lumia.pw/api/articles/${this.$route.params.article}.json`)
            .then(res => res.json())
            .then(res => this.item = res)
    }
});

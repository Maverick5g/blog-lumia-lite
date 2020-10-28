Vue.component('blogcard',{
    data() {
        return {
            items: []
        }
    },
    template: '<div id="blogs"><div class="blog-titles" v-for="item in items"><a href="">{{ item.title }}</a></div></div>',
    methods: {
        onclick: function () {
            alert('hello')
        }
    },created: function() {
        fetch('https://blog.lumia.pw/api/posts.json')
            .then(res => res.json())
            .then(items => this.items = items)
    }
});
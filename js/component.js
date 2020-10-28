Vue.component('blogcard',{
    data() {
        return {
            items: []
        }
    },
    template: '<div id="blogs"><div class="blog-titles" v-for="item in items">' +
        '<div class="card" style="width: 18rem;">\n' +
        '  <div class="card-body">\n' +
        '    <h5 class="card-title">{{item.title}}</h5>\n' +
        '    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>\n' +
        '    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
        '    <a href="#" class="card-link">Card link</a>\n' +
        '    <a href="#" class="card-link">Another link</a>\n' +
        '  </div>\n' +
        '</div></div>',
    methods: {
        onclick: function () {
            alert('hello')
        }
    },created: function() {
        fetch('https://cdn.jsdelivr.net/gh/Maverick5g/blog-lumia.pw@master/api/posts.json')
            .then(res => res.json())
            .then(items => this.items = items)
    }
});
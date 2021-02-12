import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home.vue').default
    },
    {
        path: '/about',
        component: require('./views/About.vue').default
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});

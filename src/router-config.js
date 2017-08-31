import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

let router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '*', component: NotFound }
    ]
});

export default router;
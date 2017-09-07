import VueRouter from 'vue-router'

import PassportLayout from './components/Passport.vue';

import Signin from './views/account/Signin.vue';
import Signup from './views/account/Signup.vue';
import Home from './views/Home.vue'
import Video from './views/pr/Video.vue'
import Comments from './views/pr/Comments.vue'
import WallPaper from './views/pr/WallPaper.vue'
import News from './views/pr/News.vue'
import Contact from './views/support/Contact.vue'
import SupportLayout from './views/support/Layout.vue'
import NotFound from './views/NotFound.vue'

let router = new VueRouter({
    routes: [
        { 
            path: '/',
            component: Home
        },
        { 
            path: '/signin',
            component: PassportLayout,
            beforeEnter: (to, from, next) => {
                next(vm=> {
                    vm.$data.test = 123;
                });
            }
        },
        {
            path: '/signup',
            component: PassportLayout
        },
        {
            path: '/pr',
            redirect: '/pr/video',
        },
        {
            path: '/pr/video',
            component: Video
        },
        { 
            path: '/pr/comment',
            component: Comments
        },
        { 
            path: '/pr/wallpaper',
            component: WallPaper
        },
        { 
            path: '/pr/news',
            component: News
        },
        { 
            name: 'support-order',
            path: '/order/:name',
            component: SupportLayout
        },
        {
            name: 'support-service',
            path: '/service/:name',
            component: SupportLayout
        },
        {
            name: 'support-copyright',
            path: '/copyright/:name',
            component: SupportLayout
        },
        {
            path: '/contact',
            component: Contact
        },
        { 
            path: '*',
            component: NotFound
        }
    ]
});

export default router;
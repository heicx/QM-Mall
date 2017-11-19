import VueRouter from 'vue-router'
import Bus from './bus';

import PassportLayout from './components/Passport.vue';

import Signin from './views/passport/Signin.vue';
import Signup from './views/passport/Signup.vue';
import Home from './views/Home.vue'
import Video from './views/pr/Video.vue'
import Comments from './views/pr/Comments.vue'
import WallPaper from './views/pr/WallPaper.vue'
import News from './views/pr/News.vue'
import Contact from './views/support/Contact.vue'
import SupportLayout from './views/support/Layout.vue'
import AccountLayout from './views/account/Layout.vue'
import Checkout from './views/payment/Checkout.vue'
import Payment from './views/payment/Payment.vue'
import NotFound from './views/NotFound.vue'


let router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            name: 'passport',
            path: '/signin',
            component: PassportLayout
        },
        {
            name: 'passport',
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
            name: 'account',
            path: '/account/order',
            component: AccountLayout
        },
        { 
            name: 'account',
            path: '/account/order/:id',
            component: AccountLayout
        },
        { 
            name: 'account',
            path: '/account/address',
            component: AccountLayout
        },
        { 
            name: 'account',
            path: '/account/information',
            component: AccountLayout
        },
        { 
            path: '/checkout/:id',
            component: Checkout
        },
        { 
            path: '/payment/:id',
            component: Payment
        },
        { 
            path: '*',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});

router.beforeEach((to, from, next)=> {
    if(to.name != 'passport') {
        Bus.$emit('changeLayout', true);
    }

    next();
});

export default router;
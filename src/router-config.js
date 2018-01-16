import VueRouter from 'vue-router'
import Bus from './bus';

import PassportLayout from './components/Passport.vue';

import Signin from './views/passport/Signin.vue';
import Signup from './views/passport/Signup.vue';
import Overview from './views/Overview.vue'
import Design from './views/Design.vue'
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

import Util from './libs/util';

let router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/overview'
        },
        {
            path: '/overview',
            component: Overview,
            meta: {
                title: '概览'
            }
        },
        {
            path: '/design',
            component: Design,
            meta: {
                title: '设计'
            }
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
            name: 'checkout',
            path: '/checkout/:id',
            component: Checkout
        },
        {
            name: 'payment',
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
    
    console.log(['passport', 'account', 'checkout', 'payment'].indexOf(to.name) )
    if(to.name && ['passport'].indexOf(to.name) > -1) {
        if(sessionStorage.getItem('_usr')) {
            next('/');
            return;
        }
    }

    if(to.name && ['account', 'checkout', 'payment'].indexOf(to.name) > -1) {
        if(!sessionStorage.getItem('_usr')) {
            next('/');
            return;
        }
    }

    Util.title(to.meta.title);

    next();
});

export default router;
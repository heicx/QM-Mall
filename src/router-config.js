import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Video from './views/pr/Video.vue'
import Comment from './views/pr/Comment.vue'
import WallPaper from './views/pr/WallPaper.vue'
import News from './views/pr/News.vue'

import SupportLayout from './views/support/Layout.vue'

import NotFound from './views/NotFound.vue'

let router = new VueRouter({
    routes: [
        { 
            path: '/',
            component: Home
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
            component: Comment
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
            path: '*',
            component: NotFound
        }
    ]
});

export default router;
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Video from './views/pr/Video.vue'
import Comment from './views/pr/Comment.vue'
import WallPaper from './views/pr/WallPaper.vue'

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
            path: '*',
            component: NotFound
        }
    ]
});

export default router;
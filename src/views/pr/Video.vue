<template>
	<div class="video-wrap">
        <div class="video-main">
            <div class='main-play' :class='{"pause": !isPlay}'>
                <video id="video-1" ref='videoEle' controls preload="none">
                    <source :src="currVideoUrl" type='video/mp4'/>
                </video>
                <img :src='currImgUrl' />
                <i @click='videoPlay()'></i>
            </div>
        </div>
        <ul class="video-items">
            <li>
                <a @click='changeVideo()'>
                    <img src="http://c1.mifile.cn/f/i/15/scooter/overall-intro-video-poster.jpg" alt="">
                    <span>视频1</span>
                </a>
            </li>
            <li>
                <a @click='changeVideo()'>
                    <img src="http://c1.mifile.cn/f/i/15/scooter/overall-battery-video-poster.jpg" alt="">
                    <span>视频2</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="http://c1.mifile.cn/f/i/15/scooter/overall-intro-video-poster.jpg" alt="">
                    <span>视频3</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="http://c1.mifile.cn/f/i/15/scooter/overall-intro-video-poster.jpg" alt="">
                    <span>视频4</span>
                </a>
            </li>
        </ul>
	</div>
</template>

<script>
import Vue from 'vue';

export default {
    data () {
        return {
            isPlay: false,
            currVideoUrl: 'http://s1.mi.com/v/scooter/overall-intro-video.mp4',
            currImgUrl: 'http://c1.mifile.cn/f/i/15/scooter/overall-intro-video-poster.jpg',
        }
    },
    mounted() {
    },
    methods: {
        changeVideo() {
            let videoUrl = 'http://s1.mi.com/v/scooter/overall-guide-video-3.mp4';
            let imgUrl = 'http://c1.mifile.cn/f/i/15/scooter/overall-adapt-bg-1.jpg';

            this.currVideoUrl = videoUrl;
            this.currImgUrl = imgUrl;
            this.isPlay = false;
            
            this.$refs.videoEle.load();
        },
        videoPlay() {
            this.$refs.videoEle.play();
            this.isPlay = true;
        }
    },
    directives: {
    },
    destroyed() {
    }
}
</script>

<style lang="scss" scoped>
.video-wrap .video-main{
    position: relative;
    left: 50%;
    width: 672px;
    height: 378px;
    margin: 60px 0 60px -336px;
    box-shadow: 0px -2px 16px #b2b2b2;
    .main-play {
        position: relative;
        width: 100%;
        height: 378px;
        &.pause i {
            position: absolute;
            content: '';
            background: url(~images/pr_play.png) no-repeat;
            width: 40px;
            height: 40px;
            background-size: cover;
            cursor: pointer;
            top: 169px;
            left: 316px;
        }
        img {
            visibility: hidden;
        }
        &.pause img {
            width: 100%;
            height: 100%;
            visibility: visible;
            position: absolute;
            top: 0;
        }
    }
    video {
        width: 100%;
        height: 100%;
    }
}

.video-wrap .video-items {
    width: 100%;
    padding: 60px 0;
    background: #fff;
    text-align: center;
    font-size: 0;
    li {
        width: 200px;
        margin-right: 50px;
        display: inline-block;
        a {
            display: block;
        }
        img {
            display: block;
            width: 200px;
            height: 113px;
            margin-bottom: 14px;
        }
        &:last-child {
            margin-right: 0;
        }
        a:hover span {
            color: #b8b8b8;
        }
        span {
            margin-top: 20px;
            font-size: 12px;
            color: #949494;
        }
    }
}
</style>
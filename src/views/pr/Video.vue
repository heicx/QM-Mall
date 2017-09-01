<template>
	<div class="video-wrap">
        <div class="video-main">
            <div class='main-play pause'>
                <video id="video-1" class="video-js vjs-default-skin" controls preload="none">
                    <source src="http://static.smartisanos.cn/common/video/video-jgpro.mp4" type='video/mp4'/>
                </video>
                <img src="http://static.smartisanos.cn/pr/img/video/u2_pro_272a6077ae.jpg" style="width:672px;heihgt:378px;">
            </div>
        </div>
        <ul class="video-items">
            <li>
                <a href="">
                    <img src="" alt="">
                    <span>视频1</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="">
                    <span>视频1</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="">
                    <span>视频1</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="">
                    <span>视频1</span>
                </a>
            </li>
        </ul>
	</div>
</template>

<script>
export default {
    methods: {},
    components: {
    },
    mounted() {
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
        &.pause:after {
            position: absolute;
            content: '';
            background: url(../../assets/images/pr_play.png) no-repeat;
            width: 40px;
            height: 40px;
            background-size: cover;
            top: 169px;
            left: 316px;
        }
        img {
            visibility: hidden;
        }
        &.pause img {
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
    li {
        width: 200px;
        margin-right: 50px;
        display: inline-block;
        a {
            display: block;
            margin-bottom: 16px;
        }
        img {
            display: block;
            width: 200px;
            height: 200px;
            background: pink;
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
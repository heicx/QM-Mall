<template>
	<div class="video-wrap">
        <div class="video-main">
            <video></video>
        </div>
        <ul class="video-items">
            <li>
                <a href="">
                    <img src="" alt="">
                </a>
                <span>视频1</span>
            </li>
            <li>
                <a href="">
                    <img src="" alt="">
                </a>
                <span>视频1</span>
            </li>
            <li>
                <a href="">
                    <img src="" alt="">
                </a>
                <span>视频1</span>
            </li>
            <li>
                <a href="">
                    <img src="" alt="">
                </a>
                <span>视频1</span>
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
    margin-left: -336px;
    background: pink;
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
    }
}
</style>
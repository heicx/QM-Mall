<template>
	<div class="wallpaper-wrap">
        <div class="wallpaper-head">
            <button class='download'>壁纸下载</button>
        </div>
        <div class="wallpaper-content">
            <ul class="img-list">
                <li>
                    <img src="http://static.smartisanos.cn/common/pr/cover/jianguopro/tint-gold/7.png" alt="">
                </li>
                <li>
                    <img src="http://static.smartisanos.cn/common/pr/cover/jianguopro/tint-gold/7.png" alt="">
                </li>
                <li>
                    <img src="http://static.smartisanos.cn/common/pr/cover/jianguopro/tint-gold/7.png" alt="">
                </li>
                <li>
                    <img src="http://static.smartisanos.cn/common/pr/cover/jianguopro/tint-gold/7.png" alt="">
                </li>
                <li>
                    <img src="http://static.smartisanos.cn/common/pr/cover/jianguopro/tint-gold/7.png" alt="">
                </li>
                <li>
                    <img src="http://static.smartisanos.cn/common/pr/cover/jianguopro/tint-gold/7.png" alt="">
                </li>
                <li>
                    <img src="http://static.smartisanos.cn/common/pr/cover/jianguopro/tint-gold/7.png" alt="">
                </li>
                <li>
                    <img src="http://static.smartisanos.cn/common/pr/cover/jianguopro/tint-gold/7.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {},
    mounted() {
    },
    destroyed() {
    }
}
</script>

<style lang="scss" scoped>
.wallpaper-wrap {
    width: 1220px;
    height: 100%;
    overflow: hidden;    
    margin: 0 auto;
    background: #fff;
    margin-top: 40px;
    border-radius: 8px 8px 0 0;
    padding-bottom: 40px;
}

.wallpaper-head {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px 8px 0 0;
    box-shadow: rgba(0,0,0,.06) 0 1px 7px;
    background: #f3f3f3;
    background: linear-gradient(#fbfbfb,#ececec);
    .download {
        float: right;
        color: #666;
        background: #ececec;
        background: linear-gradient(#fff,#ececec);
        width: 80px;
        height: 38px;
        line-height: 1;
        border: 1px solid #dbdde2;
        border-radius: 4px;
        font-size: 14px;
        margin: 12px 20px;
        &:hover {
            background: #e4e3e3;
            background: linear-gradient(#fff,#e4e3e3);
        }
    }
}

.wallpaper-content .img-list{
    margin-top: 30px;
    padding-left: 30px;
    li {
        float: left;
        width: 280px;
        height: 189px;
        border: 1px solid #e5e5e5;
        margin: 0 10px 10px 0;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
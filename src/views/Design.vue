<template>
    <div class="design-wrapper">
        <section class="floor-1" :class="goodsColor">
            <div class="img-container">
                <div class="notes">
                    <h1 class="slogan">“简单” 是终极的复杂</h1>
                    <p>
                        极简，是轻麦 SWAN 设计的 DNA，我们相信好的设计一定是化繁为简。
                    </p>
                    <p>
                        历经 547 个日日夜夜，超过 5 个版本的迭代，我们设计出了，接近于完美的电动滑板车，整车结构紧凑，极为简约、极为精致。
                    </p>
                    <ul class="specs">
                        <li v-for="(color, index) in colors" :key="index" :class="[color, {'active': goodsColor === color}]" @click="changeGoodsColor(color)"></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="floor-2">
            <div class="img-container">
                <div class="notes">
                    <h1 class="slogan">惊艳的自我突破</h1>
                    <p>
                        SWAN 意味着远见和勇气，整车 ID 风格极具未来感，追求简约之美，车身使用了碳纤维、铝合金及不锈钢，多种材质混搭只为满足最极致的设计。
                    </p>
                    <p>
                        隐藏式的仪表、隐藏式的喇叭、隐藏式的脚撑以及开创性的一体化把手，一体化的踏板，处处透露着轻麦对于极致设计的不懈追求和自我突破的渴望。
                    </p>
                </div>
            </div>
        </section>
        <section class="floor-3">
            <video src="/dist/1.mp4" autoplay="true"></video>
        </section>
        <section class="floor-4">
            <div class="img-container">
                <div class="notes">
                    <h1 class="slogan">来自未来，这一切浑然天成</h1>
                    <p>
                        SWAN 整个把手微弧曲面设计，如延绵的地平线一般，美到令人窒息。双手握在上面非常贴合手心，这也是人体工程学极致的应用。
                    </p>
                    <p>
                        全金属一体化把手，我们把仪表、喇叭、车灯、油门、刹车全都集成在车把内部，大幅增强了一体感。
                    </p>
                </div>
            </div>
        </section>
        <section class="floor-5">
            <div class="img-container">
                <div class="notes">
                    <h1 class="slogan">"小蛮腰" 在此</h1>
                    <p>
                        通过对曲线近乎极致的运用，也得益于碳纤维复合材料，我们在 SWAN 腰身处打造了 “小蛮腰”。不仅实现物理上的高强度，更是在美感、手感的多重考量中实现平衡之美。
                    </p>
                </div>
            </div>
        </section>
        <section class="floor-6">
            <video src="dist/2.mp4" autoplay="true"></video>
        </section>
        <section class="floor-7">
            <div class="img-container">
                <div class="notes">
                    <h1 class="slogan">折叠只需一键，既好看又好用</h1>
                    <p>
                        为了不破坏整车美感，我们设计出了一体集成快折系统。相比传统折叠结构更紧凑，更美观，更快速。
                    </p>
                    <p>一个按键继承三大功能，上折锁紧，下折锁紧，转向锁止。304 不锈钢，0.1 mm 精度，超过 20 个版本迭代优化，最终成就一秒快折。</p>
                </div>
            </div>
        </section>
        <section class="floor-8">
            <video src="/dist/3.mp4" autoplay="true"></video>
        </section>
        <section class="floor-9">
            <div class="img-container">
                <div class="notes">
                    <h1 class="slogan">极致线条，一体成型</h1>
                    <p>
                        轻麦 SWAN 为追求极致简约，整个踏板零焊点、零拼接，采用一体成型工艺。相比传统踏板美观度和紧致度都大幅提升。
                    </p>
                    <p>
                        轻麦 SWAN 底板虽然轻薄，但得益于一体成型工艺，仍拥有惊人强度，实验测试 300 公斤压力几乎无形变。更值得一提的是我们的在如此薄的踏板内装下了 278 WH 电池组，让你拥有轻薄同时拥有长续航。
                    </p>
                </div>
            </div>
        </section>
        <section class="floor-10">
            <div class="img-container">
                <div class="notes">
                    <h1 class="slogan">耐人寻味的细节之美</h1>
                    <p>
                        史无前例，我们实现了无开口就可以放入车轮的前叉、隐藏式的脚撑，静音的指拨油门刹车、柔软舒适的全硅胶脚垫、修长的 LED 刹车灯等等。我们用无数的细节堆出了 SWAN.
                    </p>
                </div>
            </div>
        </section>
        <section class="floor-11">
            <div class="img-container">
                <div class="notes">
                    <h1 class="slogan">经历所有不可能，造就我们的可能</h1>
                    <p>
                        547 天、65 套全新模具、11 项国家专利，满足你对电动滑板车的所有想象。
                    </p>
                    <p>
                        轻麦 SWAN 底板虽然轻薄，但得益于一体成型工艺，仍拥有惊人强度，实验测试 300 公斤压力几乎无形变。更值得一提的是我们的在如此薄的踏板内装下了 278 WH 电池组，让你拥有轻薄同时拥有长续航。
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            goodsColor: 'white',
            colors: ["blue", "white", "grey"]
        }
    },
    methods: {
        changeGoodsColor(name) {
            this.goodsColor = name;
        }
    }
}
</script>

<style lang="scss" scoped>
.design-wrapper {
    min-height: 800px;
    text-align: center;
}

.floor-1 {
    width: 100%;
    background: #fff;
    .notes {
        position: absolute;
        width: 325px;
        right: 170px;
        top: 140px;
        .slogan {
            font-size: 30px;
            color: #3399ff;
        }
        p {
            color: #555C60;
            color: #666;
            font-size: 14px;
            margin-left: 14px;
            text-align: left;
            line-height: 24px;
            margin-bottom: 10px;
        }
    }
    &.blue {
        .img-container {
            position: relative;
            background: url(~images/design/1-blue.png) no-repeat top center;
            background-size: contain;
            width: 1220px;
            height: 686px;
            margin: 0 auto;
        }
    }
    &.white {
        .img-container {
            position: relative;
            background: url(~images/design/1-white.png) no-repeat center;
            background-size: contain;
            width: 1220px;
            height: 686px;
            margin: 0 auto;
        }
    }
    &.grey {
        .img-container {
            position: relative;
            background: url(~images/design/1-grey.png) no-repeat center;
            background-size: contain;
            width: 1220px;
            height: 686px;
            margin: 0 auto;
        }
    }
    .specs {
        overflow: hidden;
        padding: 6px;
        margin-left: 80px;
        li {
            position: relative;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            float: left;
            margin-top: 20px;
            margin-right: 30px;
            cursor: pointer;
            &.active:before {
                border: 3px solid rgb(153, 153, 153);
            }
            &:before {
                position: absolute;
                content: '';
                padding: 2px;
                border: 2px solid rgb(229, 229, 229);
                border-radius: 50%;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            &.white {
                background: #F6F6F6;
            }
            &.blue {
                background: #3399ff;
            }
            &.grey {
                background: #7f7f7f;
            }
        }
    }
}

.floor-2,
.floor-4,
.floor-5,
.floor-7,
.floor-9,
.floor-10,
.floor-11 {
    width: 100%;
    .img-container {
        position: relative;
        background: url(~images/design/2.png) no-repeat top center;
        background-size: contain;
        width: 100%;
        height: 835px;
        margin: 0 auto;
    }
    .notes {
        position: absolute;
        width: 580px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        .slogan {
            margin: 60px 0 20px;
            font-size: 30px;
            color: #3399ff;
        }
        p {
            color: #555C60;
            font-size: 14px;
            text-align: left;
            line-height: 22px;
            margin-bottom: 8px;
        }
    }
}

.floor-3,
.floor-6,
.floor-8 {
    video {
        width: 100%;
        height: 480px;
    }
}

.floor-4 {
    .img-container {
        background: url(~images/design/3.png) no-repeat top center;
        background-size: contain;
        width: 1220px;
        height: 760px;
        top: 310px;
        .notes {
            width: 630px;
            top: -310px;
        }
    }
}

.floor-5 {
    background: #fff;
    .img-container {
        position: relative;
        background: url(~images/design/4.png) no-repeat top center;
        background-size: contain;
        width: 1220px;
        height: 600px;
        margin: 0 auto;
        top: 200px;
        .notes {
            top: -200px;
        }
    }
}

.floor-6,
.floor-8 {
    background: #fff;
}

.floor-7 {
    background: #fff;
    .img-container {
        position: relative;
        background: url(~images/design/5.png) no-repeat top center;
        background-size: contain;
        width: 1220px;
        margin: 0 auto;
        top: 280px;
        .notes {
            top: -240px;
        }
    }
}

.floor-9 {
    background: #fff;
    .img-container {
        position: relative;
        background: url(~images/design/6.png) no-repeat top center;
        background-size: contain;
        width: 1220px;
        height: 650px;
        margin: 0 auto;
        top: 240px;
        .notes {
            top: -300px;
        }
    }
}

.floor-10 {
    background: #fff;
    .img-container {
        position: relative;
        background: url(~images/design/7.png) no-repeat top center;
        background-size: contain;
        width: 100%;
        height: 650px;
        margin: 0 auto;
        top: 240px;
        .notes {
            top: -300px;
        }
    }
}

.floor-11 {
    background: #fff;
    .img-container {
        position: relative;
        background: url(~images/design/8.png) no-repeat top center;
        background-size: contain;
        width: 1220px;
        height: 650px;
        margin: 0 auto;
        top: 0;
        .notes {
            top: -70px;
        }
    }
}

@media screen and (max-width: 1600px) {
    .floor-2 .img-container {
        height: 600px;
    }
    .floor-3 video {
        height: 350px;
    }
}
</style>
<template>
<div v-if="isOpen">
    <div class="item-dialog-wrapper">
        <span class="close-btn" @click="closeDialog()"></span>
        <div class="dialog-left">
            <div class="goods-img" :class="goodsColor"></div>
        </div>
        <div class="dialog-right">
            <div class="goods-main">
                <div class="title">平衡车</div>
                <div class="price">
                    <i>￥</i>
                    2699
                </div>
            </div>
            <ul class="goods-attr">
                <li v-for="(color, index) in colors" :key="index" :class="[color, {'active': goodsColor === color}]" @click="changeGoodsColor(color)"></li>
            </ul>
            <div class="buy-btns">
                <div class="btn-add" @click="addCart()">
                    <a>添加商品</a>
                </div>
                <div class="btn-checkout" @click="checkout()">
                    <a>现在购买</a>
                </div>
            </div>
            <ul class="goods-info">
                <li v-for="(item, index) in cart" :key="index">
                    <i>·</i>
                    <span class="goods-name">{{item.goodsName}}</span>
                    x
                    <span class="num"> {{item.num}}</span>
                    <em class="btn-del" @click="delGoods(item.color)"></em>
                </li>
            </ul>
        </div>
	</div>
    <tips :is-toast-tips="isTips" :toast-tips-text="tipsText"></tips>
    <div class="shadow"></div>
</div>
</template>

<script>
import Tips from '../common/Tips.vue';

let timer = null;

export default {
    data () {
        return {
            isTips: false,
            tipsText: '',
            goodsColor: 'white',
            colors: ["white", "blue", "grey"],
            cart: [],
            goodsData: {
                white: {
                    sku: '10001001',
                    color: 'white',
                    limitNum: 2,
                    title: '轻麦 SWAN 电动平衡车',
                    goodsName: 'SWAN 电动平衡车（白色版）',
                    price: 2699
                },
                blue: {
                    sku: '10001002',
                    color: 'blue',
                    limitNum: 2,
                    title: '轻麦 SWAN 电动平衡车',
                    goodsName: 'SWAN 电动平衡车（蓝色版）',
                    price: 2499
                },
                grey: {
                    sku: '10001003',
                    color: 'grey',
                    limitNum: 2,
                    title: '轻麦 SWAN 电动平衡车',
                    goodsName: 'SWAN 电动平衡车（灰色版）',
                    price: 2499
                }
            }
        }
    },
    methods: {
        closeDialog () {
            this.$emit('closeDialogEvent', false);
        },
        changeGoodsColor(name) {
            this.goodsColor = name;
        },
        addCart () {
            let isExist = false;

            for(let oItem of this.cart) {
                if(oItem.color === this.goodsColor) {
                    isExist = true;

                    if(oItem.num < oItem.limitNum) {
                        oItem.num += 1;
                    }else {
                        this.sendTips(`${oItem.goodsName}已达最大购买数量`);
                    }
                }
            }

            if(!isExist) {
                this.cart.push(Object.assign({}, this.goodsData[this.goodsColor], {num: 1}));
            }
        },
        delGoods (colorName) {
            this.cart = this.cart.filter(item => {
                return item.color !== colorName;
            });
        },
        checkout () {
            let arrRet = [];

            if(this.cart.length === 0) {
                this.cart.push(Object.assign({}, this.goodsData[this.goodsColor], {num: 1}));
            }

            for(let item of this.cart) {
                arrRet.push({
                    sku: item.sku,
                    color: item.color,
                    title: item.goodsName,
                    price: item.price,
                    num: item.num
                });
            }

            this.$emit('goodsItemEvent', arrRet);
            this.closeDialog();
        },
        sendTips (msg, cb) {
            if(timer)
                clearTimeout(timer);

            this.tipsText = msg;
            this.isTips = true;

            timer = setTimeout(_ => {
                this.isTips = false;
                cb && cb();
            }, 2000);
        }
    },
    props: {
        isOpen: Boolean
    },
    components: {
        Tips
    }
}
</script>

<style lang="scss" scoped>
.item-dialog-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 600px;
    background: rgb(255, 255, 255);
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    border-radius: 12px;
    z-index: 100;
    .close-btn {
        overflow: hidden;
        display: block;
        position: absolute;
        right: 12px;
        top: 12px;
        z-index: 30;
        width: 16px;
        height: 17px;
        padding: 4px 5px;
        background: url(~images/form-ui.png) no-repeat -16px -16px;
        text-indent: -9999em;
        opacity: .7;
        cursor: pointer;
        transition: all .3s linear;
    }
    .dialog-left {
        width: 300px;
        display: flex;
        align-items: center;
        padding: 10px;
        padding-right: 30px;
        .goods-img {
            &.white {
                background: url(~images/goods-white.png) no-repeat center;
                background-size: contain;
            }
            &.blue {
                background: url(~images/goods-blue.png) no-repeat center;
                background-size: contain;
            }
            &.grey {
                background: url(~images/goods-grey.png) no-repeat center;
                background-size: contain;
            }
            width: 318px;
            height: 318px;
        }
    }
    .dialog-right {
        width: 300px;
        margin-right: 20px;
        box-sizing: border-box;
        .goods-main {
            position: relative;
            margin-top: 40px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgb(207, 207, 207);
            line-height: 20px;
            .title {
                font-size: 16px;
                display: inline-block;
                font-weight: 700;
                margin-right: 10px;
                color: rgb(0, 0, 0);
            }
            .price {
                i {
                    font-style: normal;
                    font-size: 16px;
                }
                margin-top: 10px;
                color: rgb(212, 77, 85);
                font-size: 20px;
                font-weight: 700;
            }
        }
        .goods-attr {
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid rgb(207, 207, 207);
            li {
                position: relative;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                float: left;
                margin: 20px;
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
                    width: 18px;
                    height: 18px;
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
        .buy-btns {
            margin: 20px 0;
            line-height: 1;
            .btn-add,
            .btn-checkout {
                display: inline-block;
                width: 110px;
                height: 35px;
                line-height: 35px;
                border-radius: 6px;
                background: #3399ff;
                text-shadow: 0 -0.05rem 0 rgba(0,0,0,.15);
                box-sizing: border-box;
                text-align: center;
                overflow: hidden;
                outline: none;
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    color: rgb(255, 255, 255);
                    box-sizing: border-box;
                    text-decoration: none;
                    height: 35px;
                    line-height: 35px;
                    font-size: 14px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                &.btn-disabled {
                    transition: none;
                    cursor: not-allowed;
                    opacity: .4;
                    a {
                        cursor: not-allowed;
                    }
                }
            }
            .btn-checkout {
                margin-left: 15px;
            }
        }
        .goods-info {
            padding-top: 15px;
            border-top: 1px dashed rgb(207, 207, 207);
            li {
                position: relative;
                font-size: 12px;
                font-weight: bold;
                color: rgb(88, 88, 88);
                line-height: 1.4;
                margin-bottom: 4px;
                .goods-name {
                    padding-left: 4px;
                }
                .btn-del {
                    position: absolute;
                    background: url(~images/delete-btn-icon.jpg) no-repeat;
                    width: 17px;
                    height: 17px;
                    cursor: pointer;
                    display: block;
                    background-size: cover;
                    right: 0;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    &:hover {
                        background-position: 0 -25px;
                    }
                }
            }
        }
    }
}

.shadow {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 80;
    background-color: rgba(0,0,0,.65);
    opacity: 1;
}
</style>

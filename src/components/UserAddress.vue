<template>
    <div v-if="isOpen">
        <div class="address-container">
            <div class="dialog">
                <div class="topbar">
                    <div class="title clearfix">
                        <h4>
                            收货地址
                        </h4>
                    </div>
                    <span class="dialog-close" @click="closeDialog()"></span>
                </div>
                <div class="content">
                    <div class="dialog-address-from">
                        <div class="address-form-wrapper">
                            <div class="address-form">
                                <div class="module-form-row-pc fn-clear">
                                    <div class="form-item-v3">
                                        <input type="text" placeholder="收货人姓名" v-focus="iptErrName == 'username'" v-model="formData.userName">
                                    </div>
                                </div>
                                <div class="module-form-row-pc fn-clear">
                                    <div class="form-item-v3">
                                        <input type="text" placeholder="手机号" v-focus="iptErrName == 'mobile'" v-model="formData.mobile">
                                    </div>
                                </div>
                                <div class="module-form-row-pc fn-clear">
                                    <div class="form-item-v3 area-code fl">
                                        <input type="text" placeholder="区号（可选）" v-focus="iptErrName == 'zipcode'" v-model="formData.zipCode">
                                    </div>
                                    <div class="form-item-v3 telphone fr">
                                        <input type="text" placeholder="固定电话（可选）" v-focus="iptErrName == 'phonenumber'" v-model="formData.phoneNumber">
                                    </div>
                                </div>
                                <div class="module-form-row-pc fn-clear">
                                    <div class="form-item-v3 province-wrapper">
                                        <div class="select-province-wrapper">
                                            <select class="select-province" v-model="formData.provinceId" @change='provinceChange'>
                                                <option value="-1" selected='selected'>请选择省份</option>
                                                <option :value="province.id" :name="province.name" :key="province.id" v-for="province in provinceList">{{province.name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="module-form-row-pc fn-clear">
                                    <div class="form-item-v3 city-wrapper fl">
                                        <div class="select-city-wrapper">
                                            <select class="select-city" v-model="formData.cityId" @change="cityChange">
                                                <option value="-1">请选择城市</option>
                                                <option :value="city.id" :key="city.id" v-for="city in cityList">{{city.name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-item-v3 district-wrapper fr">
                                        <div class="select-district-wrapper">
                                            <select class="select-district" v-model="formData.districtId" @change="districtChange">
                                                <option value="-1">请选择区县</option>
                                                <option :value="district.id" :key="district.id" v-for="district in districtList">{{district.name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="module-form-row-pc fn-clear">
                                    <div class="form-item-v3">
                                        <input type="text" placeholder="详细地址，如街道名称，楼层，门牌号码等" v-focus="iptErrName == 'address'" v-model="formData.address">
                                    </div>
                                </div>
                                <div class="module-form-row-pc fn-clear">
                                    <div class="checkbox-section" @click="changeDefaultRadio()">
                                        <span class="blue-checkbox" :class="{'on': formData.isDefault}"></span>
                                        <span class="checkbox-label">
                                            设为默认地址
                                        </span>
                                    </div>
                                </div>
                                <div class="module-form-row-pc btn" @click="saveAddress()">
                                    <a>保存</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shadow"></div>
        <tips :is-toast-tips="isTips" :toast-tips-text="tipsText"></tips>
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
            iptErrName: '',
            provinceList: [],
            cityList: [],
            districtList: []
        }
    },
    props: {
        isOpen: Boolean,
        
        formData: {
            type: Object,
            default: () => {
                return {
                    userName: '',
                    mobile: '',
                    zipCode: '',
                    phoneNumber: '',
                    provinceId: -1,
                    cityId: -1,
                    districtId: -1,
                    provinceName: '',
                    cityName: '',
                    districtName: '',
                    address: '',
                    isDefault: false
                }
            }
        }
    },
    methods: {
        closeDialog () {            
            this.$emit('closeDialogEvent', false);
        },
        changeDefaultRadio () {
            this.formData.isDefault = !this.formData.isDefault;
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
        },
        provinceChange (event) {
            let provinceId = event.target.value;

            if(provinceId == -1) {
                this.formData.cityId = -1;
                this.formData.districtId = -1;
                this.formData.cityName = '';
                this.formData.districtName = '';

                this.cityList = [];
                this.districtList = [];
            }else {
                this.$store.dispatch('cityList', {
                    p: this.formData.provinceId
                }).then(res => {
                    if(res.status) {
                        this.formData.provinceName = this.provinceList.find(province => province.id === this.formData.provinceId)['name'];
                        this.cityList = res.data;
                    }else {
                        this.cityList = [];
                    }

                    this.formData.cityId = -1;
                    this.formData.districtId = -1;
                    this.formData.cityName = '';
                    this.formData.districtName = '';

                    this.districtList = [];
                });
            }
        },
        cityChange (event) {
            let cityId = event.target.value;

            if(cityId == -1) {
                this.formData.districtId = -1;
                this.districtList = [];
            }else {
                this.$store.dispatch('cityList', {
                    c: this.formData.cityId
                }).then(res => {
                    if(res.status) {
                        this.formData.cityName = this.cityList.find(city => city.id === this.formData.cityId)['name'];
                        this.districtList = res.data;
                    }else {
                        this.districtList = [];
                    }

                    this.formData.districtId = -1;
                });
            }
        },
        districtChange (event) {
            if(event.target.value != -1) {
                this.formData.districtName = this.districtList.find(district => district.id === this.formData.districtId)['name'];
            }
        },
        saveAddress () {
            if(!this.formData.userName) {
                this.sendTips('请输入收件人姓名');
                this.iptErrName = 'username';
            }else if(!(/^(1[3|4|5|7|8]\d{9})|(166\d{8})|(19[8|9]\d{8})$/.test(this.formData.mobile)) || !this.formData.mobile) {
                this.sendTips('请输入有效手机号码');
                this.iptErrName = 'mobile';
            }else if(this.formData.zipCode && !(/^\d{3,4}$/.test(this.formData.zipCode))) {
                this.sendTips('请输入正确的区号');
                this.iptErrName = 'zipcode';
            }else if(this.formData.phoneNumber && !(/^\d+$/.test(this.formData.phoneNumber))) {
                this.sendTips('请输入正确的固定电话号码');
                this.iptErrName = 'phonenumber';
            }else if(this.formData.provinceId == -1) {
                this.sendTips('请选择所在省份');
            }else if(this.formData.cityId == -1) {
                this.sendTips('请选择所在城市');
            }else if(this.formData.districtId == -1) {
                this.sendTips('请选择所在区县');
            }else if(!this.formData.address) {
                this.sendTips('请输入详情地址，如街道名称，楼层，门牌号码');
                this.iptErrName = 'address';
            }else {
                if(this.formData.isDefault) {
                    this.formData.isDefault = 1;
                }else {
                    this.formData.isDefault = 0;
                }

                this.$store.dispatch('addAddress', this.formData).then(res => {
                    if(res.status) {
                        this.$emit('confirmDialogEvent', res.data);
                        this.closeDialog();
                    }else {
                        this.sendTips(res.errMsg);
                    }
                });
            }
        }
    },
    created () {
        if(this.formData.provinceId < 0) {
            this.$store.dispatch('cityList').then(res => {
                if(res.status) {
                    this.provinceList = res.data;
                }
            });
        }else {
            this.$store.dispatch('areaList', {
                p: this.formData.provinceId,
                c: this.formData.cityId
            }).then(res => {
                if(res.status) {
                    this.provinceList = res.data.province;
                    this.cityList = res.data.city;
                    this.districtList = res.data.district;
                }
            });
        }
    },
    directives: {
        focus: {
            update: (el, binding) => {
                if(binding.value) {
                    el.focus();
                }
            }
        }
    },
    components: {
        Tips
    }
}
</script>

<style lang="scss" scoped>
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

.address-container {
    width: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    select {
        -webkit-appearance: none;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .dialog {
        background: rgb(255, 255, 255);
        overflow-y: hidden;
        overflow-x: hidden;
        min-width: 200px;
        border-radius: 16px;
        border: 1px solid rgb(220, 220, 220);
        border-color: rgba(0,0,0,.14);
        box-shadow: 0 10px 30px #000;
        text-align: left;
    }
    .topbar {
        overflow: hidden;
        width: 100%;
        .title {
            height: 71px;
            padding: 0 15px;
            border-radius: 16px 16px 0 0;
            border-bottom: 1px solid rgb(230, 230, 230);
            box-shadow: 0 1px 7px rgba(0,0,0,.06);
            background: rgb(253, 253, 253);
            background: linear-gradient(rgb(251, 251, 251),rgb(236, 236, 236));
            line-height: 71px;
            text-align: center;
            h4 {
                padding-left: 15px;
                font-size: 22px;
                font-weight: 400;
                color: rgb(100, 100, 100);
                &:after {
                    visibility: hidden;
                    display: block;
                    font-size: 0;
                    content: " ";
                    clear: both;
                    height: 0;
                }
            }
        }
        .dialog-close {
            overflow: hidden;
            display: block;
            position: absolute;
            right: 17px;
            top: 24px;
            z-index: 20;
            width: 16px;
            height: 17px;
            padding: 4px 5px;
            background: url(~images/form-ui.png) no-repeat -16px -16px;
            text-indent: -9999em;
            opacity: .7;
            cursor: pointer;
            transition: all .3s linear;
        }
    }
    .content {
        input,
        select {
            color: rgb(98, 98, 98)
        }
        .fl {
            float: left!important;
        }
        .fr {
            float: right!important;
        }
        .fn-clear {
            zoom: 1;
            &:after {
                visibility: hidden;
                display: block;
                font-size: 0;
                content: " ";
                clear: both;
                height: 0;
            }
        }
        padding: 30px;
        box-sizing: border-box;
        font-size: 18px;
        line-height: 30px;
        color: rgb(141, 141, 141);
        overflow: auto;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        min-width: 220px;
        .dialog-address-from {
            width: 390px;
        }
        .address-form {
            width: 370px;
            margin: 0 auto;
            .module-form-row-pc {
                position: relative;
                padding-bottom: 15px;
                margin: 0 auto;
                .form-item-v3 {
                    position: relative;
                    height: 46px;
                    background: rgb(255, 255, 255);
                    border: 1px solid rgb(204, 204, 204);
                    border-radius: 6px;
                    box-shadow: inset 0 3px 5px -4px rgba(0,0,0,.4), inset -1px 0 3px -2px rgba(0,0,0,.1);
                    line-height: 46px;
                    font-size: 18px;
                    i {
                        position: absolute;
                        left: 15px;
                        top: 0;
                        font-size: 16px;
                        font-style: normal;
                        pointer-events: none;
                        color: rgb(190, 190, 190);
                    }
                    input {
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                        padding: 5px 15px;
                        background-color: rgba(0, 0, 0, 0);
                        border: none;
                        font-size: 16px;
                        z-index: 10;
                        outline: none;
                        box-shadow: none;
                        overflow: visible;
                    }
                    .select-province,
                    .select-city,
                    .select-district,
                    .select-province-wrapper,
                    .select-city-wrapper,
                    .select-district-wrapper {
                        display: block;
                        background: rgb(255, 255, 255) linear-gradient(rgb(250, 250, 250),rgb(245, 245, 245));
                    }
                    .select-province-wrapper,
                    .select-city-wrapper,
                    .select-district-wrapper {
                        position: relative;
                        height: 100%;
                        border-radius: 5px;
                        overflow: hidden;
                    }
                    .select-province,
                    .select-city,
                    .select-district {
                        position: absolute;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                        transform: translateY(-50%);
                        width: 100%;
                        margin: 0;
                        padding: 0 15px;
                        font-size: 16px;
                        color: rgb(51, 51, 51);
                    }
                    option {
                        font-weight: normal;
                        display: block;
                        white-space: pre;
                        min-height: 1.2em;
                        padding: 0px 2px 1px;
                    }
                }
                .area-code {
                    width: 118px;
                }
                .telphone {
                    width: 238px;
                }
                .area-code,
                .area-code {
                    input {
                        width: inherit;
                        box-sizing: border-box;
                    }
                }
                .city-wrapper,
                .district-wrapper {
                    width: 178px;
                }
                .checkbox-section {
                    font-size: 14px;
                    line-height: 14px;
                    cursor: pointer;
                    .blue-checkbox {
                        display: inline-block;
                        position: relative;
                        width: 1.2rem;
                        height: 1.2rem;
                        -webkit-user-select: none;
                        user-select: none;
                        &:before {
                            position: absolute;
                            content: "";
                            top: 0;
                            left: 0;
                            width: 1rem;
                            height: 1rem;
                            border: .12rem solid rgb(211, 211, 211);
                            border-radius: 50%;
                        }
                        &.on {
                            background: url(~images/checkbox-selected.png) no-repeat;
                            background-size: 1.2rem;
                            &:before {
                                content: none;
                            }
                        }
                    }
                    .checkbox-label {
                        color: rgb(104, 104, 104);
                        vertical-align: super;
                    }
                }
            }
            .btn {
                display: block;
                width: 100%;
                height: 48px;
                border-radius: 6px;
                background: rgb(94, 139, 221);
                background: linear-gradient(rgb(126, 163, 245),rgb(90, 130, 240));
                box-shadow: inset 0 1px 2px hsla(0,0%,100%,.1), inset 0 0 0 1px rgba(0,0,0,.2), 0 1px 3px rgba(0,0,0,.1);
                text-shadow: 0 -0.05rem 0 rgba(0,0,0,.15);
                box-sizing: border-box;
                text-align: center;
                overflow: hidden;
                outline: none;
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    line-height: 30px;
                    padding: 0 13px;
                    font-size: 12px;
                    color: rgb(255, 255, 255);
                    box-sizing: border-box;
                    text-decoration: none;
                    height: 48px;
                    line-height: 46px;
                    font-size: 18px;
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
        }
    }
}
</style>
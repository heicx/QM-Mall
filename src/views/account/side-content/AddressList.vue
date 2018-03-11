<template>
  <div class='side-content'>
    <div class="address-group">
      <div class="address-header" v-if="addressList.length > 0">
        <span class="column-name">姓名</span>
        <span class="column-address">详细地址</span>
        <span class="column-tel">电话</span>
      </div>
      <ul class="address-list">
        <li class='list-item' v-for="address in addressList" :key="address.id">
          <span class="name">{{address.name}}</span>
          <span class="address">{{address.province_name}}{{address.city_name}}{{address.district_name}} {{address.address_name}}</span>
          <span class="tel">
            {{address.mobile}}
          </span>
          <div class="operation">
            <!-- <button class='edit'>编辑</button> -->
            <button class='del' @click="delAddress(address.id)">删除</button>
          </div>
        </li>
      </ul>
      <div class="address-add">
        <button @click="addAddress()">添加收货地址</button>
      </div>
    </div>
    <user-address :isOpen="isOpenDialog" :formData='adddressData' @closeDialogEvent="closeDialog" @confirmDialogEvent="confirmUserAddress"></user-address>
  </div>
</template>

<script>
import UserAddress from '../../../components/UserAddress.vue';

export default {
  data () {
    return {
      isOpenDialog: false,
      addressList: [],
      adddressData: {
        userName: '',
        mobile: '',
        areaCode: '',
        phoneNumber: '',
        provinceId: -1,
        cityId: -1,
        districtId: -1,
        address: '',
        isDefault: false
      }
    }
  },
  methods: {
    addAddress () {
      this.isOpenDialog = true;
    },
    delAddress (addressId) {
      this.$store.dispatch('delAddress', {addressId: addressId}).then(res => {
        if(res.status) {
          this.addressList = this.addressList.filter(oAddress => {
            return oAddress.id != res.data;
          });
        }
      });
    },
    confirmUserAddress (address) {
      this.addressList.push(address);
    },
    closeDialog (status) {
      this.isOpenDialog = status;
    }
  },
  created () {
    this.$store.dispatch('addressList', {count: 12}).then(res => {
      if(res.status) {
        this.addressList = res.data;
      }
    });
  },
  components: {
    UserAddress
  }
}
</script>

<style lang="scss" scoped>
.side-content {
  margin-top: 0;
}
.address-header {
  height: 38px;
  line-height: 38px;
  background: #EEE;
  border-bottom: 1px solid #DBDBDB;
  span {
    display: inline-block;
    font-size: 12px;
    text-align: center;
    color: #666;
  }
  .column-name {
    padding-left: 27px;
    width: 106px;
    text-align: left;
  }
  .column-address {
    width: 440px;
    text-align: left;
  }
}
.side-content-wrap .side-content li.list-item {
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #EEE;
}
.list-item {
  .name {
    display: inline-block;
    width: 106px;
    text-align: left;
  }
  .address {
    display: inline-block;
    width: 440px;
    text-align: left;
  }
  .tel {
    display: inline-block;
    width: 240px;
    text-align: left;
    .default {
      padding-left: 34px;
    }
  }
  .operation {
    width: 120px;
    display: inline-block;
    vertical-align: middle;
    text-align: right;
    button {
      width: 80px;
      height: 30px;
      border: 0;
      border-radius: 4px;
      background: #3399ff;
      color: #fff;
      font-size: 12px;
      transition: opacity 0.15s ease-out;
      opacity: .85;
      &:hover {
        opacity: 1;
      }
    }
    .del {
      margin-top: 12px;
    }
  }
}
.address-add {
  margin: 40px 0 30px;
  text-align: center;
  button {
    width: 180px;
    height: 48px;
    border: 0;
    border-radius: 6px;
    background: #3399ff;
    color: #fff;
    font-size: 14px;
    transition: opacity 0.15s ease-out;
    opacity: .85;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
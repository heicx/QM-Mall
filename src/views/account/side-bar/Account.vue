<template>
  <ul class='sidebar-list'>
    <li v-for='(item, key) in supportList' :key='key'>
      <router-link :to='item.path' :class='{"active": item.path == currPath}'>{{item.name}}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['currPath'],
    data() {
      return {
        supportList: [
          {
            name: '订单列表',
            path: '/account/order'
          },
          {
            name: '收货地址',
            path: '/account/address'
          },
          // {
          //   name: '售后服务',
          //   path: '/service/sale'
          // },
          {
            name: '账户资料',
            path: '/account/information'
          }
        ]
      }
    }
  }
</script>

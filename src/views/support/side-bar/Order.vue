<template>
  <ul class='sidebar-list'>
    <li v-for='item in orderList'>
      <router-link :to='item.path' :class='{"active": item.path == currPath}'>{{item.name}}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['currPath'],
    data() {
      return {
        orderList: [
          {
            name: '购买指南',
            path: '/support/guide'
          },
          {
            name: '支付方式',
            path: '/support/payment'
          },
          {
            name: '送货政策',
            path: '/support/delivery'
          }
        ]
      }
    }
  }
</script>

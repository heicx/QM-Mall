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
            name: '法律声明',
            path: '/copyright/agreement'
          },
          {
            name: '隐私条款',
            path: '/copyright/privacy'
          }
        ]
      }
    }
  }
</script>

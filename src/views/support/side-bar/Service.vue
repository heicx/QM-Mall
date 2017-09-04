<template>
  <ul class='sidebar-list'>
    <li v-for='item in supportList'>
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
            name: '售后服务',
            path: '/service/sale'
          },
          {
            name: '售后政策',
            path: '/service/policy'
          }
        ]
      }
    }
  }
</script>

<template>
	<div class="side-bar">
    <h3>{{sidebarName}}</h3>
    <slot name='sidebar-list'></slot>
	</div>
</template>

<script>
export default {
  props: ['sidebarName']
}
</script>

<style lang="scss" scoped>
</style>
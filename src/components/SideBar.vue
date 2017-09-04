<template>
	<div class="side-bar-wrap">
    <h2 class='side-bar-name'>{{sideBarName}}</h2>
    <slot name='sidebar-list'></slot>
	</div>
</template>

<script>
export default {
  props: ['sideBarName']
}
</script>

<style lang="scss" scoped>
</style>
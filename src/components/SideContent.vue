<template>
	<div class="side-content">
    <h3>{{itemName}}</h3>
    <slot name='sidebar-content'></slot>
	</div>
</template>

<script>
export default {
  props: ['itemName']
}
</script>

<style lang="sass">

</style>
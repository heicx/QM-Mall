<template>
	<div class="side-content-wrap">
    <h3 class='module-name'>{{sideBarItemName}}</h3>
    <slot name='sidebar-content'></slot>
	</div>
</template>

<script>
export default {
  props: ['sideBarItemName']
}
</script>
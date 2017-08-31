<template>
	<div>
		<app-header></app-header>
		<div>
			404 not found
		</div>
		<app-header></app-header>
	</div>
</template>

<script>
import appHeader from '../components/Header.vue';
import appFooter from '../components/Footer.vue';

export default {
    methods: {},
    components: {
        appHeader,
        appFooter
    },
    mounted() {
    },
    destroyed() {
    }
}
</script>

<style lang="sass"></style>
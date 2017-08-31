<template>
	<div>
		<app-header></app-header>
        <app-navigation></app-navigation>
		<div>
			Home Content
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from '../components/Header.vue';
import appNavigation from '../components/Navigation.vue';
import appFooter from '../components/Footer.vue';

export default {
    methods: {},
    components: {
        appHeader,
        appNavigation,
        appFooter
    },
    mounted() {
    },
    destroyed() {
    }
}
</script>

<style lang="sass"></style>
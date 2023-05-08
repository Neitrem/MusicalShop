<template>
	<vHeader></vHeader>
	
	<MainPage></MainPage>

	<vFooter></vFooter>
</template>

<script>

import vFooter from './components/v-footer.vue';
import vHeader from './components/v-header.vue';

import MainPage from './components/pages/MainPage.vue'


export default {
	name: 'App',
	components: {vFooter, vHeader, MainPage}
}

</script>

<style lang="scss">
@import '@/styles/reset.css';

#app
{
	display: flex;
	flex-direction: column;
	align-items: center;

	min-width: 320px;
}


</style>

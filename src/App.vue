<template>
	<MyHeader></MyHeader>
	
	<MainPage></MainPage>

	<MyFooter></MyFooter>
</template>

<script>

import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';

import MainPage from './components/pages/MainPage.vue'


export default {
	name: 'App',
	components: {MyFooter, MyHeader, MainPage}
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

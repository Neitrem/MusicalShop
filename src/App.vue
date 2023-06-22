<template>

	<MyHeader></MyHeader>
	
	<router-view ></router-view>

	<MyFooter></MyFooter>
</template>

<script>

import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';



export default {
	name: 'App',

	components: {MyFooter, MyHeader}
}

</script>

<style scoped lang="scss">
@import '@/styles/reset.css';

#app
{
	display: flex;
	flex-direction: column;
	align-items: center;

	min-width: 320px;
}



</style>

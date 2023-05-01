<template>
	<MyHeader></MyHeader>
	<router-view></router-view>
	<MyFooter></MyFooter>
</template>

<script>

import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';


export default {
	name: 'App',
	components: {MyHeader, MyFooter}
}

</script>

<style lang="scss">
@import '@/styles/reset.css';

</style>

<template>
	<div class="wrapper">
		<button name="button-prev" class="carousel__button" @click="prev">
				<img src="../svg/arrow_left.svg" alt="arrow_left">
		</button>
		<div class="carousel" :style="this.carouselStyle">
			<div 
				@mousemove="draging"
				@mousedown="startDrag"
				@mouseup="stopDrag" 
				@mouseleave="stopDrag"
				class="carousel__inner" 
				ref="carousel"
				>
				<div   
					class="carousel__inner-card" 
					v-for="card in itemArray" 
					:key="card"
					:style="{ backgroundImage: 'url(' + require('@/img/pop_img-' + card + '.png') + ')' }"
					>
					<p></p>
				</div>
			</div>
		</div>
		<button name="button-next" class="carousel__button" @click="next">
				<img src="../svg/arrow_right.svg" alt="arrow_right">
		</button>
	</div>
</template>

<script lang="js">
export default {
	name: "v-carousel",
	props:
	{
		itemArray: {
			type: Array,
			default: () => []
		}
	},
	data () {
        return {
			carouselStyle: {},
			isDraging: false,
			prevPageX: 0,
			prevScrollLeft: 0,
			carousel: Element
        }
    },

	methods: {
		draging(e) {
			if(!this.isDraging) return
			e.preventDefault();
			let posDiff = e.pageX - this.prevPageX; 
			this.carousel.scrollLeft = this.prevScrollLeft - posDiff;
		},

		startDrag(e) {
			this.isDraging = true;
			this.prevPageX = e.pageX
			this.prevScrollLeft = this.carousel.scrollLeft;
		},

		stopDrag() {
			this.isDraging = false;
		},

		next() {
			this.itemWidth = document.querySelector('.carousel__inner-card').clientWidth + 10;
			this.carousel.scrollLeft += this.itemWidth;
		},

		prev() {
			this.itemWidth = document.querySelector('.carousel__inner-card').clientWidth + 10;
			this.carousel.scrollLeft -= this.itemWidth;
		}
	}, 

	mounted() {
		this.carousel = document.querySelector('.carousel__inner');
	}
	
}
</script>

<style scoped lang="scss">

.wrapper
{
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-around
}
.carousel
{

	width: 200px;
	&__inner
	{
		scroll-behavior: smooth;
		white-space:nowrap;
		cursor: pointer;
		overflow: hidden;

		&-card
		{
			display: inline-block;
			margin-left: 10px;
			border-radius: 15px;
			width: 200px;
			height: 350px;
			background-size: cover;

			opacity: 0.8;

			&:first-child
			{
				margin-left: 0;
			}
		}
	}

	&__button
	{
		scale: 0.6;
		background: none;
		cursor: pointer;
		padding: 10px;
		border-radius: 15px;
		&:hover
		{
			background: rgba($color: #A3A3A3, $alpha: 0.5);
		}
		&:active
		{
			padding: 5px;
			margin: 5px;
		}
	}
}
@media screen and (min-width: 425px) {
	.wrapper
	{
		display: flex;
		align-items: center;
		width: 90%;
		justify-content: space-between
	}
}



@media screen  and (min-width: 768px){
	.carousel
	{
		width: 410px;
		&__inner
		{
			&-card
			{
				width: 200px;
				height: 350px;

			}
		}

		&__button
		{
			scale: 0.8;
		}
	}
}
@media screen  and (min-width: 1440px){
	.carousel
	{
		width: 1160px;
		&__inner
		{
			&-card
			{
				width: 380px;
				height: 700px;

			}
		}

		&__button
		{
			scale: 1;
		}
	}
}

</style>
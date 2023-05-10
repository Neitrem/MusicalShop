<template>
    <div class="main-page">
        <vCarousel
        :itemArray="cards"
        >
        </vCarousel>
        <vBottomLine />
        <div class="categories">
            <div class="categories-item">
                <img src="../../img/categories-1.png" alt="" class="categories-item__img">
                <p class="categories-item__text">Гитары</p>
            </div>
            <div class="categories-item">
                <img src="../../img/categories-2.png" alt="" class="categories-item__img">
                <p class="categories-item__text">Усилители</p>
            </div>
            <div class="categories-item">
                <img src="../../img/categories-3.png" alt="" class="categories-item__img">
                <p class="categories-item__text">Аксессуары</p>
            </div>
        </div>
        <button class="view-all">Смотреть все</button>
    </div>
    
</template>

<script lang="js">
import vCarousel from '../v-carousel.vue';
import vBottomLine from '../UI/v-bottom-line.vue';

export default {
    name: "mainPage",
    components: {
        vCarousel, vBottomLine
    },

    data () {
        return {
            cards: [1, 2, 3, 1, 3, 2],
        }
    },


    mounted() {
        
    },

    methods: {
        
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.main-page
{
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 95%;
}



.categories
{
    display: flex;
    justify-content: space-around;
    width: 90%;

    margin: 0;

    &-item
    {
        position: relative;
        min-width: 90px;
        min-height: 90px;

        width: 30%;
        height: min-content;

        max-width: 150px;
        &__img
        {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
            opacity: 0.8;
        }

        &__text
        {
            font-size: 15px;
            @extend %text-white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            @media screen and (min-width: 768px){
                font-size: 20px;
            }
            @media screen and (min-width: 1440px){
                font-size: 25px;
            }
            
        }

        @media screen and (min-width: 1440px){
            min-width: 130px;
            min-height: 130px;
            max-width: 200px;
        }
    }
}

.view-all
{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    background: #F1E80A;
    border-radius: 15px;

    width: 160px;
    height: 40px;

    margin-top: 20px;

    @media screen and (min-width: 768px){
    }
    @media screen and (min-width: 1440px){
        font-size: 20px;
        width: 220px;
        height: 75px;
    }
}
</style>
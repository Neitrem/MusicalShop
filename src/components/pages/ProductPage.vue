<template>
  <div class="product__wrapper">
    <div class="product__preview preview">
      <img class="preview__img" :src="imageUrl" alt="preview-img" />
      <div class="preview__info">
        <h2 class="preview__title">
          FENDER SQUIER Affinity 2021 Stratocaster HH LRL Olympic White
        </h2>
        <div class="preview__action-block">
          <p class="preview__price">36 999 руб.</p>
          <btnAside class="preview__cart" name="В корзину"></btnAside>
          <btnAside
            class="preview__one-click"
            name="Купить в один клик"
          ></btnAside>
        </div>
      </div>
    </div>
    <hr />
    <div class="product__info">
      <div class="info__buttons">
        <button class="info__button">Описание</button>
        <button class="info__button">Характеристики</button>
        <button class="info__button">Отзывы</button>
      </div>
      <p class="info__description">
        Fender Squier Affinity – это серия электрогитар и бас-гитар, которая
        изначально задумывалась как идеальное вложение для начинающих
        гитаристов. Гитары этой серии – заслуженные обладатели наилучшего
        соотношения цена / качество / функционал среди всех гитар Squier. Такой
        инструмент дает гитаристу познакомиться с оригинальным звучанием и
        эргономикой Fender, и его не потребуется менять как большинство
        бюджетных электрогитар – высокое качество древесины и фурнитуры позволит
        гитаре «взрослеть» вместе с уровнем игры своего обладателя. Кроме того,
        в 2021 году серия Squier Affinity была перевыпущена, и гитары этой серии
        стали лучше, чем когда-либо! Fender Squier Affinity 2021 Stratocaster HH
        - это стратокастер, которого еще никогда не было в линейке Affinity.
        Теперь классический дизайн страта дополнен двумя мощными керамическими
        хамбакерами, которые позволяют работать в любом тяжелом жанре рока и
        металла. Сочетание удобства и эргономики страта, а также мощи
        керамических хамбакеров открывает совершенно новое поле для
        экспериментов. Как и все новые модели Affinity 2021, электрогитара
        Fender Squier Affinity 2021 Stratocaster HH отличается повышенным
        качеством древесины, фурнитуры и электроники. Модернизированный корпус
        Корпус гитары выполнен из тополя, который по своим физическим
        характеристикам максимально близок к ольхе – традиционной древесине
        корпуса американских и мексиканских гитар Fender. При этом толщина
        корпуса Affinity 2021 Stratocaster HH специально уменьшена на несколько
        миллиметров относительно стандарта – это снижает массу гитары и повышает
        удобство игры в любой позиции.
      </p>
    </div>
  </div>
</template>

<script>
import btnAside from "@/components/UI/button-aside.vue";

export default {
  components: { btnAside },
  data() {
    return {
      imageUrl: require("@/img/pop_img-2.png"),
    };
  },
};
</script>

<style>
.info__description {
  color: #fff;
  font-size: 24px;
}

.info__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}

.info__button {
  width: 20%;
  padding: 15px 5px;
  border-radius: 20px;
  color: #fff;
  background-color: #535353;
  border: #fff solid 1px;
  font-size: 24px;
}

.product__wrapper {
  background: #535353;
  max-width: 1180px;
  padding: 60px 120px;
  border-radius: 15px;
  margin-bottom: 30px;
}

.preview__price {
  color: white;
}

.preview__img {
  max-width: 260px;
  border-radius: 10px;
}

.preview {
  display: flex;
  flex-direction: row;
  column-gap: 80px;
  padding-bottom: 80px;
}

.preview__title {
  color: #ffffff;
  font-size: 44px;
}

.preview__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.preview__price {
  font-size: 44px;
}

.preview__action-block {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: flex-end;
}

.preview__cart,
.preview__one-click {
  width: 30%;
}

.preview__cart {
  background-color: #f1e80a;
}

@media (max-width: 1280px) {
  .info__button {
  width: auto;
}

.preview__cart,
.preview__one-click {
  min-width: 200px;
  width: auto;
}
}
</style>

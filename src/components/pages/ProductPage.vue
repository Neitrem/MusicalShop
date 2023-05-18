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
          <button class="preview__cart">В корзину</button
          ><button class="preview__one-click">Купить в один клик</button>
        </div>
      </div>
    </div>
    <hr />
    <div class="product__info">
      <div class="info__buttons">
        <button class="info__button">Описание</button
        ><button class="info__button">Характеристики</button
        ><button class="info__button">Отзывы</button>
      </div>
      <p class="info__description">Fender Squier Affinity – это серия электрогитар и бас-гитар, которая изначально задумывалась как идеальное вложение для начинающих гитаристов. Гитары этой серии – заслуженные обладатели наилучшего соотношения цена / качество / функционал среди всех гитар Squier. Такой инструмент дает гитаристу познакомиться с оригинальным звучанием и эргономикой Fender, и его не потребуется менять как большинство бюджетных электрогитар – высокое качество древесины и фурнитуры позволит гитаре «взрослеть» вместе с уровнем игры своего обладателя. Кроме того, в 2021 году серия Squier Affinity была перевыпущена, и гитары этой серии стали лучше, чем когда-либо! Fender Squier Affinity 2021 Stratocaster HH - это стратокастер, которого еще никогда не было в линейке Affinity. Теперь классический дизайн страта дополнен двумя мощными керамическими хамбакерами, которые позволяют работать в любом тяжелом жанре рока и металла. Сочетание удобства и эргономики страта, а также мощи керамических хамбакеров открывает совершенно новое поле для экспериментов. Как и все новые модели Affinity 2021, электрогитара Fender Squier Affinity 2021 Stratocaster HH отличается повышенным качеством древесины, фурнитуры и электроники. Модернизированный корпус Корпус гитары выполнен из тополя, который по своим физическим характеристикам максимально близок к ольхе – традиционной древесине корпуса американских и мексиканских гитар Fender. При этом толщина корпуса Affinity 2021 Stratocaster HH специально уменьшена на несколько миллиметров относительно стандарта – это снижает массу гитары и повышает удобство игры в любой позиции.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: require("@/img/pop_img-2.png"), 
    };
  },
};
</script>

<style>
    .product__wrapper {
        background: #535353;
        width: 1200px;
        padding: 120px 60px;
        border-radius: 15px;
    }

    p {
        color: #ffffff;
    }
</style>

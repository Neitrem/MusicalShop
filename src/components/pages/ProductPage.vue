<template>
  <div class="product__wrapper">
    <div class="product__preview preview">
      <img class="preview__img" :src="product.imageUrl" alt="preview-img" />
      <div class="preview__info">
        <h2 class="preview__title">
          {{ product.title }}
        </h2>
        <div class="preview__action-block">
          <p class="preview__price">{{ product.price }}</p>
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
        <InfoButton title="Описание" @showInfo="handleEvent"></InfoButton>
        <InfoButton title="Характеристики" @showInfo="handleEvent"></InfoButton>
        <InfoButton title="Отзывы" @showInfo="handleEvent"></InfoButton>
      </div>
      <p class="info__description">
        {{ info }}
      </p>
    </div>
  </div>
</template>

<script>
import btnAside from "@/components/UI/button-aside.vue";
import InfoButton from "@/components/UI/InfoProductButton.vue";


export default {
  components: { btnAside, InfoButton },
  data() {
    return {
      
      info: "",
      product: {
        title: "FENDER SQUIER Affinity 2021 Stratocaster HH LRL Olympic White",
        price: "36 999 руб.",
        imageUrl: require("@/img/pop_img-2.png"),
      },
    };
  },
  methods: {
    handleEvent(eventData) {
      this.info = eventData;
    },
    getInfo() {
      this.info = 'Нажми на любую кнопку';
    },
  },
  mounted() {
    this.getInfo();

  },
};
</script>

<style lang="scss">

@import "@/styles/variables.scss";

.info__description {
  color: #fff;
  font-size: 24px;
  @extend %text-white;
}

.info__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}

.product__wrapper {
  background: #535353;
  max-width: 960px;
  padding: 60px 120px;
  border-radius: 15px;
  margin-bottom: 30px;
}

.preview__price {
  color: white;
  @extend %text-white;
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
  @extend %text-white;
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
    padding: 15px 10px;
  }

  .preview__cart,
  .preview__one-click {
    min-width: 200px;
    width: auto;
  }
}

@media (max-width: 1024px) {
  .preview__title {
    font-size: 32px;
  }

  .preview__price {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .product__wrapper {
    padding: 60px 60px;
  }

  .preview__img {
    max-width: 130px;
  }
}
</style>

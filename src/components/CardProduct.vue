<template>
  <div
    class="card__wrapper"
    :style="{ backgroundImage: `url(${getImagePath()})` }"
  >
    <div class="card__info">
      <h3 class="card__title">
        {{ this.guitar.name }}
      </h3>
      <div class="card__description">
        <p class="card__price">{{ this.guitar.price }}</p>
        <p class="card__status">В наличии</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    guitar: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImagePath() {
      return "img/" + this.guitar.image;
    },
  },
};
</script>

<style>
.card__wrapper {
  background-size: cover;
  width: 220px;
  height: 374px;
  border-radius: 15px;
  display: flex;
  align-items: flex-end;
}

.card__info {
  background: rgba(255, 255, 255, 0.73);
  border-radius: 0px 0px 15px 15px;
  padding: 7px;
  width: 220px;
  height: 50px;
}

.card__title {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 10px;
}

.card__description {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card__price,
.card__status {
  font-family: "Inter";
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  opacity: 0.8;
}

@media (max-width: 530px) {
  .card__wrapper {
    width: 180px;
    height: 330px;
  }
}
</style>

<template>
  <div class="card__wrapper">
    <div class="card__info">
      <h3 class="card__title">
        FENDER SQUIER Affinity 2021 Stratocaster HH LRL Olympic White
      </h3>
      <div class="card__description">
        <p class="card__price">46 000 руб</p>
        <p class="card__status">В наличии</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
};
</script>

<style>
.card__wrapper {
  background-image: url("@/img/pop_img-2.png");
  background-size: cover;
  width: 220px;
  height: 374px;
  border-radius: 15px;
  display: flex;
  align-items: flex-end;
}

.card__info {
  background: rgba(255, 255, 255, 0.83);
  border-radius: 0px 0px 15px 15px;
  padding: 7px;
}

.card__title {
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 7px;
}

.card__description {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card__price, .card__status {
  font-family: "Inter";
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
}
</style>

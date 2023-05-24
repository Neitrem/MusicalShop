<template>
  <button class="categories__btn-choose">{{name}}</button>
</template>

<script>
export default {
    name: "btnAside",
    props: ['name']
};
</script>

<style>


.categories__btn-choose {
  background: #ffffff;
  border-radius: 15px;
  width: 174px;
  height: 49px;
  font-weight: 400;
  font-size: 20px;
  filter: drop-shadow(0px 5px 0px #a7a7a7);
}

.categories__btn-choose:hover {
  opacity: 0.9;
  cursor: pointer;
}

@media (max-width: 530px) {
	.categories__btn-choose {
  width: 130px;
}
}
</style>

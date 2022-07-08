<template>
  <div class="card">
    <div class="card__wrap">
      <div class="card__header">
        <div class="card__frofile-image" :style="{ backgroundImage: `url(${listData.frofile})` }"></div>
        <p class="card__user-name">{{ listData.name }}</p>
      </div>
      <div
        class="card__image"
        :style="{ backgroundImage: `url(${listData.image})` }"
      ></div>
      <div class="card__content">
        <p class="card__text">{{ listData.text }}</p>
        <p class="card__date">{{ listData.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postList",
  data() {
    return {};
  },
  props: {
    listData: Array,
  },
};
</script>

<style>
</style>
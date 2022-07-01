<template>
  <div class="upload-box">
    <div v-if="tab == 1">
      <div
        class="upload__image"
        :style="`background-image:url(${image})`"
      ></div>
      <ul class="filter">
        <li class="filter__list"></li>
        <li class="filter__list"></li>
        <li class="filter__list"></li>
        <li class="filter__list"></li>
        <li class="filter__list"></li>
      </ul>
    </div>

    <div v-if="tab == 2">
      <div
        class="upload__image"
        :style="`background-image:url(${image})`"
      ></div>
      <div class="write">
        <textarea class="write__box"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uploadPage",
  data() {
    return {};
  },
  props: {
    tab: Number,
    image: String,
  },
};
</script>

<style>
</style>
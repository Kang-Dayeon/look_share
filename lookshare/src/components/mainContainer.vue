<template>
  <div class="contents">
    <div class="menu">
      <button class="menu__btn">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
    </div>
    <div v-if="tab == 0" class="main">
      <postList
        :i="i"
        :listData="listData[i]"
        v-for="(a, i) in listData"
        :key="i"
      />
    </div>
    <upload-page :tab="tab" :image="image"></upload-page>
  </div>
</template>

<script>
import postList from "./postList.vue";
import uploadPage from "./uploadPage.vue";

export default {
  name: "mainContainer",
  data() {
    return {};
  },
  mounted() {},
  components: {
    postList,
    uploadPage,
  },
  props: {
    listData: Array,
    tab: Number,
    image: String,
  },
};
</script>

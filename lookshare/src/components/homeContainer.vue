<template>
  <div class="contents">
    <div class="chat">
      <button class="chat__btn">
        <font-awesome-icon icon="fa-solid fa-message" />
      </button>
    </div>
    <div v-if="tab == 0">
      <myHome
        :i="i"
        :listData="listData[i]"
        v-for="(a, i) in listData"
        :key="i"
      ></myHome>
    </div>
    <upload-page :tab="tab"></upload-page>
  </div>
</template>

<script>
import myHome from "./myHome.vue";
import uploadPage from "./uploadPage.vue";

export default {
  name: "homeContainer",
  data() {
    return {};
  },
  mounted() {},
  components: {
    myHome,
    uploadPage,
  },
  props: {
    listData: Array,
    tab: Number,
  },
};
</script>

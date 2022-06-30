<template>
  <div class="contents">
    <myHome
      :i="i"
      :listData="listData[i]"
      v-for="(a, i) in listData"
      :key="i"
    ></myHome>
    <!-- <myHome :listData="listData[1]"></myHome>
    <myHome :listData="listData[2]"></myHome> -->
  </div>
</template>

<script>
import myHome from "./myHome.vue";

export default {
  name: "homeContainer",
  data() {
    return {};
  },
  mounted() {},
  components: {
    myHome,
  },
  props: {
    listData: Array,
  },
};
</script>

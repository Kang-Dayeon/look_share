<template>
  <div class="contents">
    <myHome></myHome>
    <myHome></myHome>
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
};
</script>

<template>
  <div>
    <div class="header">
      <div class="header__inner">
        <h1 class="header__logo">Look Share</h1>
      </div>
    </div>
    <homeContainer></homeContainer>
    <div class="footer">
      <ul class="footer__menu">
        <li class="footer__menu__list">POST</li>
        <li class="footer__menu__list">HOME</li>
        <li class="footer__menu__list">MY SHOP</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import homeContainer from "./components/homeContainer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},
  components: {
    homeContainer,
  },
};
</script>

<style lang="scss">
@import "./assets/css/main.scss";
</style>

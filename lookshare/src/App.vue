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
        <li class="footer__menu__list">
          <input accept="image/*" type="file" id="file" class="input-btn" />
          <label for="file" class="input__post">POST</label>
        </li>
        <li class="footer__menu__list">
          <input type="button" id="input__home" class="input-btn" />
          <label for="input__home">Home</label>
        </li>
        <li class="footer__menu__list">
          <input type="button" id="input__shop" class="input-btn" />
          <label for="input__shop">MY SHOP LIST</label>
        </li>
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

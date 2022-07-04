<template>
  <div>
    <div class="header">
      <div class="header__inner">
        <h1 class="header__logo">Look Share</h1>
      </div>
    </div>

    <div class="container">
      <homeContainer
        :listData="listData"
        :tab="tab"
        :image="image"
      ></homeContainer>
    </div>

    <div class="footer">
      <ul class="footer__menu">
        <li class="footer__menu__list" v-if="tab == 0 || tab == 3">
          <input
            @change="upload"
            accept="image/*"
            type="file"
            id="file"
            class="input-btn"
          />
          <label for="file" class="input__post">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </label>
        </li>
        <li class="footer__menu__list" v-if="tab == 1 || tab == 2">
          <input
            type="button"
            id="input__before"
            class="input-btn"
            @click="tab--"
          />
          <label for="input__before">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
          </label>
        </li>
        <li class="footer__menu__list">
          <input
            type="button"
            id="input__home"
            class="input-btn"
            @click="tab = 0"
          />
          <label for="input__home">
            <font-awesome-icon icon="fa-solid fa-house" />
          </label>
        </li>
        <li class="footer__menu__list" v-if="tab == 0 || tab == 3">
          <input
            type="button"
            id="input__mypage"
            class="input-btn"
            @click="tab = 3"
          />
          <label for="input__mypage">
            <font-awesome-icon icon="fa-solid fa-user" />
          </label>
        </li>
        <li class="footer__menu__list" v-if="tab == 1">
          <input
            type="button"
            id="input__next"
            class="input-btn"
            @click="tab++"
          />
          <label for="input__next">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </label>
        </li>
        <li class="footer__menu__list" v-if="tab == 2">
          <input
            type="submit"
            id="input__upload"
            class="input-btn"
            @click="tab = 0"
          />
          <label for="input__upload">
            <font-awesome-icon icon="fa-solid fa-check" />
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import homeContainer from "./components/homeContainer.vue";
import listData from "./assets/list.js";
// import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      listData: listData,
      tab: 0,
      image: "",
    };
  },
  components: {
    homeContainer,
  },
  methods: {
    upload(e) {
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      this.image = url;
      this.tab++;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/css/main.scss";
</style>

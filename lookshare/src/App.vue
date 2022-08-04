<template>
  <div>
    <div class="header">
      <div class="header__inner">
        <h1 class="header__logo">Look Share</h1>
      </div>
    </div>

    <mainCategory></mainCategory>

    <div class="container">
      <mainContainer :listData="listData" :tab="tab" :image="image" />
      <signUp :tab="tab" />
    </div>
    <FooterMenu
      :tab="tab"
      @upload="upload()"
      @tabMinus="tab--"
      @tabZero="tab = 0"
      @tabThree="tab = 3"
      @tabPlus="tab++"
    />
  </div>
</template>

<script>
import mainContainer from "./components/mainContainer.vue";
import listData from "./assets/list.js";
import FooterMenu from "./common/footerMenu.vue";
import signUp from "./components/signUp.vue";
import mainCategory from "./components/mainCategory.vue"
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
    mainContainer,
    FooterMenu,
    signUp,
    mainCategory,
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

<template>
  <div class="footer">
      <ul class="footer__menu">
        <li class="footer__menu__list" v-if="tab == 0 || tab == 3">
          <input
            @change="$emit('upload')"
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
            @click="$emit('tabMinus')"
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
            @click="$emit('tabZero')"
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
            @click="$emit('tabThree')"
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
            @click="$emit('tabPlus')"
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
            @click="$emit('tabZero')"
          />
          <label for="input__upload">
            <font-awesome-icon icon="fa-solid fa-check" />
          </label>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "FooterMenu",
  data() {
    return {};
  },
  props: {
    tab: Number
  },

}
</script>

<style>

</style>
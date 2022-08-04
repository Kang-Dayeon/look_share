<template>
  <div class="menu-container">
    <div class="menu-header">
        <div class="menu-back">
          <button class="menu-back-btn">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
          </button>
        </div>
        <span class="menu-title">Category</span>
    </div>
    <ul class="menu-list">
        <li class="menu-item"><a class="menu-anchor">TOP</a></li>
        <li class="menu-item"><a class="menu-anchor">BOTTOM</a></li>
        <li class="menu-item"><a class="menu-anchor">OPS</a></li>
        <li class="menu-item"><a class="menu-anchor">ACC</a></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "mainCategory",
    data(){
        return{};
    }
}
</script>

<style>

</style>
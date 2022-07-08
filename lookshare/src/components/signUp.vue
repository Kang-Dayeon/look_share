<template>
  <div class="sing" v-if="tab == 3">
    <div class="sing__wrap">
        <form class="sing__form" action="./signUp">
            <div class="input__box">
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="홍길동">
            </div>
            <div class="input__box">
                <label for="id">Id</label>
                <input id="id" type="text" placeholder="영문 대소문자를 조합하여 8자 이하로 만들어주세요" maxlength="8">
            </div>
            <div class="input__box">
                <label for="pw">Password</label>
                <input id="pw" type="password">
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
name : "signUp",
data() {
    return{}
},
props : {
    tab : Number,
}
}
</script>

<style>

</style>
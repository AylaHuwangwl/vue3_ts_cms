<template>
  <div class="app">
    <!-- <h2>APP</h2>
    <router-link to="/main">主要</router-link>
    <router-link to="/login">登录</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// import { localCache } from '@/utils/cache'
// import userLoginStore from '@/store/login/login'
// import { LOGIN_TOKEN } from '@/global/constances'
// // localCache.removeCache(LOGIN_TOKEN)
// console.log(userLoginStore().token)
</script>
<style scoped>
.app {
  /* background-color: antiquewhite; */
  width: 100vw;
  height: 100vh;
}
</style>

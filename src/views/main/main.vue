<template>
  <div class="login">
    <el-container class="main-content">
      <el-aside :width="isFold?'60px':'210px'" class="main-menu">
        <nav-menu :isFold='isFold'></nav-menu>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <nav-header @fold-value="handleFoldValue"></nav-header>
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import userLoginStore from '@/store/login/login'
import NavMenu from '@/components/menu/menu.vue'
import NavHeader from '@/components/header/header.vue'
import { ref } from '@vue/reactivity'
const isFold = ref(false)
function handleFoldValue(value) {
  isFold.value = value
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  .main-content {
    height: 100%;
    .main-menu {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .el-header {
      height: 50px !important;
      --el-header-padding: 0 !important;
      background-color: aqua;
    }
    .main {
      background-color: #f0f2f5;
    }
  }
}
</style>

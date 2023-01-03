<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>
<script setup lang="ts">
// RBAC:数据库（基于角色的访问控制）
import LoginPanel from './c-cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  // 垂直水平居中
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  background: url('@/assets/img/login-bg.svg');
}
</style>

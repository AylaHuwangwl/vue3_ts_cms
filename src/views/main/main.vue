<template>
  <div class="login">
    <h2>main</h2>
    <el-button @click="handleLogout">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constances'
import router from '@/router'
import { localCache } from '@/utils/cache'

function handleLogout() {
  // 删除Token
  localCache.removeCache(LOGIN_TOKEN)

  router.push('/login')
}
</script>

<style lang="less" scoped>
.login {
}
</style>

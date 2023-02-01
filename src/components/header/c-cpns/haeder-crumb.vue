<template>
  <div class="header-crumb">
    <!-- <h2>header-crumb</h2> -->
    <!-- icon组件会自动加载 -->
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in breadcrumbs" :to="item.path">{{
        item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import userLoginStore from '@/store/login/login'
// import { localCache } from '@/utils/cache'
import { mapPathToBreadCrumb } from '@/utils/map-router'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const loginStore = userLoginStore()
const breadcrumbs = computed(() => {
  const breadcrumb = mapPathToBreadCrumb(route.path, loginStore.usermenu, route)
  return breadcrumb
})
</script>

<style lang="less" scoped>
.header-crumb {
}
</style>

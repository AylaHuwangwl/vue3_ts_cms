<template>
  <div class="header-crumb">
    <!-- <h2>header-crumb</h2> -->
    <!-- icon组件会自动加载 -->
    <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.header-crumb {
}
</style>

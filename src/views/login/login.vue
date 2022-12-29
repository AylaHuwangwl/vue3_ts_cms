<template>
  <div class="login">
    <h2>login</h2>
  </div>
</template>

<script setup lang="ts">
// let abc: string = '123'
import hyRequest from '@/service'
hyRequest
  .get({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res)
  })
</script>

<style lang="less" scoped>
</style>

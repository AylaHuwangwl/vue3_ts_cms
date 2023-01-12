<template>
  <div class="role">
    <pageSearch :search-config="searchConfig"></pageSearch>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from '../department/config/search.config'
</script>

<style lang="less" scoped>
.role {
}
</style>

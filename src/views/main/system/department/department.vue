<template>
  <div class="department">
    <!-- <h2>department</h2> -->
    <page-search></page-search>
    <page-table></page-table>
  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from '@/views/main/system/department/c-cpns/page-search.vue'
import pageTable from '@/views/main/system/department/c-cpns/page-table.vue'
</script>
<style scoped>
.department {
}
</style>

<template>
  <div class="department">
    <!-- <h2>department</h2> -->
    <page-search @resetQuery="resetQuery" @search="search"></page-search>
    <page-table ref="pagetableref"></page-table>
  </div>
</template>

<script setup lang="ts" name="department">
import { ref } from 'vue'
import pageSearch from '@/views/main/system/department/c-cpns/page-search.vue'
import pageTable from '@/views/main/system/department/c-cpns/page-table.vue'
import userList from '@/store/main/system/user'
const getDepartmentData = userList()
const pagetableref = ref<InstanceType<typeof pageTable>>()
function resetQuery() {
  pagetableref.value?.handleResetClick()
}
function search(value) {
  pagetableref.value?.handleResetClick(value)
}
</script>
<style scoped>
.department {
}
</style>

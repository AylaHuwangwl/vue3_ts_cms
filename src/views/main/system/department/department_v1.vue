<template>
  <div class="department">
    <!-- <h2>department</h2> -->
    <page-search @resetQuery="resetQuery" @search="search"></page-search>
    <page-table ref="pagetableref" @addDepartmentclick="addDepartmentclick" @edit-departmentclick="editDepartmentclick"></page-table>
    <page-modal ref="pagemodalref"></page-modal>
  </div>
</template>

<script setup lang="ts" name="department">
import { ref } from 'vue'
import pageSearch from '@/views/main/system/department/c-cpns/page-search.vue'
import pageTable from '@/views/main/system/department/c-cpns/page-table.vue'
import pageModal from '@/views/main/system/department/c-cpns/page-modal.vue'
import userList from '@/store/main/system/user'
const getDepartmentData = userList()
const pagetableref = ref<InstanceType<typeof pageTable>>()
const pagemodalref = ref<InstanceType<typeof pageModal>>()
function resetQuery() {
  pagetableref.value?.handleResetClick()
}
function search(value) {
  pagetableref.value?.handleResetClick(value)
}
function addDepartmentclick() {
  pagemodalref.value?.setDiologshow(true)
}
function editDepartmentclick(itemdata) {
  pagemodalref.value?.setDiologshow(false, itemdata)
}
</script>
<style scoped>
.department {
}
</style>

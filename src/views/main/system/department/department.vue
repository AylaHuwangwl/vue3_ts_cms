<template>
  <div class="custom-department">
    <!-- <h2>department</h2> -->
    <!-- <page-search @resetQuery="resetQuery" @search="search"></page-search> -->
    <page-search
      :searchConfig="searchConfig"
      @resetQuery="resetQuery"
      @search="search"
    ></page-search>
    <page-content
      :contentConfig="contentConfig"
      ref="pagetableref"
      @addDepartmentclick="addDepartmentclick"
      @edit-departmentclick="editDepartmentclick"
    >
      <template #createAt="scope"
        ><span style="color: red">自己加：{{ scope.row.name }}</span></template
      >
      <template #updateAt="scope">测试插槽：{{ scope.row.name }}</template>
    </page-content>
    <page-modal :modalConfig="modalconfigref" ref="pagemodalref"></page-modal>
  </div>
</template>

<script setup lang="ts" name="department">
// import { ref } from 'vue'
// 导入子组件
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import { computed } from 'vue'
// 导入配置文件
import searchConfig from '@/views/main/system/department/config/search.config'
import contentConfig from './config/content.config'
import modalConfig from '@/views/main/system/department/config/modal.config'

import getRoleAndDepartment from '@/store/main/main'
// 导入抽取的公共代码
import usePageContent from '@/hooks/usepageContent'
import usePagemodal from '@/hooks/usepagemodal'
// 将select的options数组加到配置中
const modalconfigref = computed(() => {
  const getDepartmentData = getRoleAndDepartment()
  const departmentList = getDepartmentData.departmentList
  const departList: any[] = []
  for (let item of departmentList) {
    departList.push({ label: item.name, value: item.id })
  }
  for (let item of modalConfig.formItems) {
    if (item.prop === 'parentId') {
      item.options = departList as []
    }
  }
  return modalConfig
})
// 引用公共代码
const { pagetableref, resetQuery, search } = usePageContent()
const { pagemodalref, addDepartmentclick, editDepartmentclick } = usePagemodal()
</script>
<style scoped>
/* .custom-department {
} */
</style>

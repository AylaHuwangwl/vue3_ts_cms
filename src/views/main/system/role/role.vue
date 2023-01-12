<template>
  <div class="role">
    <pageSearch :search-config="searchConfig"></pageSearch>
    <pageContent :content-config="contentConfig" ref="pagetableref" @add-departmentclick="addDepartmentclick" @edit-departmentclick="editDepartmentclick"></pageContent>
    <pageModal :modal-config="modalConfig" ref="pagemodalref"></pageModal>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'

import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'

import pageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'

// 导入抽取的公共代码
import usePageContent from '@/hooks/usepageContent'
import usePagemodal from '@/hooks/usepagemodal'
// 引用公共代码
const { pagetableref, resetQuery, search } = usePageContent()
const { pagemodalref, addDepartmentclick, editDepartmentclick } = usePagemodal()
</script>

<style lang="less" scoped>
.role {
}
</style>

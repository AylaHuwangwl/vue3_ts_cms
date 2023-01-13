<template>
  <div class="category">
    <pageSearch :search-config="searchConfig" @reset-query="resetQuery" @search="search"></pageSearch>
    <pageContent :content-config="contentConfig" ref="pagetableref" @add-departmentclick="addDepartmentclick" @edit-departmentclick="editDepartmentclick"></pageContent>
    <pageModal :modal-config="modalConfig" ref="pagemodalref"></pageModal>
  </div>
</template>

<script setup lang="ts" name="category">
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
import pageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from './config/search.config'
import pageSearch from '@/components/page-search/page-search.vue'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usepageContent'
import usePageModal from '@/hooks/usepagemodal'
const { pagetableref, resetQuery, search } = usePageContent()
const { pagemodalref, addDepartmentclick, editDepartmentclick } = usePageModal()
</script>
<style scoped>
.category {
}
</style>

<template>
  <div class="menu">
    <page-content :contentConfig="contentConfig"> </page-content>
  </div>
</template>

<script setup lang="ts" name="menu">
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
// import usePageContent from '@/hooks/usepageContent';
// const {pagetableref,resetQuery,search} = usePageContent()
</script>
<style scoped>
.menu {
}
</style>

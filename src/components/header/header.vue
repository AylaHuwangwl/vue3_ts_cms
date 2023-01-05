<template>
  <div class="header">
    <!-- <h2>header</h2> -->
    <div class="menu-icon" @click="handleFoldClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <header-crumb></header-crumb>
      <header-info></header-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import HeaderInfo from './c-cpns/header-info.vue'
import HeaderCrumb from './c-cpns/haeder-crumb.vue'

// 子传父组件
const emit = defineEmits(['foldValue'])

const isFold = ref(false)
function handleFoldClick() {
  isFold.value = !isFold.value
  emit('foldValue', isFold.value)
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: white;
  border-bottom: rgba(0, 0, 0, 0.06);
  .menu-icon {
    flex: 0 0 20px;
    margin-left: 5px;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>

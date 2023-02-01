<template>
  <div class="role">
    <pageSearch :search-config="searchConfig"></pageSearch>
    <pageContent
      :content-config="contentConfig"
      ref="pagetableref"
      @add-departmentclick="addDepartmentclick"
      @edit-departmentclick="editDepartmentclick"
    ></pageContent>
    <pageModal
      :modal-config="modalConfig"
      ref="pagemodalref"
      :menuList="menuList1"
    >
      <template #menulist>
        <!-- <span>我是具名插槽</span> -->
        <el-tree
          ref="treeRef"
          :data="menuallList"
          show-checkbox
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'name' }"
          @check="checkoutmenu"
        />
      </template>
    </pageModal>
  </div>
</template>

<script setup lang="ts">
import getRoleAndDepartment from '@/store/main/main'

import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'

import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'

import pageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'

// 导入抽取的公共代码
import usePageContent from '@/hooks/usepageContent'
import usePagemodal from '@/hooks/usepagemodal'
import { storeToRefs } from 'pinia'

import { ref, nextTick } from 'vue'
import { mapMenuToId } from '@/utils/map-router'

import type { ElTree } from 'element-plus'

// 引用公共代码
const treeRef = ref<InstanceType<typeof ElTree>>()
// 点击新建时重置
function newcallback() {
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}
function editcallback(item: any) {
  nextTick(() => {
    const menuList = mapMenuToId(item.menuList)
    treeRef.value?.setCheckedKeys(menuList)
  })
}
const { pagetableref, resetQuery, search } = usePageContent()
const { pagemodalref, addDepartmentclick, editDepartmentclick } = usePagemodal(
  newcallback,
  editcallback
)

const getMenuList = getRoleAndDepartment()
getMenuList.fetchRoleAndDepartment()
const { menuallList } = storeToRefs(getMenuList)

const menuList1 = ref({})
function checkoutmenu(value1: any, value2: any) {
  const menuList = [...value2.checkedKeys, ...value2.halfCheckedKeys]
  menuList1.value = { menuList }
}
</script>

<style lang="less" scoped>
.role {
}
</style>

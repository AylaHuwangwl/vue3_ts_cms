<template>
  <div class="goods">
    <!-- <h2>信息</h2> -->
    <page-search :search-config="searchConfig" @reset-query="resetQuery" @search="search"></page-search>
    <page-content :content-config="contentConfig" ref="pagetableref" @add-departmentclick="addDepartmentclick" @edit-departmentclick="editDepartmentclick">
      <template #goodsname="scope">
        <el-tooltip class="box-item" effect="dark" :content='scope.row.name' placement="top-start">
          <span class="goodsnamestyle">{{ scope.row.name }}</span>
        </el-tooltip>
      </template>
      <template #status="scope">
        <el-button size="small" :type="scope.row.status ? 'primary' : 'danger'" plain>{{ scope.row.status ? '启用' : '禁用' }}</el-button>
      </template>
      <template #imgurl="scope">
        <img :src="scope.row.imgUrl" class="imgurl">
      </template>
    </page-content>
    <page-modal :modal-config="modalConfig" ref="pagemodalref">
      <template #imgUrl>
        <el-form-item label="商品图片">
          <el-upload class="avatar-uploader" action='' :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts" name="goods">
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import pageSearch from '@/components/page-search/page-search.vue'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import searchConfig from './config/search.config'
import usePageContent from '@/hooks/usepageContent'
import usePageModal from '@/hooks/usepagemodal'
import { ref } from '@vue/reactivity'
import { nextTick } from '@vue/runtime-core'
const { pagetableref, resetQuery, search } = usePageContent()
const { pagemodalref, addDepartmentclick, editDepartmentclick } = usePageModal()
//
// function editcallback(item) {
//   nextTick(() => {
//     for (let ele of modalConfig.formItems) {
//       if (ele.type == 'input-number') {
//         // item[ele.prop] =
//         // console.log(typeof item[ele.prop], ele)
//         if (typeof item[ele.prop] == 'string') {
//           console.log(typeof ele.prop)
//           item[ele.prop] = Number(item[ele.prop])
//           console.log(typeof ele.prop)
//         }
//       }
//     }
//   })
// }
const imageUrl = ref('')
</script>
<style scoped lang="less">
.goodsnamestyle {
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
.imgurl {
  width: 80px;
  height: 80px;
}
.avatar-uploader .el-upload {
  border: 1px dashed solid;
  border-radius: 6px;
}

.avatar-uploader .el-upload:hover {
  border-color: black;
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>

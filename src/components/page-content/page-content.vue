<template>
  <div class="table">
    <div class="tabletitle">
      <h2>{{ contentConfig.header.title }}</h2>
      <el-button type="primary" @click="adddepartmentaction" v-if="isCreate">{{
        props.contentConfig.header.btntitle
      }}</el-button>
    </div>
    <div class="usertablelist">
      <el-table
        align="center"
        ref="multipleTableRef"
        :data="pageList"
        style="width: 100%"
        v-bind="contentConfig?.children"
      >
        <!-- @selection-change="handleSelectionChange" -->
        <template
          v-for="item in props.contentConfig.tableConfig"
          :key="item.prop"
        >
          <el-table-column
            v-if="item.type === 'timer'"
            align="center"
            :label="item.label"
            :prop="item.prop"
          >
            <template #default="scope">
              {{ formatTime(scope.row[item.prop]) }}
            </template>
          </el-table-column>
          <el-table-column v-else-if="item.type === 'custom'" v-bind="item">
            <template #default="scope">
              <slot :name="item.slotName" v-bind="scope"></slot>
            </template>
          </el-table-column>
          <el-table-column
            v-else
            align="center"
            v-bind="item"
          ></el-table-column>
        </template>
        <el-table-column
          align="center"
          label="操作"
          width="180px"
          fixed="right"
        >
          <template #default="scope">
            <el-button
              link
              type="primary"
              :icon="EditPen"
              @click="editDepartment(scope.row)"
              v-if="isUpdate"
              >编辑</el-button
            >
            <el-button
              link
              type="danger"
              :icon="Delete"
              @click="deleteDepartment(scope.row.id)"
              v-if="isDelete"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页器 -->
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50]"
        layout="sizes, prev, pager, next, jumper,total"
        :total="pagetTotalNum"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditPen, Delete } from '@element-plus/icons-vue'
import userList from '@/store/main/system/user'
import { storeToRefs } from 'pinia'
import { formatTime } from '@/utils/formattime'
import { computed, ref } from 'vue'
import usePermission from '@/hooks/usePermission'
// 获取接口数据
const geuserTableList = userList()
geuserTableList.$onAction((arg) => {
  arg.after(() => {
    if (
      arg.name === 'editPageItem' ||
      arg.name === 'deletePageItem' ||
      arg.name === 'addPageItem'
    ) {
      currentPage.value = 1
      pageSize.value = 10
    }
  })

  // }
  // afters(() => {
  //
  // })
})
// geuserTableList.getUserList({ offset: 0, size: 10 })
// // 第一次取不到值，因为getUserList是异步操作，用storeToRefs
// const { userlist, totalNum } = storeToRefs(geuserTableList)
const currentPage = ref(1)
const pageSize = ref(10)
const emit = defineEmits(['addDepartmentclick', 'editDepartmentclick'])
interface Iprops {
  contentConfig: {
    header: {
      title: string
      btntitle: string
    }
    pagename: string
    tableConfig: any[]
    children?: {}
  }
}
const props = defineProps<Iprops>()
const isUpdate = usePermission(`${props.contentConfig.pagename}:update`)
const isQuery = usePermission(`${props.contentConfig.pagename}:query`)
const isDelete = usePermission(`${props.contentConfig.pagename}:delete`)
const isCreate = usePermission(`${props.contentConfig.pagename}:create`)
function fetchData(queryInfo: any = {}) {
  // console.log(isQuery);

  // if(!isQuery) return
  const pageData = {
    offset: (currentPage.value - 1) * pageSize.value,
    size: pageSize.value,
    ...queryInfo
  }
  geuserTableList.getPageListData(props.contentConfig.pagename, pageData)
}
fetchData()
function handleSizeChange() {
  fetchData()
}
function handleCurrentChange() {
  fetchData()
}
// 重置
function handleResetClick(item: any = {}) {
  currentPage.value = 1
  pageSize.value = 10
  fetchData(item)
}
const { pageList, pagetTotalNum } = storeToRefs(geuserTableList)
// 删除用户
function deleteDepartment(id: any) {
  geuserTableList.deletePageItem(props.contentConfig.pagename, id)
}
//新建用户
function adddepartmentaction() {
  emit('addDepartmentclick')
}
// 编辑用户
function editDepartment(itemdata: any) {
  emit('editDepartmentclick', itemdata)
}
// 暴露函数
defineExpose({
  fetchData,
  handleResetClick,
  adddepartmentaction,
  editDepartment
})
</script>

<style lang="less" scoped>
.table {
  background-color: white;
  margin-top: 20px;
  .tabletitle {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px 5px;
    .el-button {
      margin: 10px;
      margin-bottom: 0px;
    }
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
}
</style>

<template>
  <div class="table">
    <div class="tabletitle">
      <h2>用户列表</h2>
      <el-button type="primary" @click="adduseraction" v-if="isCreate">新建用户</el-button>
    </div>
    <div class="usertablelist">
      <el-table align="center" ref="multipleTableRef" :data="userlist" style="width: 100%" v-if="isQuery">
        <!-- @selection-change="handleSelectionChange" -->
        <el-table-column align="center" type="selection" width="55" />
        <el-table-column align="center" label="序号" type="index" width="60" />
        <el-table-column align="center" property="name" label="用户名" width="120" />
        <el-table-column align="center" property="realname" label="真实姓名" width="100" />
        <el-table-column align="center" property="cellphone" label="手机号码" width="140" />
        <el-table-column align="center" property="enable" label="状态" width="60">
          <template #default="scope">
            <el-button size="small" :type="scope.row.enable ? 'primary' : 'danger'" plain>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" property="createAt" label="创建时间">
          <template #default="scope">
            {{ formatTime(scope.row.createAt) }}</template>
        </el-table-column>
        <el-table-column align="center" property="updateAt" label="更新时间">
          <template #default="scope">
            {{ formatTime(scope.row.updateAt) }}</template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="180px">
          <template #default="scope">
            <el-button link type="primary" :icon="EditPen" @click="editUser(scope.row)" v-if="isUpdate">编辑</el-button>
            <el-button link type="danger" :icon="Delete" @click="deleteUser(scope.row.id)" v-if="isDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页器 -->
    <div class="pagination">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 50]" layout="sizes, prev, pager, next, jumper,total" :total="totalNum" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditPen, Delete } from '@element-plus/icons-vue'
import userList from '@/store/main/system/user'
import { storeToRefs } from 'pinia'
import { formatTime } from '@/utils/formattime'
import { computed, ref } from 'vue'
import  usePermission from '@/hooks/usePermission'
const isCreate = usePermission('users:create')
const isQuery = usePermission('users:query')
const isDelete = usePermission('users:delete')
const isUpdate = usePermission('users:update')
// 获取接口数据
const geuserTableList = userList()
// geuserTableList.getUserList({ offset: 0, size: 10 })
// // 第一次取不到值，因为getUserList是异步操作，用storeToRefs
// const { userlist, totalNum } = storeToRefs(geuserTableList)
const currentPage = ref(1)
const pageSize = ref(10)
const emit = defineEmits(['adduserclick', 'edituserclick'])
function fetchData(queryInfo: any = {}) {
  const pageData = {
    offset: (currentPage.value - 1) * pageSize.value,
    size: pageSize.value,
    ...queryInfo
  }
  geuserTableList.getUserList(pageData)
}
fetchData()
function handleSizeChange() {
  fetchData()
}
function handleCurrentChange() {
  fetchData()
}
function handleResetClick() {
  currentPage.value = 1
  pageSize.value = 10
  fetchData()
}
const { userlist, totalNum } = storeToRefs(geuserTableList)

// 删除用户
function deleteUser(id: any) {
  geuserTableList.deleteUser(id)
}

//新建用户
function adduseraction() {
  emit('adduserclick')
}
function editUser(itemdata: any) {
  emit('edituserclick', itemdata)
}
// 暴露函数
defineExpose({
  fetchData,
  handleResetClick,
  adduseraction,
  editUser
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

<template>
  <div class="usermodal">
    <el-dialog v-model="dialogVisible" :title="isNewValue?'新建用户':'编辑用户'" width="30%">
      <el-form label-position="right" label-width="80px" :rules="rule" ref="adduserform" :model="modalform">
        <el-form-item label="部门名称" prop="name">
          <el-input placeholder="请输入部门名称" v-model="modalform.name"></el-input>
        </el-form-item>
        <el-form-item label="上级部门">
          <el-select v-model="modalform.parentId" style="width: 100%;" placeholder="请选择上级部门">
            <el-option v-for="item in departmentList" :value="item.id" :key="item.id" :label="item.name">
              {{ item.name }}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="领导名称" prop="leader">
          <el-input placeholder="请输入领导名称" v-model="modalform.leader"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addusersubmit"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { FormRules, ElForm } from 'element-plus'
import { reactive, ref } from '@vue/reactivity'
import getRoleAndDepartment from '@/store/main/main'
import userList from '@/store/main/system/user'
import { storeToRefs } from 'pinia'
const modalform = reactive({
  name: undefined,
  parentId: undefined,
  leader: undefined
})
const addUserAction = userList()
const roleAndDepartment = getRoleAndDepartment()
roleAndDepartment.fetchRoleAndDepartment()
const { roleList, departmentList } = storeToRefs(roleAndDepartment)

const rule: FormRules = {
  name: [
    {
      required: true,
      message: '请输入部门名称',
      trigger: 'change'
    }
  ],
  leader: [
    {
      required: true,
      message: '请输入领导名称',
      trigger: 'change'
    }
  ]
}
const dialogVisible = ref(false)
const isNewValue = ref(true)
let editUseriD = ref(0)
function setDiologshow(isNew: boolean = true, itemdata?: any) {
  dialogVisible.value = true
  if (!isNew) {
    editUseriD.value = itemdata.id
    for (let key in modalform) {
      modalform[key] = itemdata[key]
    }
  } else {
    for (let key in modalform) {
      modalform[key] = undefined
    }
  }
  isNewValue.value = isNew
}
// 确定按钮
const adduserform = ref<InstanceType<typeof ElForm>>()
function addusersubmit() {
  adduserform.value?.validate((valid) => {
    if (valid) {
      if (isNewValue.value) {
        addUserAction.addPageItem('department', modalform)
      } else {
        addUserAction.editPageItem('department', editUseriD.value, modalform)
      }
      dialogVisible.value = false
    }
  })
}
defineExpose({
  setDiologshow
})
</script>

<style lang="less" scoped>
.usermodal {
}
</style>

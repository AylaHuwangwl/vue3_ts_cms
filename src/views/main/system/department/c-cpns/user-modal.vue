<template>
  <div class="usermodal">
    <el-dialog v-model="dialogVisible" :title="isNewValue?'新建用户':'编辑用户'" width="30%">
      <el-form label-position="right" label-width="80px" :rules="rule" ref="adduserform" :model="modalform">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" v-model="modalform.name"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input placeholder="请输入真实姓名" v-model="modalform.realname"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" v-if="isNewValue">
          <el-input placeholder="请输入用户密码" v-model="modalform.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input placeholder="请输入电话号码" v-model="modalform.cellphone"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-select v-model="modalform.departmentId" style="width: 100%;" placeholder="请选择部门">
            <el-option v-for="item in departmentList" :value="item.id" :key="item.id" :label="item.name">
              {{ item.name }}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="modalform.roleId" style="width: 100%;" placeholder="请选择角色">
            <el-option v-for="item in roleList" :value="item.id" :label="item.name">
              {{ item.name }}
            </el-option>
          </el-select>
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
import userList from '@/store/main/user/user'
import { storeToRefs } from 'pinia'
const modalform = reactive({
  name: undefined,
  realname: undefined,
  password: undefined,
  cellphone: undefined,
  departmentId: undefined,
  roleId: undefined
})
const addUserAction = userList()
const roleAndDepartment = getRoleAndDepartment()
roleAndDepartment.fetchRoleAndDepartment()
const { roleList, departmentList } = storeToRefs(roleAndDepartment)

const rule: FormRules = {
  realname: [
    {
      required: true,
      message: '请输入真实姓名',
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
        addUserAction.addUser(modalform)
      } else {
        addUserAction.editUser(editUseriD.value)
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

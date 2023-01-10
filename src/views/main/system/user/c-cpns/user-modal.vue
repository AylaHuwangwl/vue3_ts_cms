<template>
  <div class="usermodal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%">
      <el-form label-position="right" label-width="80px" :rules="rule">
        <el-form-item label="用户名">
          <el-input
            placeholder="请输入用户名"
            v-model="modalform.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input
            placeholder="请输入真实姓名"
            v-model="modalform.realname"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
          <el-input
            placeholder="请输入用户密码"
            v-model="modalform.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input
            placeholder="请输入电话号码"
            v-model="modalform.cellphone"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-input
            placeholder="请选择部门"
            v-model="modalform.departmentId"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-input
            placeholder="请选择角色"
            v-model="modalform.roleId"
          ></el-input>
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
import { storeToRefs } from 'pinia'
const modalform = reactive({
  name: undefined,
  realname: undefined,
  password: undefined,
  cellphone: undefined,
  departmentId: undefined,
  roleId: undefined
})
const roleAndDepartment = getRoleAndDepartment()
const { roleList, departmentList } = storeToRefs(roleAndDepartment)
// console.log(roleList)

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
function setDiologshow() {
  dialogVisible.value = true
}
function addusersubmit() {}
defineExpose({
  setDiologshow
})
</script>

<style lang="less" scoped>
.usermodal {
}
</style>

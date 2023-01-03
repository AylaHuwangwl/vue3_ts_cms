<template>
  <div class="account">
    <el-form label-width="60px" size="large" :model="account" :rules="accountrules" status-icon ref="elformValidate">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password" placeholder="请输入密码" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { IAccount } from '@/types/login_types'
// import type是用来协助类型检查的
import type { FormRules, ElForm } from 'element-plus'
import { localCache } from '@/utils/cache'
import userLoginStore from '@/store/login/login'
// 定义两个常量
const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'passsword'
const account = reactive<IAccount>({
  name: localCache.getCache(CACHE_NAME) ?? undefined,
  password: localCache.getCache(CACHE_PASSWORD) ?? undefined
})
const accountrules: FormRules = {
  name: [
    {
      required: true,
      message: '请输入帐号',
      trigger: 'change'
    },
    {
      pattern: /^[a-z,0-9]{6,20}$/,
      message: '请输入6-20位数字或字母',
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change'
    },
    {
      pattern: /^[a-z,0-9]{6,20}$/,
      message: '请输入6-20位数字或字母',
      trigger: 'change'
    }
  ]
}
const elformValidate = ref<InstanceType<typeof ElForm>>()
function loginAction(isRemPwd: Boolean) {
  // console.log(account)
  elformValidate.value?.validate((valid) => {
    if (valid) {
      // console.log('验证成功')
      const name = account.name
      const password = account.password
      userLoginStore()
        .loginAccountActions({ name, password })
        .then((res) => {
          if (isRemPwd) {
            localCache.setCache(CACHE_NAME, name)
            localCache.setCache(CACHE_PASSWORD, password)
          } else {
            localCache.removeCache(CACHE_NAME)
            localCache.removeCache(CACHE_PASSWORD)
          }
        })
    } else {
      ElMessage.warning('请输入正确的格式后再操作')
    }
  })
}
defineExpose({
  // 将要暴露给子组件的方和变量放在这里
  loginAction
})
</script>

<style lang="less" scoped>
.account {
}
</style>

<template>
  <div class="login-panel">
    <!-- <h2>login-panel</h2> -->
    <!-- <h1 class="title">Ayla后台管理系统</h1> -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeLoginType">
        <el-tab-pane name="account">
          <template #label>
            <span class="label">
              <el-icon>
                <UserFilled />
              </el-icon>
              <span class="text">账号登陆</span>
            </span>
          </template>
          <LoginAccount ref="accountref" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span class="label">
              <el-icon>
                <Iphone />
              </el-icon>
              <span class="text">账号登陆</span>
            </span>
          </template>
          <LoginPhone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="control-account">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" size="large" @click="loginAction">立即登录</el-button>
  </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue'
import LoginPhone from './loginPhone.vue'
import LoginAccount from './loginAccount.vue'
import router from '@/router/index'
import { localCache } from '@/utils/cache'
const activeLoginType = ref('account')
const accountref = ref<InstanceType<typeof LoginAccount>>()
const isRemPwd = ref(JSON.parse(localStorage.getItem('rem_pwd')) ?? false)
watch(isRemPwd, (newValue) => {
  localStorage.setItem('rem_pwd', JSON.stringify(newValue))
  // console.log(typeof JSON.parse(localStorage.getItem('rem_pwd') ?? ''))
})
function loginAction() {
  if (activeLoginType.value == 'account') {
    accountref.value?.loginAction(isRemPwd.value)
    router.push('/main')
    // console.log(router.push('/main'))
  } else {
    console.log('手机号登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;
  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      margin-left: 5px;
    }
  }
  .control-account {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
    // 可以通过css变量进行调整样式
    // --el-button-size: 50px;
  }
}
</style>

<template>
  <div class="phone">
    <el-form label-width="60px">
      <el-form-item label="手机号">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="verity-code">
          <el-input />
          <el-button type="primary" class="btn_code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.verity-code {
  display: flex;
  .btn_code {
    margin-left: 8px;
  }
}
</style>

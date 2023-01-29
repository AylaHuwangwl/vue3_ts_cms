<template>
  <div class="user-search">
    <el-form label-width="80px" size="large" :model="searchform" ref="search_form">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input placeholder="请输入用户状态" v-model="searchform.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input placeholder="请输入真实姓名" v-model="searchform.realname"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码" prop="phone">
            <el-input placeholder="请输入电话号码" v-model="searchform.cellphone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户状态" prop="userstatus">
            <el-select placeholder="请输入用户名" style="width: 100%" v-model="searchform.enable">
              <el-option label="启用" :value="1"></el-option>
              <el-option label="禁用" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createTime">
            <el-date-picker v-model="searchform.createAt" type="daterange" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间" size="large" />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="button">
        <el-button size="default" :icon="Refresh" @click="clearSearchSelect(search_form)">重置</el-button>
        <el-button type="primary" size="default" :icon="Search" @click="search">搜索</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { Search, Refresh } from '@element-plus/icons-vue'
import { reactive, ref } from '@vue/reactivity'

import type { FormInstance, ElForm } from 'element-plus'
const search_form = ref<InstanceType<typeof ElForm>>()
const searchform = reactive({
  name: undefined,
  realname: undefined,
  cellphone: undefined,
  enable: undefined,
  createAt: undefined
})
const emit = defineEmits(['resetQuery', 'search'])
function clearSearchSelect(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.resetFields()
  emit('resetQuery')
}
function search() {
  emit('search', searchform)
}
</script>

<style lang="less" scoped>
.user-search {
  background-color: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  .el-form-item {
    padding: 20px;
    margin-bottom: 0px;
  }
  .button {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
  }
}
</style>

<template>
  <div class="user-search">
    <!-- <h2>user-search</h2> -->
    <el-form label-width="80px" size="large">
      <el-row :gutter="20">
        <!-- <el-col :span="8">
          <el-form-item label="id">
            <el-input placeholder="请输入ID"></el-input>
          </el-form-item>
        </el-col> -->
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-select placeholder="请输入用户名" style="width:100%">
              <el-option label="启用" :value="1"></el-option>
              <el-option label="禁用" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名">
            <el-input placeholder="请输入真实姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码">
            <el-input placeholder="请输入电话号码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户状态">
            <el-input placeholder="请输入用户状态"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间">
            <el-date-picker type="daterange" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间" size="default" />
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script setup lang="ts">
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
}
</style>

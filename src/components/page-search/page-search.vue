<template>
  <div class="user-search">
    <el-form label-width="80px" size="large" :model="searchform" ref="search_form">
      <el-row :gutter="20">
        <template v-for="item in props.searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template v-if="item.type== 'input'">
                <el-input :placeholder="item.placeholder" v-model="searchform[item.prop]"></el-input>
              </template>
              <template v-if="item.type== 'date-picker'">
                <el-date-picker v-model="searchform[item.prop]" type="daterange" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间" size="large" />
              </template>
            </el-form-item>
          </el-col>
        </template>

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

const emit = defineEmits(['resetQuery', 'search'])
interface IProps {
  searchConfig: {
    formItems: any[]
  }
}
const props = defineProps<IProps>()

const initialForm: any = {}
for (let item of props.searchConfig.formItems) {
  initialForm[item.prop] = item.initialForm ?? undefined
}
const searchform = reactive(initialForm)
function clearSearchSelect(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.resetFields()
  for (let item in searchform) {
    searchform[item] = undefined
  }
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

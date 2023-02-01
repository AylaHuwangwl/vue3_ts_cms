<template>
  <div class="chart-vue">
    <!-- <h2>chart-vue</h2> -->
    <el-card class="box-card" :header="header">
      <div class="echartstyle">
        <slot>卡片默认内容</slot>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  header?: string
}
//设置默认值
withDefaults(defineProps<IProps>(), {
  header: '图形标题文本'
})
</script>

<style lang="less" scoped>
.chart-vue {
  margin: 15px 0;
  .echartstyle {
    justify-content: center;
  }
}
</style>

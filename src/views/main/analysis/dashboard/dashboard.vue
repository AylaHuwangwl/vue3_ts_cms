<template>
  <div class="dashboard">
    <!-- <h2>dashboard</h2> -->
    <el-row :gutter="10" style="width: 100%;">
      <el-col v-for="item in amountData" :span="6">
        <count-cards v-bind="item"></count-cards>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="width: 100%;">
      <el-col :span="8">
        <!-- <count-cards v-bind="item"></count-cards> -->
        <pie-echart></pie-echart>
      </el-col>
      <el-col :span="8" >
        <!-- <count-cards v-bind="item"></count-cards> -->
      </el-col>
      <el-col :span="8">
        <rose-echart></rose-echart>
        <!-- <count-cards v-bind="item"></count-cards> -->
      </el-col>
    </el-row>
    <el-row :gutter="10" style="width: 100%;">
      <el-col :span="12">
        <line-echart></line-echart>
        <!-- <count-cards v-bind="item"></count-cards> -->
      </el-col>
      <el-col :span="12">
        <!-- <count-cards v-bind="item"></count-cards> -->
        <bar-echart></bar-echart>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import countCards from './c-cpns/count-cards.vue'

import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'

import pieEchart from '@/components/page-echart/src/pie-echart.vue'
import roseEchart from '@/components/page-echart/src/rose-echart.vue'
import lineEchart from '@/components/page-echart/src/line-echart.vue'
import barEchart from '@/components/page-echart/src/bar-echart.vue'
const analysisstore = useAnalysisStore()
analysisstore.fetchAnalysisDataAction()
const { amountData } = storeToRefs(analysisstore)
</script>

<style lang="less" scoped>
.dashboard {
}
</style>

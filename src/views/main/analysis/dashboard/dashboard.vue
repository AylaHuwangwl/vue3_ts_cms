<template>
  <div class="dashboard">
    <!-- <h2>dashboard</h2> -->
    <el-row :gutter="10">
      <el-col v-for="item in amountData" :span="6">
        <count-cards v-bind="item"></count-cards>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import countCards from './c-cpns/count-cards.vue';

import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'
const analysisstore = useAnalysisStore()
analysisstore.fetchAnalysisDataAction()
const { amountData } = storeToRefs(analysisstore)
</script>

<style lang="less" scoped>
.dashboard {
}
</style>

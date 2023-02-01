<template>
  <div class="dashboard">
    <!-- <h2>dashboard</h2> -->
    <el-row :gutter="10" style="width: 100%">
      <el-col v-for="item in amountData" :span="6">
        <count-cards v-bind="item"></count-cards>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="width: 100%">
      <el-col :span="8">
        <chart-card header="分类商品数量(饼图)">
          <pie-echart :pie-data="showGoodsCategoryCount"></pie-echart>
        </chart-card>
        <!-- <count-cards v-bind="item"></count-cards> -->
      </el-col>
      <el-col :span="8">
        <chart-card header="分类商品数量(地图)">
          <map-echart :map-data="showGoodsAddressSale"></map-echart>
        </chart-card>
        <!-- <count-cards v-bind="item"></count-cards> -->
      </el-col>
      <el-col :span="8">
        <chart-card header="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="showGoodsCategoryCount"></rose-echart>
        </chart-card>
        <!-- <count-cards v-bind="item"></count-cards> -->
      </el-col>
    </el-row>
    <el-row :gutter="10" style="width: 100%">
      <el-col :span="12">
        <chart-card>
          <line-echart
            :labels="showgoodsCategorySale.labels"
            :values="showgoodsCategorySale.values"
          >
          </line-echart>
        </chart-card>

        <!-- <count-cards v-bind="item"></count-cards> -->
      </el-col>
      <el-col :span="12">
        <!-- <count-cards v-bind="item"></count-cards> -->
        <chart-card>
          <bar-echart
            :labels="showGoodsCategoryFavor.labels"
            :values="showGoodsCategoryFavor.values"
          >
          </bar-echart>
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import countCards from './c-cpns/count-cards.vue'
import chartCard from './c-cpns/chart-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'

import pieEchart from '@/components/page-echart/src/pie-echart.vue'
import roseEchart from '@/components/page-echart/src/rose-echart.vue'
import lineEchart from '@/components/page-echart/src/line-echart.vue'
import barEchart from '@/components/page-echart/src/bar-echart.vue'
import mapEchart from '@/components/page-echart/src/map-echart.vue'
const analysisstore = useAnalysisStore()
analysisstore.fetchAnalysisDataAction()
const {
  amountData,
  goodsCategoryCount,
  goodsCategoryFavor,
  goodsCategorySale,
  goodsAddressSale
} = storeToRefs(analysisstore)
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
})
const showgoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item) => item.name)
  const values = goodsCategorySale.value.map((item) => item.goodsCount)
  return { labels, values }
})

const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})

const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style lang="less" scoped>
.dashboard {
}
</style>

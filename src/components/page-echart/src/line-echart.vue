<template>
  <div class="line-echart">
    <!-- <h2>pie-echart</h2> -->
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import baseEchart from './base-echart.vue'
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueData } from '../type'
const props = defineProps<{
  labels: string[]
  values: IEchartValueData[]
}>()
const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.labels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '分类销量统计',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.pie-echart {
}
</style>

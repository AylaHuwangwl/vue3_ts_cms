<template>
  <div class="base-echart">
    <div ref="echartRef" style="width: 100%; height: 350px"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import type { EChartsOption } from 'echarts'
import ChinaJSON from '../data/china.json'
echarts.registerMap('china', ChinaJSON as any)
const echartRef = ref<HTMLElement>()
interface Iprops {
  option: EChartsOption
}
const props = defineProps<Iprops>()
onMounted(() => {
  const echartInstance = echarts.init(echartRef.value!, 'light', {
    renderer: 'canvas'
  })
  echartInstance.setOption(props.option)
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style lang="less" scoped>
.base-echart {
}
</style>

import { defineStore } from 'pinia'
import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getGoodsAddressSale
} from '@/service/main/analysis'
interface IAnalysisState {
  amountData: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsAddressSale: any[]
}
const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountData: [],
    goodsCategoryCount: [],
    goodsCategorySale: [],
    goodsCategoryFavor: [],
    goodsAddressSale: []
  }),
  actions: {
    fetchAnalysisDataAction() {
      getAmountList().then((res) => {
        this.amountData = res.data
      })
      getCategoryGoodsCount().then((res) => {
        this.goodsCategoryCount = res.data
      })
      getCategoryGoodsSale().then((res) => {
        this.goodsCategorySale = res.data
      })
      getCategoryGoodsFavor().then((res) => {
        this.goodsCategoryFavor = res.data
      })
      getGoodsAddressSale().then((res) => {
        this.goodsAddressSale = res.data
      })
    }
  }
})
export default useAnalysisStore

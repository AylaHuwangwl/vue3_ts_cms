import {defineStore} from 'pinia'
import {getAmountList } from '@/service/main/analysis'
interface IAnalysisState{
  amountData:any[]
}
const useAnalysisStore = defineStore('analysis',{
  state: (): IAnalysisState => ({
    amountData: []
  }),
actions:{
  fetchAnalysisDataAction(){
    getAmountList().then((res)=>{
      this.amountData = res.data
    })
  }
}
})
export default useAnalysisStore

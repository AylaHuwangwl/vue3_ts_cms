import { ref } from 'vue'
import type pageContent from '@/components/page-content/page-content.vue'
function usePageContent() {
  const pagetableref = ref<InstanceType<typeof pageContent>>()
  const resetQuery = () => {
    pagetableref.value?.handleResetClick()
  }
  const search = (value: any) => {
    pagetableref.value?.handleResetClick(value)
  }
  return { pagetableref, resetQuery, search }
}
export default usePageContent

import { ref } from 'vue'
import type pageModal from '@/components/page-modal/page-modal.vue'
type editCallBack = (item: any) => void
type newCallBack = () => void
function usePageModal(newcallback?:newCallBack,editcallback?: editCallBack) {
  const pagemodalref = ref<InstanceType<typeof pageModal>>()
  function addDepartmentclick() {
    pagemodalref.value?.setDiologshow(true)
    if(newcallback){
      newcallback()
    }
  }
  function editDepartmentclick(itemdata) {
    pagemodalref.value?.setDiologshow(false, itemdata)
    if (editcallback) {
      editcallback(itemdata)
    }
  }
  return { pagemodalref, addDepartmentclick, editDepartmentclick }
}
export default usePageModal

import { ref } from 'vue'
import type pageModal from '@/components/page-modal/page-modal.vue'
type editCallBack = (item: any) => void
function usePageModal(editcallback?: editCallBack) {
  const pagemodalref = ref<InstanceType<typeof pageModal>>()
  function addDepartmentclick() {
    pagemodalref.value?.setDiologshow(true)
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

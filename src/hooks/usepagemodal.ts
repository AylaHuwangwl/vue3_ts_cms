import { ref } from 'vue'
import type pageModal from '@/components/page-modal/page-modal.vue'
function usePageModal() {
  const pagemodalref = ref<InstanceType<typeof pageModal>>()
  function addDepartmentclick() {
    pagemodalref.value?.setDiologshow(true)
  }
  function editDepartmentclick(itemdata) {
    pagemodalref.value?.setDiologshow(false, itemdata)
  }
  return { pagemodalref, addDepartmentclick, editDepartmentclick }
}
export default usePageModal

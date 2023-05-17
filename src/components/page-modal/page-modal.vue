<template>
  <div class="usermodal">
    <el-dialog
      v-model="dialogVisible"
      :title="
        isNewValue ? props.modalConfig.headernew : props.modalConfig.headeredit
      "
      width="30%"
      center
    >
      <el-form
        label-position="right"
        label-width="80px"
        ref="adduserform"
        :model="modalform"
      >
        <template v-for="item in props.modalConfig.formItems" :key="item.label">
          <el-form-item :label="item.label" v-if="item.type == 'input'">
            <el-input
              :placeholder="item.placeholder"
              v-model="modalform[item.prop]"
            ></el-input>
          </el-form-item>
          <el-form-item :label="item.label" v-else-if="item.type == 'select'">
            <el-select
              v-model="modalform[item.prop]"
              :placeholder="item.placeholder"
              style="width: 100%"
            >
              <el-option
                v-for="ele in item.options"
                :key="ele.value"
                :value="ele.value"
                :label="ele.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            :label="item.label"
            v-else-if="item.type == 'input-number'"
          >
            <el-input-number
              v-model="modalform[item.prop]"
              :placeholder="item.placeholder"
              style="width: 100%"
            >
            </el-input-number>
          </el-form-item>
          <template v-else-if="item.type == 'custom'">
            <slot :name="item.slotName"></slot>
          </template>
        </template>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addusersubmit"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
import getRoleAndDepartment from '@/store/main/main'
import userList from '@/store/main/system/user'
import { storeToRefs } from 'pinia'
interface Iprops {
  modalConfig: {
    headernew: string
    headeredit: string
    submitText: string
    cancelText: string
    pagename: string
    formItems: any[]
  }
  menuList?: any
}
const props = defineProps<Iprops>()

const addUserAction = userList()
const roleAndDepartment = getRoleAndDepartment()
roleAndDepartment.fetchRoleAndDepartment()
// const { roleList, departmentList } = storeToRefs(roleAndDepartment)

// const rule: FormRules = {
//   name: [
//     {
//       required: true,
//       message: '请输入部门名称',
//       trigger: 'change'
//     }
//   ],
//   leader: [
//     {
//       required: true,
//       message: '请输入领导名称',
//       trigger: 'change'
//     }
//   ]
// }
const dialogVisible = ref(false)
const isNewValue = ref(true)
let editUseriD = ref(0)

const initialForm: any = {}
for (const item of props.modalConfig.formItems) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const modalform = reactive({ initialForm })

function setDiologshow(isNew: boolean = true, itemdata?: any) {
  dialogVisible.value = true
  if (!isNew) {
    editUseriD.value = itemdata.id
    for (let key in itemdata) {
      modalform[key] = itemdata[key]
    }
  } else {
    for (let key in modalform) {
      modalform[key] = undefined
    }
  }
  isNewValue.value = isNew
}
// 确定按钮
const adduserform = ref<InstanceType<typeof ElForm>>()
function addusersubmit() {
  adduserform.value?.validate((valid) => {
    if (valid) {
      if (isNewValue.value) {
        addUserAction.addPageItem(props.modalConfig.pagename, {
          ...modalform,
          ...props?.menuList
        })
      } else {
        addUserAction.editPageItem(
          props.modalConfig.pagename,
          editUseriD.value,
          { ...modalform, ...props?.menuList }
        )
      }
      dialogVisible.value = false
    }
  })
}
defineExpose({
  setDiologshow
})
</script>

<style lang="less" scoped>
.usermodal {
}
</style>

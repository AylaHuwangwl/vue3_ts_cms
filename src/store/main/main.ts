import { defineStore } from 'pinia'
import { getRole, getDepartment } from '@/service/main/main'
const getRoleAndDepartment = defineStore('getRoleAndDepartment', {
  state: () => ({
    roleList: [],
    departmentList: []
  }),
  actions: {
    fetchRoleAndDepartment() {
      this.roleList = getRole()
      this.departmentList = getDepartment()
    }
  },
})
export default getRoleAndDepartment

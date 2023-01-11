import { defineStore } from 'pinia'
import { getRole, getDepartment } from '@/service/main/main'
interface Role_department {
  roleList: any[]
  departmentList: any[]
}
const getRoleAndDepartment = defineStore('getRoleAndDepartment', {
  state: (): Role_department => ({
    roleList: [],
    departmentList: []
  }),
  actions: {
    fetchRoleAndDepartment() {
      getRole().then((res) => {
        this.roleList = res.data.list
      })
      getDepartment().then((res) => {
        this.departmentList = res.data.list
      })
    }
  }
})
export default getRoleAndDepartment

import { defineStore } from 'pinia'
import { getRole, getDepartment, getMenu } from '@/service/main/main'
interface Role_department {
  roleList: any[]
  departmentList: any[]
  menuallList: any[]
}
const getRoleAndDepartment = defineStore('getRoleAndDepartment', {
  state: (): Role_department => ({
    roleList: [],
    departmentList: [],
    menuallList: []
  }),
  actions: {
    fetchRoleAndDepartment() {
      getRole().then((res) => {
        this.roleList = res.data.list
      })
      getDepartment().then((res) => {
        this.departmentList = res.data.list
      })
      getMenu().then((res) => {
        this.menuallList = res.data.list
      })
    }
  }
})
export default getRoleAndDepartment

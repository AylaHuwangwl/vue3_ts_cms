import { defineStore } from 'pinia'
import { getUserList, deleteUser } from '@/service/main/user/user'
interface StateFormat {
  userlist: any[]
  totalNum: number
}
const userList = defineStore('userList', {
  state: (): StateFormat => ({
    userlist: [],
    totalNum: 0
  }),
  actions: {
    async getUserList(data?: {}) {
      await getUserList(data).then((res) => {
        // console.log(res)
        this.userlist = res.data.list
        this.totalNum = res.data.totalCount
      })
    },
    async deleteUser(id) {
      await deleteUser(id).then((res) => {
        getUserList({ offset: 0, size: 10 })
      })
    }
  }
})
export default userList

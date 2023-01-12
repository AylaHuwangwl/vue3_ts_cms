import { defineStore } from 'pinia'
import {
  getUserList,
  deleteUser,
  addUser,
  editUser,
  getPageList,
  deletePageItem,
  addPageItem,
  editPageItem
} from '@/service/main/system/user'
interface StateFormat {
  userlist: any[]
  totalNum: number

  pageList: any
  pagetTotalNum: number
}
const userList = defineStore('userList', {
  state: (): StateFormat => ({
    userlist: [],
    totalNum: 0,

    pageList: [],
    pagetTotalNum: 0
  }),
  actions: {
    async getUserList(data?: {}) {
      await getUserList(data).then((res) => {
        // console.log(res)
        this.userlist = res.data.list
        this.totalNum = res.data.totalCount
      })
    },
    async deleteUser(id: number) {
      await deleteUser(id).then((res) => {
        this.getUserList({ offset: 0, size: 10 })
      })
    },
    async addUser(data: any) {
      await addUser(data).then((res) => {
        this.getUserList({ offset: 0, size: 10 })
      })
    },
    async editUser(id: number, data: any) {
      await editUser(id, data).then((res) => {
        this.getUserList({ offset: 0, size: 10 })
      })
    },

    async getPageListData(
      pagename: string,
      data: any = { offset: 0, size: 10 }
    ) {
      await getPageList(pagename, data).then((res) => {
        this.pageList = res.data.list
        this.pagetTotalNum = res.data.totalCount
      })
    },
    async deletePageItem(pagename: string, id: number) {
      await deletePageItem(pagename, id).then((res) => {
        this.getPageListData(pagename)
      })
    },
    async addPageItem(pagename: string, data: any = { offset: 0, size: 10 }) {
      await addPageItem(pagename, data).then((res) => {
        this.getPageListData(pagename)
      })
    },
    async editPageItem(pagename: string, id: number, data: any) {
      await editPageItem(pagename, id, data).then((res) => {
        this.getPageListData(pagename)
      })
    }
  }
})
export default userList

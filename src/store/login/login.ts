import { defineStore } from 'pinia'
import { loginAccountRequest, getUserInfo, getUserMenu } from '@/service/login/login'
import type { IAccount } from '../../types/login_types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constances'
import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import { mapRouterToMenu } from '@/utils/map-router'
interface Iuserinfostore {
  token: string
  userinfo: any
  usermenu: any
}
const userLoginStore = defineStore('login', {
  // 定义store类型
  state: (): Iuserinfostore => ({
    // id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userinfo: {},
    usermenu: []
    // name: ''
  }),
  actions: {
    async loginAccountActions(account: IAccount) {
      localCache.removeCache('isRemPwd')
      const loginResult = await loginAccountRequest(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)
      // 获取用户信息
      const userinfo = await getUserInfo(id)
      const user_info = userinfo.data
      this.userinfo = user_info
      // 获取菜单信息
      const roleid = this.userinfo.role.id
      const usermenu = await getUserMenu(roleid)
      const user_menu = usermenu.data
      this.usermenu = user_menu
      // 不定义Iuserinfostore接口直接写会报错

      // 映射菜单信息和路由封装成一个函数
      mapRouterToMenu(user_menu)
      // 存储用户信息
      localCache.setCache('userinfo', user_info)
      localCache.setCache('usermenu', user_menu)
    },
    // 保存路由信息，刷新时路由信息仍保留
    saveRouterInfo() {}
  }
})
export default userLoginStore

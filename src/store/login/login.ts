import { defineStore } from 'pinia'
import { loginAccountRequest, getUserInfo } from '@/service/login/login'
import type { IAccount } from '../../types/login_types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constances'
const userLoginStore = defineStore('login', {
  state: () => ({
    // id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? ''
    // name: ''
  }),
  actions: {
    async loginAccountActions(account: IAccount) {
      const loginResult = await loginAccountRequest(account)
      const id = loginResult.data.id
      const name = loginResult.data.name
      this.token = loginResult.data.token

      const userinfo = await getUserInfo(id)
      console.log(userinfo)

      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export default userLoginStore

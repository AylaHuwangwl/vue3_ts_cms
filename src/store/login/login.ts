import { defineStore } from 'pinia'
import { loginAccountRequest } from '@/service/login/login'
import type { IAccount } from '../../types/login_types'
import { localCache } from '@/utils/cache'
const LOGIN_TOKEN = 'login_token'
const userLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    name: ''
  }),
  actions: {
    async loginAccountActions(account: IAccount) {
      const loginResult = await loginAccountRequest(account)
      this.id = loginResult.data.id
      this.name = loginResult.data.name
      this.token = loginResult.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export default userLoginStore

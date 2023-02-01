import { createPinia } from 'pinia'
import type { App } from 'vue'
import userLoginStore from './login/login'
const pinia = createPinia()
export function routerStore(app: App) {
  app.use(pinia)
  const userLoginInfo = userLoginStore()
  userLoginInfo.saveRouterInfo()
}

export default routerStore

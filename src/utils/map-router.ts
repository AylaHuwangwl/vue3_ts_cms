import type { RouteRecordRaw } from 'vue-router'
// import { localCache } from './cache'
import router from '@/router'
export function mapRouterToMenu(usermenu: any[]) {
  const file: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', { eager: true })
  const allRouter: RouteRecordRaw[] = []
  // 遍历file
  for (let item in file) {
    const route = file[item].default
    allRouter.push(route)
  }
  // const user_menu = localCache.getCache('usermenu')
  // 拿到路由信息中包含菜单信息中的路由
  usermenu.forEach((item: any, index: number) => {
    item.children.forEach((ele: any) => {
      const localRouter = allRouter.find((routeritem) => routeritem.path === ele.url)
      if (localRouter) {
        router.addRoute('main', localRouter)
        console.log(router.currentRoute)
      }
    })
  })
}

import type { RouteRecordRaw } from 'vue-router'
// import { localCache } from './cache'
import router from '@/router'
import user from '@/router/main/system/user/user';
export let firstMenu:any = [];
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
        if(!firstMenu.length){
          firstMenu.push(ele)
        }
        // console.log(router.currentRoute)
      }
    })
  })
}
/**
 *
 */
export function mapMenuToRouter(path:string,usermenu:any){
  for(let item of usermenu){
    for(let ele of item.children){
      if(ele.url === path){
        return ele
      }
    }
  }
}

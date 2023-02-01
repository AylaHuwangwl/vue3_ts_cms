import type { RouteRecordRaw } from 'vue-router'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
const route = useRoute()
import router from '@/router'
import user from '@/router/main/system/user/user'
import menu from '@/router/main/system/menu/menu'
import { formEmits } from 'element-plus'
export const firstMenu: any = []
export function mapRouterToMenu(usermenu: any[]) {
  const file: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })
  // 所有路由包括无权限的路由
  const allRouter: RouteRecordRaw[] = []
  // 遍历file
  for (const item in file) {
    const route = file[item].default
    allRouter.push(route)
  }
  // const user_menu = localCache.getCache('usermenu')
  // 拿到路由信息中包含菜单信息中的路由
  usermenu.forEach((item: any, index: number) => {
    item.children.forEach((ele: any) => {
      const localRouter = allRouter.find(
        (routeritem) => routeritem.path === ele.url
      )
      if (localRouter) {
        if (!router.hasRoute(item.name)) {
          router.addRoute('main', {
            path: item.url,
            redirect: item.children[0].url,
            name: item.name
          })
        }
        router.addRoute('main', localRouter)
        if (!firstMenu.length) {
          firstMenu.push(ele)
        }

        // console.log(router.currentRoute)
      }
      // console.log(router)
    })
    if (item.url) {
      item.url = item.children[0].url
    }
  })
}
/**
 *
 */
export function mapMenuToRouter(path: string, usermenu: any) {
  for (const item of usermenu) {
    for (const ele of item.children) {
      if (ele.url === path) {
        return ele
      }
    }
  }
}
export function mapPathToBreadCrumb(
  path: string,
  usermenu: any[],
  route: RouteLocationNormalizedLoaded
) {
  const breadRoute: any[] = []
  for (const menu of usermenu) {
    if (route.path.includes(menu.url) && menu.children.length) {
      menu.url = menu.children[0].url
    }
    for (const children of menu.children) {
      if (path === children.url) {
        breadRoute.push({ name: menu.name, path: menu.url })
        breadRoute.push({ name: children.name, path: children.url })
      }
    }
  }
  return breadRoute
}
export function mapMenuToId(menus: any[]) {
  const itemList: any[] = []
  function _recurseGetId(menuList) {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetId(menu.children)
      } else {
        itemList.push(menu.id)
      }
    }
  }
  _recurseGetId(menus)
  return itemList
}

export function mapMenuToPermission(menus: any[]) {
  const permission: string[] = []
  function recurderGetPermission(menulist: any[]) {
    for (const item of menulist) {
      if (item.type === 3) {
        permission.push(item.permission)
      } else {
        recurderGetPermission(item.children ?? [])
      }
    }
  }
  recurderGetPermission(menus)
  return permission
}

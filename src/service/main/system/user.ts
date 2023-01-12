import hyRequest from '@/service'
export function getUserList(data: any) {
  return hyRequest.post({
    url: '/users/list',
    data
  })
}
export function deleteUser(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}
export function addUser(data: any) {
  return hyRequest.post({
    url: '/users',
    data
  })
}
export function editUser(id: number, data: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data
  })
}

export function getPageList(pagename: string, data: any) {
  return hyRequest.post({
    url: `/${pagename}/list`,
    data
  })
}
export function deletePageItem(pagename: string, id: number) {
  return hyRequest.delete({
    url: `/${pagename}/${id}`
  })
}
export function addPageItem(pagename: string, data: any) {
  return hyRequest.post({
    url: `/${pagename}`,
    data
  })
}
export function editPageItem(pagename: string, id: number, data: any) {
  return hyRequest.patch({
    url: `/${pagename}/${id}`,
    data
  })
}

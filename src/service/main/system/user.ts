import hyRequest from '@/service'
export function getUserList(data: any) {
  return hyRequest.post({
    url: '/users/list',
    data
  })
}
export function deleteUser(id) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}
export function addUser(data) {
  return hyRequest.post({
    url: '/users',
    data
  })
}
export function editUser(id) {
  return hyRequest.patch({
    url: `/users/${id}`
  })
}

export function getPageList(pagename: string, data: any) {
  return hyRequest.post({
    url: `/${pagename}/list`,
    data
  })
}

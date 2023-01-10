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

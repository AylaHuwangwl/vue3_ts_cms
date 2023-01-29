import hyRequest from '..'
export function getRole(data: any = { offset: 0, size: 10 }) {
  return hyRequest.post({
    url: '/role/list',
    data
  })
}
export function getDepartment(data: any = { offset: 0, size: 10 }) {
  return hyRequest.post({
    url: '/department/list',
    data
  })
}
export function getMenu(data: any = { offset: 0, size: 10 }) {
  return hyRequest.post({
    url: '/menu/list',
    data
  })
}

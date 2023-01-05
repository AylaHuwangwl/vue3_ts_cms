import hyRequest from '..'
import type { IAccount } from '../../types/login_types'
export function loginAccountRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}
export function getUserInfo(id: number) {
  return hyRequest.get({
    url: `/users/${id}`
  })
}
export function getUserMenu(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}

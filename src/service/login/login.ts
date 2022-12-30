import hyRequest from '..'
import type { IAccount } from '../../types/login_types'
export function loginAccountRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

import hyRequest from '@/service'
export function getAmountList() {
  return hyRequest.get({
    url: '/goods/amount/list',
  })
}

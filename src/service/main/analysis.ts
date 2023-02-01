import hyRequest from '@/service'
export function getAmountList() {
  return hyRequest.get({
    url: '/goods/amount/list'
  })
}
export function getCategoryGoodsCount() {
  return hyRequest.get({
    url: '/goods/category/count'
  })
}
export function getCategoryGoodsSale() {
  return hyRequest.get({
    url: '/goods/category/sale'
  })
}

export function getCategoryGoodsFavor() {
  return hyRequest.get({
    url: '/goods/category/favor'
  })
}
export function getGoodsAddressSale() {
  return hyRequest.get({
    url: '/goods/address/sale'
  })
}

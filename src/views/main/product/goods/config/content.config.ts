const contentConfig = {
  header: {
    title: '类别列表',
    btntitle: '添加类别'
  },
  pagename: 'goods',
  tableConfig: [
    { type: 'selection', width: '60', prop: 'selection' },
    {
      type: 'index',
      label: '序号',
      width: '60',
      prop: 'index'
    },
    {
      type: 'custom',
      prop: 'name',
      width: '150',
      label: '商品名称',
      slotName: 'goodsname'
    },
    {
      type: 'normal',
      prop: 'oldPrice',
      width: '80',
      label: '原价格'
    },
    {
      type: 'normal',
      prop: 'newPrice',
      width: '80',
      label: '现价格'
    },
    {
      type: 'custom',
      prop: 'status',
      width: '100',
      label: '用户状态',
      slotName: 'status'
    },

    {
      type: 'custom',
      prop: 'imgUrl',
      width: '100',
      label: '商品图片',
      slotName: 'imgurl'
    },
    {
      type: 'normal',
      prop: 'inventoryCount',
      label: '库存'
    },
    {
      type: 'normal',
      prop: 'saleCount',
      label: '已售'
    },
    {
      type: 'normal',
      prop: 'favorCount',
      label: '收藏数'
    },
    {
      type: 'normal',
      prop: 'address',
      label: '发货地址'
    },
    {
      type: 'timer',
      label: '创建时间',
      prop: 'createAt'
    },
    {
      type: 'timer',
      label: '更新时间',
      prop: 'updateAt'
    }
  ]
}
export default contentConfig

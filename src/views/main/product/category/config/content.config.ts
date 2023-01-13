const contentConfig = {
  header: {
    title: '类别列表',
    btntitle: '添加类别'
  },
  pagename: 'category',
  tableConfig: [
    { type: 'selection', width: '60', prop: 'selection' },
    {
      type: 'index',
      label: '序号',
      width: '60',
      prop: 'index'
    },
    {
      type: 'normal',
      label: '商品类别',
      width: '120',
      prop: 'name'
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

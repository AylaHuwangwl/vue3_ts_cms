const contentConfig = {
  header: {
    title: '用户列表',
    btntitle: '新建部门'
  },
  pagename: 'department',
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
      label: '部门名称',
      width: '120',
      prop: 'name'
    },
    {
      type: 'normal',
      label: '部门领导',
      width: '100',
      prop: 'leader'
    },
    {
      type: 'normal',
      label: '上级部门',
      width: '140',
      prop: 'parentId'
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
    },
    {
      type: 'custom',
      label: '创建时间',
      prop: 'createAt',
      slotName: 'createAt'
    },
    {
      type: 'custom',
      label: '更新时间',
      prop: 'updateAt',
      slotName: 'updateAt'
    }
  ]
}
export default contentConfig

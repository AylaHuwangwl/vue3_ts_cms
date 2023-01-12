const contentConfig = {
  header: {
    title: '角色列表',
    btntitle: '新建角色'
  },
  pagename: 'role',
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
      label: '角色名称',
      width: '120',
      prop: 'name'
    },
    {
      type: 'normal',
      label: '权限介绍',
      width: '100',
      prop: 'intro'
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
    // {
    //   type: 'custom',
    //   label: '创建时间',
    //   prop: 'createAt',
    //   slotName: 'createAt'
    // },
    // {
    //   type: 'custom',
    //   label: '更新时间',
    //   prop: 'updateAt',
    //   slotName: 'updateAt'
    // }
  ]
}
export default contentConfig

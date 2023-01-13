const contentConfig = {
  header: {
    title: '菜单管理',
    btntitle: '新建数据'
  },
  pagename: 'menu',
  tableConfig: [
    {
      label: '菜单名称',
      prop: 'name',
      // type: 'custom',
      slotName: 'menuname'
    },
    {
      label: '类型',
      prop: 'type',
      width: '70',
      type: 'normal'
    },
    {
      label: '菜单URL',
      prop: 'url',
      width: '125',
      type: 'normal'
    },
    {
      label: '菜单icon',
      prop: 'icon',
      width: '200',
      type: 'normal'
    },
    {
      label: '按钮权限',
      prop: 'permission',
      type: 'normal'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      type: 'timer'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      type: 'timer'
    }
  ],
  children: {
    'row-key': 'id',
    'tree-props': { children: 'children', hasChildren: 'hasChildren' }
  }
}
export default contentConfig

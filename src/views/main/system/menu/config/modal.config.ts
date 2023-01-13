const modalConfig = {
  headernew: '新建菜单',
  headeredit: '编辑菜单',
  submitText: '确定',
  cancelText: '取消',
  pagename: 'menu',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      type: 'input',
      prop: 'intro',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ]
}
export default modalConfig

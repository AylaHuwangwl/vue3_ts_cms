const modalConfig = {
  headernew: '新建部门',
  headeredit: '编辑部门',
  submitText: '确定',
  cancelText: '取消',
  pagename: 'department',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      type: 'select',
      prop: 'parentId',
      label: '上级部门',
      placeholder: '请输入上级部门',
      options: []
    },
    {
      type: 'input',
      prop: 'leader',
      label: '领导名称',
      placeholder: '请输入领导名称'
    }
  ]
}
export default modalConfig

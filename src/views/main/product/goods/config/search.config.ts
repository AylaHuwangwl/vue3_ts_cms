const searchConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'id',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'input',
      prop: 'name',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      type: 'input',
      prop: 'oldPrice',
      label: '原价格',
      placeholder: '请输入原价格'
    },
    {
      type: 'input',
      prop: 'newPrice',
      label: '现价格',
      placeholder: '请输入现价格'
    },
    {
      type: 'input',
      prop: 'address',
      label: '发货地址',
      placeholder: '请输入发货地址'
    },
    {
      type: 'select',
      prop: 'status',
      label: '用户状态',
      placeholder: '请输入用户状态',
      options: [
        {
          label: '启用',
          value: '1'
        },
        {
          label: '禁用',
          value: '0'
        }
      ]
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间',
      placeholder: '请选择创建时间'
    }
  ]
}
export default searchConfig

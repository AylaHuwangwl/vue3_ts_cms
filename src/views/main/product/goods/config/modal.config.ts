const modalConfig = {
  headernew: '新建商品',
  headeredit: '编辑商品',
  submitText: '确定',
  cancelText: '取消',
  pagename: 'goods',
  formItems: [
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
      type: 'custom',
      prop: 'imgUrl',
      label: '图片',
      placeholder: '请上传图片',
      slotName: 'imgUrl'
    },
    {
      type: 'input-number',
      prop: 'inventoryCount',
      label: '库存',
      min: '0',
      placeholder: '请填写库存'
    },
    {
      type: 'input-number',
      prop: 'saleCount',
      label: '已售',
      min: '0',
      placeholder: '请填写已售数量'
    },
    {
      type: 'input-number',
      prop: 'favorCount',
      label: '收藏数',
      min: '0',
      placeholder: '请填写收藏数量'
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
      type: 'input',
      prop: 'address',
      label: '发货地址',
      placeholder: '请输入发货地址'
    }
  ]
}
export default modalConfig

const productDetail = {
  id: 1,
  productName: '定制你的 16 英寸 MacBook Pro',
  color: ['黑色', '深空灰', '白色'],
  storage: ['1T', '2T', '4T', '8T'],
  memory: ['32GB', '64GB', '96GB'],
  skuList: [
    {
      name: '黑色32G内存1T存储',
      activityNo: 'AP11111',
      colorId: 1001,
      storageId: 2001,
      memoryId: 3001,
      sellPrice: 8000,
      stockNum: 10
    },
    {
      name: '深空灰64G内存4T存储',
      activityNo: 'AP122221',
      colorId: 1002,
      storageId: 2003,
      memoryId: 3002,
      sellPrice: 12000,
      stockNum: 10
    },
    {
      name: '深空灰64GB内存1T存储',
      activityNo: 'AP11333',
      colorId: 1002,
      storageId: 2001,
      memoryId: 3002,
      sellPrice: 9000,
      stockNum: 10
    },
    {
      name: '白色32GB内存2T存储',
      activityNo: 'AP11444',
      colorId: 1003,
      storageId: 2002,
      memoryId: 3001,
      sellPrice: 11000,
      stockNum: 10
    },
    {
      name: '深空灰32GB内存1T存储',
      activityNo: 'AP1155',
      colorId: 1002,
      storageId: 2001,
      memoryId: 3001,
      sellPrice: 8200,
      stockNum: 10
    },
    {
      name: '白色96GB内存8T存储',
      activityNo: 'AP11661',
      colorId: 1003,
      storageId: 2004,
      memoryId: 3003,
      sellPrice: 14000,
      stockNum: 10
    }
  ]
}

const skuProperties = [
  {
    id: 1,
    name: '颜色',
    typeList: [
      { id: 1001, name: '黑色' },
      { id: 1002, name: '深空灰' },
      { id: 1003, name: '白色' }
    ]
  },
  {
    id: 2,
    name: '存储',
    typeList: [
      { id: 2001, name: '1T' },
      { id: 2002, name: '2T' },
      { id: 2003, name: '4T' },
      { id: 2004, name: '8T' }
    ]
  },
  {
    id: 3,
    name: '内存',
    typeList: [
      { id: 3001, name: '32GB' },
      { id: 3002, name: '64GB' },
      { id: 3003, name: '96GB' }
    ]
  }
]

export { productDetail, skuProperties }

const prodList = [
  {
    id: 1,
    brand: 1,
    category: 2,
    name: '饿了么代金券',
    minSellPrice: 95000
  },
  {
    id: 2,
    brand: 2,
    category: 0,
    name: '网易云会员',
    minSellPrice: 140000
  },
  {
    id: 3,
    brand: 3,
    category: 0,
    name: 'QQ音乐会员',
    minSellPrice: 140000
  },
  {
    id: 4,
    brand: 4,
    category: 1,
    name: '京东购物卡',
    minSellPrice: 95000
  },
  {
    id: 5,
    brand: 5,
    category: 1,
    name: '天猫购物卡',
    minSellPrice: 95000
  }
]

const skuProperties = [
  {
    id: 1,
    name: '类型',
    typeList: [
      { id: 1001, name: '卡号卡密' },
      { id: 1002, name: '卡密' }
    ]
  },
  {
    id: 2,
    name: '面值',
    typeList: [
      { id: 2001, name: '10元' },
      { id: 2002, name: '30元' },
      { id: 2003, name: '50元' },
      { id: 2004, name: '100元' }
    ]
  },
  {
    id: 3,
    name: '票据',
    typeList: [
      { id: 3001, name: '增值税普通发票' },
      { id: 3002, name: '无发票' }
    ]
  }
]

const productDetail = [
  {
    id: 1,
    brand: 1,
    category: 2,
    name: '饿了么代金券',
    skuList: [
      {
        activityNo: 'elm10',
        name: '饿了么10元代金券',
        typeId: 1002,
        faceValueId: 2001,
        billId: 3002,
        sellPrice: 95000,
        stockNum: 3
      },
      {
        activityNo: 'elm30',
        name: '饿了么30元代金券',
        typeId: 1001,
        faceValueId: 2002,
        billId: 3002,
        sellPrice: 280000,
        stockNum: 5
      },
      {
        activityNo: 'elm50',
        name: '饿了么50元代金券',
        typeId: 1002,
        faceValueId: 2003,
        billId: 3002,
        sellPrice: 450000,
        stockNum: 2
      },
      {
        activityNo: 'elm100',
        name: '饿了么100元代金券',
        typeId: 1002,
        faceValueId: 2004,
        billId: 3001,
        sellPrice: 900000,
        stockNum: 1
      }
    ]
  },
  {
    id: 2,
    brand: 1,
    category: 2,
    name: '网易云代金券',
    skuList: [
      {
        activityNo: 'wyy10',
        name: '网易云一个月会员',
        typeId: 1002,
        faceValueId: 2001,
        billId: 3002,
        sellPrice: 140000,
        stockNum: 3
      },
      {
        activityNo: 'wyy30',
        name: '网易云半年会员',
        typeId: 1001,
        faceValueId: 2002,
        billId: 3002,
        sellPrice: 750000,
        stockNum: 5
      },
      {
        activityNo: 'wyy50',
        name: '网易云一年会员',
        typeId: 1002,
        faceValueId: 2003,
        billId: 3002,
        sellPrice: 1400000,
        stockNum: 2
      }
    ]
  },
  {
    id: 3,
    brand: 3,
    category: 0,
    name: 'QQ音乐会员',
    skuList: [
      {
        activityNo: 'qqyinyue10',
        name: 'QQ音乐一个月会员',
        typeId: 1002,
        faceValueId: 2001,
        billId: 3002,
        sellPrice: 140000,
        stockNum: 3
      },
      {
        activityNo: 'qqyinyue30',
        name: 'QQ音乐半年会员',
        typeId: 1001,
        faceValueId: 2002,
        billId: 3002,
        sellPrice: 750000,
        stockNum: 5
      },
      {
        activityNo: 'qqyinyue50',
        name: 'QQ音乐一年会员',
        typeId: 1002,
        faceValueId: 2003,
        billId: 3002,
        sellPrice: 1400000,
        stockNum: 0
      }
    ]
  },
  {
    id: 4,
    brand: 4,
    category: 1,
    name: '京东购物卡',
    skuList: [
      {
        activityNo: 'jd100',
        name: '京东购物卡100元',
        typeId: 1002,
        faceValueId: 2001,
        billId: 3002,
        sellPrice: 980000,
        stockNum: 3
      },
      {
        activityNo: 'jd300',
        name: '京东购物卡300元',
        typeId: 1001,
        faceValueId: 2002,
        billId: 3002,
        sellPrice: 2900000,
        stockNum: 5
      },
      {
        activityNo: 'jd500',
        name: '京东购物卡500元',
        typeId: 1002,
        faceValueId: 2003,
        billId: 3002,
        sellPrice: 4500000,
        stockNum: 0
      }
    ]
  },
  {
    id: 5,
    brand: 5,
    category: 1,
    name: '天猫购物卡',
    skuList: [
      {
        activityNo: 'tm100',
        name: '天猫购物卡100元',
        typeId: 1002,
        faceValueId: 2001,
        billId: 3002,
        sellPrice: 980000,
        stockNum: 3
      },
      {
        activityNo: 'tm300',
        name: '天猫购物卡300元',
        typeId: 1001,
        faceValueId: 2002,
        billId: 3002,
        sellPrice: 2900000,
        stockNum: 5
      },
      {
        activityNo: 'tm500',
        name: '天猫购物卡500元',
        typeId: 1002,
        faceValueId: 2003,
        billId: 3002,
        sellPrice: 4500000,
        stockNum: 0
      }
    ]
  }
]

export { prodList, skuProperties, productDetail }

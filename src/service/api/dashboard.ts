const sleep = (data: any) => {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, data)
  )
}

export const getStaffList: Promise = (params) => {
  const { page, pageSize } = params.pageParams
  const totalIndex = page * pageSize - pageSize

  const data = new Array(pageSize)
    .fill()
    .map((item, index) => {
      return {
        id: index + 1 + totalIndex,
        name: `姓名${index + totalIndex + 1}`,
        age: Math.floor(Math.random() * (50 - 18)) + 18,
        sex: Math.random() < 0.5 ? 0 : 1,
        grade: Math.floor(Math.random() * 4) + 1
      }
    })

  return sleep({
    data: data,
    total: 1000
  })
}

const sleep = <T>(data: T, delay = 1000): Promise<T> => {
  return new Promise((resolve) =>
    setTimeout(resolve, delay, data)
  )
}

export const getLoginCaptcha = () =>
  sleep(
    'data:image/png;base64,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',
    100
  )

export const pwdLogin = (_param: any) =>
  sleep('tokenkyutua1231231')

export const getUserDetail = (): Promise<Auth.UserInfo> =>
  sleep({
    id: '1',
    name: 'KYUUTA',
    status: 1,
    roles: [
      {
        id: 'role1',
        name: '管理员admin',
        status: 1,
        describe: '管理员',
        permissions: [
          {
            permissionId: 'Dashboard',
            permissionPath: '/dashboard',
            permissionName: 'routes.dashboard.index',
            actionEntitySet: [
              {
                actionCode: 'DashboardAdd',
                describe: '新增'
              }
            ]
          }
        ]
      }
    ]
  })

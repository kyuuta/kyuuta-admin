/** 用户相关模块 */
declare namespace Auth {
  type RolesType = {
    /** 角色ID */
    id: string
    /** 角色名称 */
    name: string
    /** 角色状态 */
    status?: 1 | 0
    /** 角色描述 */
    describe?: string
    /** 权限列表 */
    permissions?: {
      /** 权限ID */
      permissionId: string
      /** 权限名称 */
      permissionName: string
      /** 权限路径 */
      permissionPath: string
      /** 操作集 */
      actionEntitySet?: {
        /** 操作code */
        actionCode: string
        /** 描述 */
        describe: string
      }[]
    }[]
  }

  /** 用户信息 */
  interface UserInfo {
    /** 用户id */
    id: string
    /** 用户名 */
    name: string
    /** 用户状态 */
    status?: 1 | 0
    /** 用户角色类型 */
    roles: RolesType[]
  }
}

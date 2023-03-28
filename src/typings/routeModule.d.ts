/** 处理import的路由模块数据 */
declare namespace RouteModule {
  interface Modules {
    [key: string]: {
      default: import('vue-router').RouteRecordRaw[]
    }
  }
}

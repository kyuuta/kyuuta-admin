import { RouteRecordRaw } from 'vue-router'

// @ts-ignore
const modules = import.meta.globEager('./modules/**/*.ts')

const routeModuleList: RouteRecordRaw[] = []

Object.keys(modules).forEach(key => {
  const module = modules[key].default || {}
  const moduleList = Array.isArray(module) ? [...module] : [module]
  routeModuleList.push(...moduleList)
})

// sortRoute
function sortRoute(a, b) {
  return (a.meta.sort || 0) - (b.meta.sort || 0);
}
routeModuleList.sort(sortRoute)

export default routeModuleList
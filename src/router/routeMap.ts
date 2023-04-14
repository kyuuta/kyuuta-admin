import { handleModuleRoutes } from '@/utils'

const modules: RouteModule.Modules = import.meta.glob('./modules/**/*.ts', { eager: true })

const routes = handleModuleRoutes(modules)

export default routes

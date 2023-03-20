import { App } from 'vue';
import { 
  createRouter,
  createWebHashHistory
} from 'vue-router';
import ConstantRouteMap from './constantRouteMap'
import RouteMap from './routeMap'

const router = createRouter({
  history: createWebHashHistory(''),
  strict: true,
  routes: [...ConstantRouteMap, ...RouteMap],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
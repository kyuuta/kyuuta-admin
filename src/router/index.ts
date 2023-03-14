import { App } from 'vue';
import { 
  createRouter,
  createWebHashHistory
} from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(''),
  strict: true,
  routes: [
    { path: '/a', component: () => import('@/views/a.vue') },
    { path: '/b', component: () => import('@/views/b.vue') }
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
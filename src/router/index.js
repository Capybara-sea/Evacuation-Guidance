import { useStore } from '@/store'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/question/:id?',
    name: 'question',
    component: () => import('@/views/question/index.vue'),
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('@/views/result/index.vue'),
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('@/views/info/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  if (from.name == to.name) return
  console.log(`[route]${from.name}->${to.name}`)

  const store = useStore()
  store.currentRouteName = to.name

  // Reset result: If you are back homepage
  if (to.name == 'home') {
    store.resetResult()
  }
})

export default router

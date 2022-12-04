import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/question/:id?',
    component: () => import('@/views/question/index.vue'),
  },
  {
    path: '/result',
    component: () => import('@/views/result/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

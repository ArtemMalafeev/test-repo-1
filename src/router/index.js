import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/PageKanban.vue'),
    },
    {
      path: '/task/:taskId',
      name: 'task',
      component: () => import('../views/PageTask.vue'),
      props: true,
    },
  ],
})

export default router;

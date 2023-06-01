import { createRouter, createWebHistory } from 'vue-router'
import ShoeView from '../views/ShoeView.vue'
import HomeView from '@/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: HomeView
    },
    {
      path: '/article/:id',
      name: 'ShoeView',
      component: ShoeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.replace('/')

export default router

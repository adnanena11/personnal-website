import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cv',
      name: 'CV',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/cvView.vue')
    },
    {
      path: '/portfolio',
      name:'Portfolio',
      component: () => import('../views/portfolioView.vue')
    },
    {
      path: '/smartfit',
      name:'smartfit',
      component: () => import('../views/smartfitView.vue')
    },
    {
      path: '/celeste',
      name:'celeste',
      component: () => import('../views/celesteView.vue')
    },
    {
      path: '/hitman',
      name:'hitman',
      component: () => import('../views/hitmanView.vue')
    },{
      path: '/jepm',
      name:'jepm',
      component: () => import('../views/jepmView.vue')
    },{
      path: '/lfs',
      name:'lfs',
      component: () => import('../views/lfsView.vue')
    },{
      path: '/movintage',
      name:'movintage',
      component: () => import('../views/movintageView.vue')
    },
    {
      path: '/contact',
      name:'contact',
      component: () => import('../views/contactView.vue')
    },
  ]
})

export default router

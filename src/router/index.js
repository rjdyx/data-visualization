import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@src/views/home')
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import('@components/page1/index.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('@components/page2/index.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import('@components/page3/index.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@components/map/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

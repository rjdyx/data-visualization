import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@src/views/Home.vue')
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('@components/datav/index.vue')
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

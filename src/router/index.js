import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/education',
    name: 'education',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/education.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('../views/technology.vue')
  },
  {
    path: '/peer',
    name: 'peer',
    component: () => import('../views/peer.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import signature from '../components/upload.vue'
import type from '../components/type.vue'
import draw from '../components/draw.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/upload',
    name: 'upload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: signature
  },
  {
    path: '/type',
    name: 'type',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: type
  },
  {
    path: '/draw',
    name: 'draw',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: draw
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

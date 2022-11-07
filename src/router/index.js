import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue' // 載入元件方法一

const routes = [
  {
    path: '/', // 路徑
    name: 'Home',
    component: Home // 元件
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // 載入元件方法二
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

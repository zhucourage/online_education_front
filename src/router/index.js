import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 {
  path:"/",
  component: () => import("@/views/layout/"),
  children:[
    {
      path:"",
      component: () => import("@/views/home")
    },
    {
      path:"article",
      component: () => import("@/views/article")
    },
    {
      path:"video",
      component: () => import("@/views/video")
    },
    {
      path:"my",
      component: () => import("@/views/my")
    },
  ]
 },
 {
  path:"/login",
  component:()=> import("@/views/login/")
 },
 {
  path:"/search",
  component:()=> import("@/views/search/")
 },

]

const router = new VueRouter({
  routes
})

export default router

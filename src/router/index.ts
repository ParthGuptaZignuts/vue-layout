import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import ProfileView from "../views/ProfileView.vue" 
import TheDefaultLayout from "../layouts/TheDefaultLayout.vue"
import TheDashboardLayout from "../layouts/TheDashboardLayout.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: TheDefaultLayout
      }
    },
    {
      path:"/about",
      name:'about',
      component:AboutView,
      meta:{
        layout: TheDefaultLayout
      }
    },
    {
      path:"/profile",
      name:"profile",
      component:ProfileView,
      meta:{
        layout:TheDashboardLayout
      }
    }
  ]
})

export default router

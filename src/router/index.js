import { createRouter, createWebHistory } from 'vue-router'
import CarsiMiniApp from '../views/CarsiMiniApp.vue'
import foodshop from '../views/FoodShop.vue'
import BookStore from '../views/BookStore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CarsiMiniApp
    },
    {
      path:'/foodshop',
      name:'foodshop',
      component: foodshop
    },
    {
      path:'/bookstore',
      name:'bookstore',
      component: BookStore
    }
    
  ]
})

export default router

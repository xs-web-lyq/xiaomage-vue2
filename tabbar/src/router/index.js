import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home.vue')
const Profile = ()=> import('../views/profile/Profile.vue')
const ShopCart = ()=> import('../views/shopcart/ShopCart.vue')
const Category = ()=> import('../views/category/Category.vue')


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/Profile',
    component: Profile
  },
  {
    path:'/shopcart',
    component: ShopCart
  },
  {
    path:'/category',
    component: Category
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

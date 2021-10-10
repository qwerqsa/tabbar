import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const Home = () => import('../views/cart/Cart.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component:Home
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  },
  {
    path:'/category',
    name:'Cartegory',
    component:Category
  },
  {
    path:'/profile',
    name:'Protegory',
    component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

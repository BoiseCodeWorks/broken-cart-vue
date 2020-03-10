import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function loadComponent(path) {
  return () => import("../views/" + path);
}

// TODO Why is the cart and the store on the same page??
// It looks awful...you should do something about it 

const routes = [
  {
    path: '/',
    name: 'Readme',
    component: loadComponent("Readme.vue")
  },
  {
    path: '/cart',
    name: 'Cart',
    component: loadComponent("Cart.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

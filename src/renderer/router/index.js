import Vue from 'vue'
import Router from 'vue-router'
// import LandingPage from '@/components/LandingPage'
import ProductList from '@/components/ProductList'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }, */
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// import LandingPage from '@/components/LandingPage'
import ProductList from '@/components/ProductList'
import Product from '@/components/ProductList/Product'

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
      redirect: '/products'
    },
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product
    }
  ]
})

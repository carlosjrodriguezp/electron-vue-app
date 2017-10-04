import Vue from 'vue'
import router from './router'
import App from './App'
import resource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(resource)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')

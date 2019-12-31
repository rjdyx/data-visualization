import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { borderBox1, fullScreenContainer } from '@jiaminghi/data-view'

Vue.use(borderBox1)
  .use(fullScreenContainer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

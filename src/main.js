import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import { borderBox1, fullScreenContainer, charts, digitalFlop, decoration10, scrollRankingBoard, scrollBoard, decoration8, decoration5, waterLevelPond } from '@jiaminghi/data-view'

import './assets/common.less'

Vue.use(borderBox1)
  .use(fullScreenContainer)
  .use(charts)
  .use(digitalFlop)
  .use(decoration10)
  .use(scrollRankingBoard)
  .use(scrollBoard)
  .use(decoration8)
  .use(decoration5)
  .use(waterLevelPond)

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

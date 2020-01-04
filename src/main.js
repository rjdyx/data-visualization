import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import {
  borderBox1,
  borderBox7,
  borderBox8,
  borderBox12,
  fullScreenContainer,
  charts,
  digitalFlop,
  decoration10,
  scrollRankingBoard,
  scrollBoard,
  decoration8,
  decoration5,
  waterLevelPond,
  activeRingChart
} from '@jiaminghi/data-view'

import './assets/common.less'

Vue.use(borderBox1)
  .use(borderBox7)
  .use(borderBox8)
  .use(borderBox12)
  .use(fullScreenContainer)
  .use(charts)
  .use(digitalFlop)
  .use(decoration10)
  .use(scrollRankingBoard)
  .use(scrollBoard)
  .use(decoration8)
  .use(decoration5)
  .use(waterLevelPond)
  .use(activeRingChart)

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

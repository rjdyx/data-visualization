import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'

import {
  Menu,
  MenuItem
} from 'element-ui'

import {
  borderBox1,
  borderBox2,
  borderBox3,
  borderBox4,
  borderBox5,
  borderBox6,
  borderBox7,
  borderBox8,
  borderBox9,
  borderBox12,
  fullScreenContainer,
  charts,
  digitalFlop,
  decoration10,
  scrollRankingBoard,
  scrollBoard,
  decoration1,
  decoration2,
  decoration3,
  decoration4,
  decoration5,
  decoration8,
  waterLevelPond,
  activeRingChart,
  capsuleChart
} from '@jiaminghi/data-view'

import './assets/common.less'

// dataV组件
Vue.use(borderBox1)
  .use(borderBox2)
  .use(borderBox3)
  .use(borderBox4)
  .use(borderBox5)
  .use(borderBox6)
  .use(borderBox7)
  .use(borderBox9)
  .use(borderBox8)
  .use(borderBox12)
  .use(fullScreenContainer)
  .use(charts)
  .use(digitalFlop)
  .use(decoration10)
  .use(scrollRankingBoard)
  .use(scrollBoard)
  .use(decoration1)
  .use(decoration2)
  .use(decoration3)
  .use(decoration4)
  .use(decoration5)
  .use(decoration8)
  .use(waterLevelPond)
  .use(activeRingChart)
  .use(capsuleChart)

// elementUI组件
Vue.use(Menu)
  .use(MenuItem)

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

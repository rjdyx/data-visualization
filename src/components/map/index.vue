<template>
  <div id="map">
    <div id="cusMap" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>

import option from './options'
import 'node_modules/echarts/map/js/china.js' // 引入中国地图数据

export default {
  name: 'map',
  props: {
    msg: String
  },
  mounted () {
    console.log(option)
    this.drawMap()
  },
  methods: {
    drawMap () {
      let myChart = this.$echarts.init(document.getElementById('cusMap'))
      // 绘制地图
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped lang="less">
#map {
  #cusMap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>

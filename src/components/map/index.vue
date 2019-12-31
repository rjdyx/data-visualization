<template>
  <div id="map">
    <div id="cusMap"></div>
  </div>
</template>

<script>

import option from './options'

export default {
  name: 'map',
  props: {
    msg: String
  },
  mounted () {
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
#map {}
</style>

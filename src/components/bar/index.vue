<template>
  <div id="bar">
    <div id="cusBar"></div>
  </div>
</template>

<script>

import option from './options'

export default {
  name: 'myBar',
  props: {
    msg: String
  },
  mounted () {
    console.log(option)
    this.drawMap()
  },
  methods: {
    drawMap () {
      let cusBar = this.$echarts.init(document.getElementById('cusBar'))
      // 绘制柱状图
      cusBar.setOption(option)
    }
  }
}
</script>

<style scoped lang="less">
#bar {
  width: 33%;

  #cusBar {
    width: 100%;
    height: 100%;
  }
}
</style>

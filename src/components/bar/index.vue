<template>
  <div id="bar">
    <div id="cusBar" style="width: 80%;height:80%;"></div>
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
  #cusBar {
    position: absolute;
    left: 0;
    right: 0;
    top: -100px;
    margin: auto;
  }
}
</style>

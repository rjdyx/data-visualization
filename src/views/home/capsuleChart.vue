<template>
  <dv-border-box-6 class="right-chart">
    <dv-capsule-chart class="chart" :config="config" />
  </dv-border-box-6>
</template>

<script>
export default {
  name: 'RightChart1',
  data () {
    return {
      config: {
        data: [
          {
            name: '收费系统',
            value: 25
          },
          {
            name: '通信系统',
            value: 66
          },
          {
            name: '监控系统',
            value: 123
          },
          {
            name: '供配电系统',
            value: 72
          },
          {
            name: '其他',
            value: 99
          }
        ],
        unit: '件'
      }
    }
  }
}
</script>

<style scoped lang="less">
.right-chart {
  width: 100%;
  height: 100%;

  .chart {
    width: 80%;
    height: 206px;
    margin: 26px auto;
  }
}
</style>

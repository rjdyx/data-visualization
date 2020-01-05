<template>
  <dv-border-box-3 class="left-bottom-chart">
    <div class="lc2-header">李四收费站</div>
    <dv-charts class="lc2-chart" :option="option" />
  </dv-border-box-3>
</template>

<script>
export default {
  name: 'LeftBottomCmp',
  data () {
    return {
      option: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '收费系统', value: 93 },
              { name: '通信系统', value: 32 },
              { name: '监控系统', value: 65 },
              { name: '供配电系统', value: 44 },
              { name: '其他', value: 52 }
            ],
            radius: ['47%', '55%'],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{percent}%\n{name}',
              style: {
                fontSize: 14,
                fill: '#fff'
              }
            }
          }
        ],
        color: [
          'rgba(0, 186, 255, 0.7215686274509804)',
          'rgba(61, 231, 201, 0.6784313725490196)',
          'rgba(255, 255, 255, 0.6784313725490196)',
          'rgba(255, 197, 48, 0.7019607843137254)',
          'rgba(70, 159, 75, 0.7019607843137254)'
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.left-bottom-chart {
  height: 100%;
  display: flex;
  flex-direction: column;

  .lc2-header {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    text-indent: 20px;
    margin-top: 42px;
  }

  .lc2-chart {
    height: calc(~"100% - 80px");
  }
}
</style>

<template>
  <dv-border-box-12 class="top-middle-cmp">
    <dv-charts :option="option" class="chart" />
  </dv-border-box-12>
</template>

<script>
export default {
  name: 'LeftTopBottomCmp',
  data () {
    return {
      option: {
        legend: {
          data: ['设备完好率'],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '10/01', '10/02', '10/03', '10/04', '10/05', '10/06',
            '10/07', '10/07', '10/08', '10/09', '10/10'
          ],
          boundaryGap: false,
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            },
            formatter ({ value }) {
              return value.toFixed(2)
            }
          },
          axisTick: {
            show: false
          },
          min: 95,
          max: 100,
          interval: 5
        },
        series: [
          {
            data: [
              99.56, 99.66, 99.84, 99.22, 99.11, 99.45,
              99.44, 99.81, 99.84, 99.32, 99.14
            ],
            type: 'line',
            name: '设备完好率',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.top-middle-cmp {
  .chart {
    width: 93%;
    margin: auto;
  }
}
</style>

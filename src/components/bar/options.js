export default {
  backgroundColor: 'transparent',
  tooltip: {},
  xAxis: {
    data: ['基地', '物流', '扶贫'],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#ffffff'
      }
    },
    offset: 45,
    max: 2
  },
  yAxis: {
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  grid: {
    height: 120,
    bottom: '33%',
    containLabel: true
  },
  series: [{
    name: '年报上报率3',
    type: 'pictorialBar',
    symbolSize: [30, 10],
    symbolOffset: [0, -5],
    z: 12,
    itemStyle: {
      normal: {
        color: '#14b1eb'
      }
    },
    data: [{
      value: 40,
      symbolPosition: 'end'
    }, {
      value: 30,
      symbolPosition: 'end'
    }, {
      value: 10,
      symbolPosition: 'end'
    }]
  }, {
    name: '年报上报率2',
    type: 'pictorialBar',
    symbolSize: [30, 10],
    symbolOffset: [0, 6],
    z: 12,
    itemStyle: {
      normal: {
        color: '#14b1eb'
      }
    },
    data: [40, 30, 10]
  }, {
    name: '年报上报率1',
    type: 'pictorialBar',
    symbolSize: [50, 25],
    symbolOffset: [0, 17],
    z: 11,
    itemStyle: {
      normal: {
        color: 'transparent',
        borderColor: '#14b1eb',
        borderWidth: 5
      }
    },
    data: [40, 30, 10]
  }, {
    name: '年报上报率',
    type: 'pictorialBar',
    symbolSize: [85, 40],
    symbolOffset: [0, 35],
    z: 10,
    itemStyle: {
      normal: {
        color: 'transparent',
        borderColor: '#14b1eb',
        borderType: 'dashed',
        borderWidth: 5
      }
    },
    data: [40, 30, 10]
  }, {
    type: 'bar',
    itemStyle: {
      normal: {
        color: '#14b1eb',
        opacity: 0.7
      }
    },
    silent: true,
    barWidth: 30,
    barGap: 1,
    barCategoryGap: 20,
    data: [40, 30, 10]
  }]
}

export default {
  backgroundColor: 'transparent',
  tooltip: {},
  xAxis: {
    data: ['企业', '农专', '个体'],
    axisTick: {
      show: true
    },
    axisLine: {
      show: true
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#e54035'
      }
    }
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
  series: [{
    name: '年报上报率3',
    type: 'pictorialBar',
    symbolSize: [50, 30],
    symbolOffset: [0, -20],
    z: 12,
    itemStyle: {
      normal: {
        color: '#14b1eb'
      }
    },
    data: [{
      value: 100,
      symbolPosition: 'end'
    }, {
      value: 50,
      symbolPosition: 'end'
    }, {
      value: 20,
      symbolPosition: 'end'
    }]
  }, {
    name: '年报上报率2',
    type: 'pictorialBar',
    symbolSize: [50, 30],
    symbolOffset: [0, 20],
    z: 12,
    itemStyle: {
      normal: {
        color: '#14b1eb'
      }
    },
    data: [100, 50, 20]
  }, {
    name: '年报上报率1',
    type: 'pictorialBar',
    symbolSize: [100, 60],
    symbolOffset: [0, 37],
    z: 11,
    itemStyle: {
      normal: {
        color: 'transparent',
        borderColor: '#14b1eb',
        borderWidth: 5
      }
    },
    data: [100, 50, 20]
  }, {
    name: '年报上报率',
    type: 'pictorialBar',
    symbolSize: [150, 85],
    symbolOffset: [0, 50],
    z: 10,
    itemStyle: {
      normal: {
        color: 'transparent',
        borderColor: '#14b1eb',
        borderType: 'dashed',
        borderWidth: 5
      }
    },
    data: [100, 50, 20]
  }, {
    type: 'bar',
    itemStyle: {
      normal: {
        color: '#14b1eb',
        opacity: 0.7
      }
    },
    silent: true,
    barWidth: 50,
    barGap: '-100%', // Make series be overlap
    data: [100, 50, 20]
  }]
}

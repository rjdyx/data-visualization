const chartsOption1 = {
  title: {
    text: '畅销饮料占比饼状图',
    offset: [0, -25],
    style: {
      fill: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      textBaseline: 'bottom'
    }
  },
  legend: {
    data: ['同比', '环比'],
    orient: 'horizontal',
    textStyle: {
      fontFamily: 'Arial',
      fontSize: 13,
      fill: '#fff'
    }
  },
  series: [
    {
      name: '同比',
      type: 'pie',
      data: [
        { name: '可口可乐', value: 93 },
        { name: '百事可乐', value: 32 },
        { name: '哇哈哈', value: 65 },
        { name: '康师傅', value: 44 },
        { name: '统一', value: 52 }
      ],
      radius: '40%',
      outsideLabel: {
        show: false
      },
      insideLabel: {
        show: true
      }
    },
    {
      name: '环比',
      type: 'pie',
      data: [
        { name: '可口可乐', value: 93 },
        { name: '百事可乐', value: 32 },
        { name: '哇哈哈', value: 65 },
        { name: '康师傅', value: 44 },
        { name: '统一', value: 52 }
      ],
      radius: ['60%', '70%'],
      outsideLabel: {
        show: false
      }
    }
  ]
}

const chartsOption2 = {
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    }
  ],
  lineWidth: 10,
  radius: '60%',
  activeRadius: '75%',
  center: ['50%', '40%']
}

const chartsOption3 = {
  title: {
    text: '计划资金累计完成情况',
    offset: [0, -20],
    style: {
      fill: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      textBaseline: 'bottom'
    }
  },
  series: [
    {
      type: 'pie',
      data: [
        { name: '可口可乐', value: 93 },
        { name: '百事可乐', value: 32 },
        { name: '哇哈哈', value: 65 },
        { name: '康师傅', value: 44 },
        { name: '统一', value: 52 }
      ],
      outsideLabel: {
        show: false
      },
      insideLabel: {
        show: true
      },
      roseType: true,
      radius: '75%',
      center: ['50%', '60%']
    }
  ]
}

export default [chartsOption1, chartsOption2, chartsOption3]

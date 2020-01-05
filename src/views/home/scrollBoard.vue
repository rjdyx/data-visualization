<template>
  <dv-border-box-7 :color="['#2e6099']" id="scroll-board">
    <dv-scroll-board :config="config" />
  </dv-border-box-7>
</template>

<script>
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['时间', '病害信息', '数量', '标段'],
        data: [
          ['2019-07-01', '路面危害-松散', '5', 'xxxxxxx'],
          ['2019-07-02', '路面危害-路面油污清理', '13', 'xxxxxxx'],
          ['2019-07-03', '交安设施-交通标志牌结构', '6', 'xxxxxxx'],
          ['2019-07-04', '路基危害-防尘网', '2', 'xxxxxxx'],
          ['2019-07-05', '交安设施-交通标志牌结构', '1', 'xxxxxxx'],
          ['2019-07-06', '路面危害-松散', '3', 'xxxxxxx'],
          ['2019-07-07', '路基危害-防尘网', '4', 'xxxxxxx'],
          ['2019-07-08', '路面危害-路面油污清理', '2', 'xxxxxxx'],
          ['2019-07-09', '交安设施-交通标志牌结构', '5', 'xxxxxxx'],
          ['2019-07-10', '路基危害-防尘网', '3', 'xxxxxxx']
        ],
        index: true,
        columnWidth: [50, 150, 200, 100, 100],
        align: ['center'],
        rowNum: 3,
        headerBGC: 'transparent',
        headerHeight: 45,
        oddRowBGC: 'transparent',
        evenRowBGC: 'transparent'
      }
    }
  }
}
</script>

<style scoped lang="less">
#scroll-board {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  margin-bottom: 10px;
}
</style>

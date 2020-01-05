<template>
  <div id="cards">
    <dv-border-box-12 class="card-item">
      <dv-charts :option="chartsOption1" />
    </dv-border-box-12>

    <water-level-chart class="card-item card-item-water" />

    <dv-border-box-12 class="card-item">
      <dv-charts :option="chartsOption3" />
    </dv-border-box-12>

    <dv-border-box-12 class="card-item">
      <div class="active-ring-chart-title">计划资金累计完成情况</div>
      <dv-active-ring-chart :config="chartsOption2" class="chart-container" />
    </dv-border-box-12>
  </div>
</template>

<script>
import chartsOption from './option'
import waterLevelChart from './waterLevelChart'
export default {
  name: 'Cards',
  data () {
    return {
      chartsOption1: chartsOption[0],
      chartsOption2: chartsOption[1],
      chartsOption3: chartsOption[2]
    }
  },
  components: {
    waterLevelChart
  }
}
</script>

<style scoped lang="less">
#cards {
  display: flex;
  justify-content: space-around;
  height: 33%;

  .card-item {
    width: 24%;
    display: flex;
    flex-direction: column;
  }

  .card-item-water {
    width: 20%;
  }

  .active-ring-chart-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: center;
  }

  .chart-container {
    width:100%;
    height:100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<template>
  <dv-border-box-12 id="water-level-chart">
    <div class="water-level-chart-title">计划资金累计完成情况</div>

    <div class="chart-container">
      <dv-water-level-pond :config="config" />
    </div>
  </dv-border-box-12>
</template>

<script>
export default {
  name: 'WaterLevelChart',
  data () {
    return {
      config: {
        data: [45],
        shape: 'round',
        waveHeight: 25,
        waveNum: 2
      }
    }
  }
}
</script>

<style lang="less">
#water-level-chart {
  width: 100%;
  display: flex;
  flex-direction: column;

  .water-level-chart-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: center;
  }

  .chart-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dv-water-pond-level {
    max-width: 90%;
    width: 200px;
    height: 200px;
    border: 10px solid #19c3eb;
    border-radius: 50%;

    ellipse {
      stroke: transparent !important;
    }

    text {
      font-size: 40px;
    }
  }
}
</style>

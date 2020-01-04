<template>
  <dv-border-box-8 :color="['#2e6099']" id="ranking-board">
    <div class="ranking-board-title">巡查上报记录数量</div>
    <dv-scroll-ranking-board :config="config" />
  </dv-border-box-8>
</template>

<script>
export default {
  name: 'RankingBoard',
  data () {
    return {
      config: {
        data: [
          {
            name: '日常养护',
            value: 55
          },
          {
            name: '交通事故',
            value: 120
          },
          {
            name: '路面',
            value: 78
          },
          {
            name: '桥通',
            value: 66
          },
          {
            name: '计日工',
            value: 80
          },
          {
            name: '路基',
            value: 45
          },
          {
            name: '交安设施',
            value: 29
          },
          {
            name: '除雪',
            value: 29
          }
        ],
        rowNum: 9
      }
    }
  }
}
</script>

<style lang="less">
#ranking-board {
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>

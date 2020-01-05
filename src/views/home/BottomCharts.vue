<template>
  <div class="bottom-charts">
    <div class="bottom-charts-top">
      <my-bar></my-bar>
    </div>
    <dv-border-box-4 :color="['#0ddffc', '#04466e']" class="bottom-charts-bottom">
      <div class="cart-item">
        <div id="cusBar1"></div>
      </div>
      <div class="cart-item">
        <div id="cusBar2"></div>
      </div>
      <div class="cart-item">
        <div id="cusBar3"></div>
      </div>
    </dv-border-box-4>
  </div>
</template>

<script>
import myBar from '@components/bar'

export default {
  name: 'BottomCharts',
  components: {
    myBar
  },
  data () {
    return {
      config1: {
        data: [
          {
            name: '收费站',
            value: 356
          },
          {
            name: '监控中心',
            value: 215
          },
          {
            name: '道路外场',
            value: 90
          },
          {
            name: '其他',
            value: 317
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config2: {
        data: [
          {
            name: '收费站',
            value: 615
          },
          {
            name: '监控中心',
            value: 322
          },
          {
            name: '道路外场',
            value: 198
          },
          {
            name: '其他',
            value: 80
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config3: {
        data: [
          {
            name: '收费站',
            value: 452
          },
          {
            name: '监控中心',
            value: 512
          },
          {
            name: '道路外场',
            value: 333
          },
          {
            name: '其他',
            value: 255
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config4: {
        data: [
          {
            name: '收费站',
            value: 156
          },
          {
            name: '监控中心',
            value: 415
          },
          {
            name: '道路外场',
            value: 90
          },
          {
            name: '其他',
            value: 210
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      }
    }
  }
}
</script>

<style scoped lang="less">
.bottom-charts {
  width: 75%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  .bottom-charts-top {
    width: 100%;
    flex: 1 1 50px;
    display: flex;
    flex-direction: row-reverse;
  }

  .bottom-charts-bottom {
    width: 100%;
    flex: 1 1 150px;

    .border-box-content {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .cart-item {
      width: 25%;
    }
  }
}
</style>

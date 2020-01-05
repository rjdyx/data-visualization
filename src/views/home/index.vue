<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="center-title">
        首页
      </div>
      <map-china></map-china>
      <div class="main-content">
        <div class="block-top-content">
          <div class="block-top-left">
            <my-border-box-8 class="card-item">
              <div id="select-top-title">数据类型</div>
              <ul id="select-top-content">
                <li :class="{ active: showActive === 1 }" @click="changeActive(1)">基地</li>
                <li :class="{ active: showActive === 2 }" @click="changeActive(2)">物流</li>
                <li :class="{ active: showActive === 3 }" @click="changeActive(3)">销量</li>
              </ul>
            </my-border-box-8>
            <my-border-box-8 class="card-item"></my-border-box-8>
            <left-top-bottom-cmp class="card-item-left-cmp"></left-top-bottom-cmp>
          </div>
          <div class="block-top-right">
            <scroll-board class="card-item-right-top-cmp"></scroll-board>
            <capsule-chart class="card-item-right-bottom-cmp"></capsule-chart>
          </div>
        </div>
        <div class="block-bottom-content">
          <left-bottom-cmp class="block-bottom-left-cmp"></left-bottom-cmp>
          <bottom-charts></bottom-charts>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>

import mapChina from '@components/map'
import myBorderBox8 from '@components/borderBox/myBorderBox8'
import scrollBoard from './scrollBoard'
import capsuleChart from './capsuleChart'
import leftTopBottomCmp from './leftTopBottomCmp'
import leftBottomCmp from './leftBottomCmp'
import BottomCharts from './BottomCharts'

export default {
  name: 'home',
  components: {
    mapChina,
    myBorderBox8,
    scrollBoard,
    capsuleChart,
    leftTopBottomCmp,
    leftBottomCmp,
    BottomCharts
  },
  data () {
    return {
      showActive: 1
    }
  },
  methods: {
    changeActive (index) {
      this.showActive = index
    }
  }
}
</script>

<style scoped lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  .center-title {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 30px;
  }

  #dv-full-screen-container {
    background-image: url('../../assets/img/bg-city.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .block-top-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;

    .block-top-left, .block-top-right {
      display: flex;
      flex-direction: column;
      width: 25%;

      #select-top-title {
        margin: 10px;
      }

      #select-top-content {
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 0;
        margin: 20px;

        .active {
          color: #2196F3;
        }

        li:hover {
          cursor: pointer;
          color: #2196F3;
        }
      }
    }
  }

  .card-item {
    width: 100%;
    height: 100px;
  }

  .card-item-left-cmp {
    width: 100%;
    flex: 1;
  }

  .card-item-right-top-cmp {
    width: 100%;
    height: 200px;
  }

  .card-item-right-bottom-cmp {
    width: 100%;
    flex: 1;
  }

  .block-bottom-content {
    flex: 1;
    display: flex;
    box-sizing: border-box;

    .block-bottom-left-cmp {
      width: 25%;
    }
  }
}
</style>

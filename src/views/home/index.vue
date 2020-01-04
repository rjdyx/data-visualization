<template>
  <div id="data-view">
    <dv-full-screen-container>
      <top-header></top-header>
      <map-china></map-china>
      <div class="main-content">

        <div class="block-left-right-content">
          <ranking-board />

          <div class="block-top-bottom-content">
            <div class="block-top-content">
              <scroll-board />
            </div>

            <cards />
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>

import mapChina from '@components/map/index'
import topHeader from './topHeader'
import rankingBoard from './rankingBoard'
import scrollBoard from './scrollBoard'
import cards from './cards'

export default {
  name: 'home',
  components: {
    mapChina,
    topHeader,
    rankingBoard,
    scrollBoard,
    cards
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

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
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    padding-bottom: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    height: 70%;
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
</style>

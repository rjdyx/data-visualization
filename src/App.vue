<template>
  <div id='app'>
    <!-- <el-menu
      v-show='showMenu'
      default-active='2'
      class='menu-model'
      :router='true'>
      <el-menu-item index='/'>
        <i class='el-icon-location'></i>
        <span slot='title'>导航一</span>
      </el-menu-item>
      <el-menu-item index='/page2'>
        <i class='el-icon-menu'></i>
        <span slot='title'>导航二</span>
      </el-menu-item>
      <el-menu-item index='/page3'>
        <i class='el-icon-setting'></i>
        <span slot='title'>导航三</span>
      </el-menu-item>
    </el-menu> -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      showMenu: true
    }
  },
  mounted () {
    document.onkeydown = (event) => {
      let e = event || window.event || arguments.callee.caller.arguments[0]
      if (e && e.keyCode === 122) { // 捕捉F11键盘动作
        e.preventDefault() // 阻止F11默认动作
        let el = document.documentElement
        let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen // 定义不同浏览器的全屏API
        // 执行全屏
        if (typeof rfs !== 'undefined' && rfs) {
          rfs.call(el)
        }
        // 监听不同浏览器的全屏事件，并件执行相应的代码
        document.addEventListener('webkitfullscreenchange', () => {
          this.showMenu = !this.showMenu
        }, false)

        document.addEventListener('fullscreenchange', () => {
          this.showMenu = !this.showMenu
        }, false)

        document.addEventListener('mozfullscreenchange', () => {
          this.showMenu = !this.showMenu
        }, false)

        document.addEventListener('msfullscreenchange', () => {
          this.showMenu = !this.showMenu
        }, false)
      }
    }
  }
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

  // .menu-model {
  //   position: fixed;
  //   left: 0;
  //   top: 0;
  //   width: 200px;
  //   height: 100%;
  //   background: black;
  //   z-index: 1000;
  // }

  // .el-menu {
  //   border: 0;
  // }
}
</style>

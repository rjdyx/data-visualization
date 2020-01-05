<template>
  <div class="my-border-box-8">
    <svg width="470" height="100" class="my-svg-container">
      <defs>
        <path
          id="border-box-8-path-1578209567471"
          d="M2.5, 2.5 L467.5, 2.5 L467.5, 97.5 L2.5, 97.5 L2.5, 2.5"
          fill="transparent"
        />
        <radialGradient id="border-box-8-gradient-1578209567471" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <mask id="border-box-8-mask-1578209567471" />
      </defs>
      <use stroke-width="1" xlink:href="#border-box-8-path-1578209567471" stroke="#235fa7" />
      <use
        stroke-width="3"
        xlink:href="#border-box-8-path-1578209567471"
        mask="url(#border-box-8-mask-1578209567471)"
        stroke="#4fd2dd"
      >
      </use>
    </svg>
    <div class="my-border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myBorderBox8'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-border-box-8 {
  position: relative;
  width: 100%;
  height: 100%;

  .my-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
  }

  .my-border-box-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>

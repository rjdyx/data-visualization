<template>
  <div class="my-decoration-5">
    <svg width="768" height="60">
      <polyline fill="transparent" stroke-width="3" points="0,12 138.24,12 153.60000000000002,24 192,24 207.36,36 552.96,36 576,24 614.4000000000001,24 629.76,12 768,12" stroke="#3f96a5">
        <animate attributeName="stroke-dasharray" attributeType="XML" from="0, 391.66653108874107, 0, 391.66653108874107" to="0, 0, 783.3330621774821, 0" dur="1.2s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines="0.4,1,0.49,0.98" repeatCount="1"></animate>
      </polyline>
      <polyline fill="transparent" stroke-width="2" points="230.39999999999998,48 537.5999999999999,48" stroke="#3f96a5">
        <animate attributeName="stroke-dasharray" attributeType="XML" from="0, 153.59999999999997, 0, 153.59999999999997" to="0, 0, 307.19999999999993, 0" dur="1.2s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines=".4,1,.49,.98" repeatCount="1"></animate>
      </polyline>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MyDecoration5'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-decoration-5 {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="webBgMainDivType">
    <img class="webbgimgType" :src="data">
    <div class="webSlotType">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
//   created() {
//     console.log("data", this.data);
//   }
};
</script>

<style scoped lang="less">
.webBgMainDivType {
  position: relative;
  .webbgimgType {
    width: 100%;
    height: auto;
    //   margin-bottom: -5px;
  }
  .webSlotType {
    position: absolute;
    top: 80px;
    width: 100%;
    height: auto;
  }
}

</style>
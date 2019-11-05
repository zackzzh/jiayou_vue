<template>
  <div class="appBgMainDivType">
    <img class="appbgimgType" :src="data">
    <div class="appSlotType">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
  //   created() {
  //     console.log("data", this.data);
  //   }
};
</script>

<style scoped lang="less">
.appBgMainDivType {
  position: relative;
  .appbgimgType {
    width: 100%;
    height: auto;
    //   margin-bottom: -5px;
  }
  .appSlotType {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
  }
}
</style>
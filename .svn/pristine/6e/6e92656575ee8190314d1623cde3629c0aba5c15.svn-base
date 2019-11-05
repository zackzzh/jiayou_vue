<template>
  <div class="supportImgDivType">
    <img :src="data.imgUrl" v-if="data.imgUrl">
    <div class="middleDivType">
      <slot name="middleSlot"></slot>
    </div>
    <div class="tableDivSlot">
      <slot name="tableSlot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped lang="less">
.supportImgDivType {
  //   position: relative;
//   margin-bottom: -5px;
  text-align: center;
  img {
    width: 100%;
  }
  .middleDivType {
    position: relative;
    // position: absolute;
    // bottom: 0;
    margin: 0 12%;
  }
  .tableDivSlot {
    margin: 50px 12%;
    // text-align: center;
  }
}
</style>
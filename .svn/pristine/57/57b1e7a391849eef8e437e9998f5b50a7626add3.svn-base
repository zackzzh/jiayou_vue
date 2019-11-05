<template>
  <div class="homeImgMainDivType">
    <!-- <div :id="item.link" v-for="item in list" :key="item.key"> -->
    <img
      v-if="list.imgUrl"
      class="bgImgType"
      id="imgType"
      :src="list.imgUrl"
      :class="{'sizeChage':list.sizeBg}"
      :style="{'height':height + 'px'}"
    >
    <!-- 放中间的轮播图 -->
    <div class="centerSlotType">
      <slot name="centerImg"></slot>
    </div>
    <div class="bottomSlotType">
      <slot name="bottomImg"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      height: "atuo"
    };
  },
  created() {
    if (this.$router.history.current.path === "/home") {
      this.height = document.documentElement.clientHeight;
    }
  }
};
</script>

<style scoped lang="less">
.homeImgMainDivType {
  position: relative;
  margin-bottom: -5px;

  // overflow: hidden;
  .bgImgType {
    width: 100%;
    height: auto;
    // height: 100%;
  }

  .sizeChage {
    height: 1658px !important;
  }

  .centerSlotType {
    color: aliceblue;
    /* 垂直居中，以及水平居中 */
    text-align: center;
    position: absolute;
    top: 80px;
    left: 15%;
    width: 70%;
    height: 85%;
    /* margin: -15% 0 0 -25%; */
  }

  .bottomSlotType {
    // margin-top: 10%;
    text-align: center;
    // position: absolute;
    // top: 0;
    width: 100%;
  }
}
</style>

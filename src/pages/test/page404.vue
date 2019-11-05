<template>
  <div class="mainDivType">
    <img style="width: 100%" src="../../assets/common/page404.png">
    <Button class="btuType" type="text" icon="md-fastforward" ghost :to="{path: '/home'}">返回首页</Button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.mainDivType {
  position: relative;
  text-align: center;
  .btuType {
    position: absolute;
    bottom: 12%;
    // left: 50%;
    // margin-right: 50%;
    // width: 150px;
    font-size: 30px;
    color: blue;
  }
}
</style>
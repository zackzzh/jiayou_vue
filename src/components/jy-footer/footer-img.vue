<template>
  <div class="footerImgType">
    <!-- 这是logo和二维码 -->
    <img src="@/assets/common/GUANGZHOUJIAYOU@2x.png" class="logo">
    <img src="@/assets/common/qrCode@2x.png" class="code">
  </div>
</template>

<script>
  export default {};

</script>

<style scoped lang="less">
  .logo {
    width: 100%;
  }

  .code {
    width: 192px;
    height: 192px;
    ;
  }

  @media screen and(min-width: 760px) and(max-width: 1000px) {
    .footerImgType {
      img {
        width: 80%;
      }
    }
  }

</style>

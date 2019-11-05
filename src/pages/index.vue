<template>
  <div>
    <!-- 公共导航栏 -->
    <div>
      <keep-alive>
        <jy-header></jy-header>
      </keep-alive>
    </div>
    <!-- <div v-else class="header">
      <div class="header-title">广州甲由科技</div>
      <div class="icon">
        <Icon type="ios-home" />
      </div>
    </div>-->
    <router-view/>
    <!-- 公共页脚，页面底部 -->
    <!-- <jy-footer/> -->
  </div>
</template>

<script>
import jyHeader from "@/components/jy-header/index";
import jyFooter from "@/components/jy-footer/index";
// var rootResize = function () {
//   var baseFontSize = 100;
//   var baseWidth = 750;
//   var minWidth = 320;
//   var clientWidth = document.documentElement.clientWidth || window.innerWidth;
//   var innerWidth = Math.max(Math.min(clientWidth, baseWidth), minWidth);

//   var rem = clientWidth / (baseWidth / baseFontSize);
//   if (innerWidth == 828 || innerWidth == 320) {
//     rem = innerWidth / (baseWidth / baseFontSize)
//   }
//   document.querySelector('html').style.fontSize = rem + 'px';
// };
// rootResize();
// window.onresize = function () {
//   rootResize()
// }
export default {
  data() {
    return {};
  },
  components: {
    jyHeader,
    jyFooter
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4b9edd;
  position: fixed;
  top: 0;
  z-index: 999;
  .header-title {
    font-size: 0.34rem;
    color: #fff;
  }

  .icon {
    color: #fff;
    font-size: 0.44rem;
    position: absolute;
    top: 50%;
    right: 0.3rem;
    transform: translateY(-50%);
  }
}
</style>

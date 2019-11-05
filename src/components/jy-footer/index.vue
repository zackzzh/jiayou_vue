<template>
  <div
    class="footerDivType"
    :class="{'changeStyle':changeStyle}"
    style="background-image:url('static/jyfooter/bottomImg.png')"
  >
    <Row type="flex" justify="center" align="bottom">
      <i-col offset="3" span="3">
        <footer-img :class="animationFun.logoIn"></footer-img>
      </i-col>
      <i-col offset="2" span="16">
        <footer-card
          :list="footerData"
          :data="footerList"
          :animationData="animationFun"
          @fromCard="handlerClick"
        ></footer-card>
      </i-col>
    </Row>
    <div class="bottomType">
      <p @click="beian">粤ICP备18144457号 广州甲由信息技术有限公司</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import footerCard from "./footer-card";
import footerImg from "./footer-img";

import footerData from "./footerData";

export default {
  components: {
    footerCard,
    footerImg
  },
  props: ["animationData", "changeStyle"],
  data() {
    return {
      footerData: footerData
    };
  },
  created() {
    this.getFooterList();
  },
  // mounted() {
  //   console.log("footerData", this.footerList);
  // },
  computed: {
    ...mapState("aboutUs", ["footerList"]),
    animationFun() {
      return this.animationData || {};
    }
  },

  methods: {
    ...mapActions("aboutUs", ["getFooterList"]),
    beian() {
      window.open("http://www.beian.miit.gov.cn");
    },
    handlerClick(val, parentVal) {
      // console.log("子类传过来", val, parentVal);
      if (parentVal.id === "f1") {
        // 首页跳转
        this.$go({
          path: "/home",
          query: val
        });
      } else if (parentVal.id === "f2") {
        // 精品案例跳转
        if (val.insturctions.length > 0) {
          this.$go({
            path: "/cases",
            query: {
              id: val.id
            }
          });
        }
      } else if (parentVal.id === "f3") {
        // 新闻动态跳转
        this.$go({
          path: "/trends",
          query: {
            id: val.id
          }
        });
      } else if (parentVal.id === "f4") {
        // 加入我们跳转
        this.$go({
          path: "/aboutUs",
          query: {
            pathName: "/aboutUs/joinUs"
          }
        });
      } else if (parentVal.id === "f5") {
        // 关于我们跳转
        this.$go({
          path: "/aboutUs",
          query: {
            pathName: val.pathName
          }
        });
        // if (val.id === "f5-7") {
        //   // 跳转至测试
        //   // const handlerHref = this.$go({
        //   //   path: "/test"
        //   // });
        //   const handlerHref = this.$router.resolve({
        //     path: "/test"
        //   });
        //   window.open(handlerHref.href, "_blank");
        //   // console.log("handlerHref", routeData);
        // }
      }
    }
  }
};
</script>

<style scoped lang="less">
.footerDivType {
  width: 100%;
  padding-top: 1%;
  overflow: auto;
  padding-bottom: 1%;

  .bottomType {
    margin-top: 3%;
    border-top: 1px solid #e7f8ff;
    text-align: center;
    font-size: 14px;
    color: #e7f8ff;

    p {
      cursor: pointer;
      margin-top: 0.5%;
    }
  }
}
</style>

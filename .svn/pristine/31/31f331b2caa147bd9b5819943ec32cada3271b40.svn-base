<template>
  <div>
    <home-img :list="item" v-for="item in imgList" :key="item.key">
      <!-- <web-style-one v-if="item.isCenterImg" slot="centerImg" :list="styleOneData"></web-style-one>-->
      <app-custom v-if="item.isCenterImg" slot="centerImg" :list="customData"></app-custom>
      <web-style-two v-if="item.isStyleTwo" slot="centerImg" :list="testData"></web-style-two>
      <web-case v-if="item.isBottomImg" slot="bottomImg" :list="caseList" :data="casesDataFun" @handlerClick="handlerClick"></web-case>
    </home-img>
    <more-dit></more-dit>
    <jy-footer />
  </div>
</template>

<script>
  import {
    mapActions,
    mapState
  } from "vuex";
  import moreDit from "@/components/more-dit";
  import jyFooter from "@/components/jy-footer/index";

  import homeImg from "@/pages/home/home-img";
  import webCase from "@/pages/product/web-design/web-case";
  import webStyleTwo from "@/pages/product/web-design/web-style-two";
  import appCustom from "./app-custom";

  import appDevelopData from "./appDevelopData";
  export default {
    components: {
      jyFooter,
      homeImg,
      webCase,
      webStyleTwo,
      appCustom,
      moreDit
    },
    created() {
      document.body.style.cssText = "overflow: auto";
      document.documentElement.scrollTop = 0;
      // console.log("webImgList", this.$route.query);
      const val = {
        page: 1, //当前页码
        limit: 6 //一页多少条
        //typeId: 1
      };
      Object.assign(val, this.$route.query);
      this.getCasesData(val);
    },
    computed: {
      ...mapState("cases", ["casesData"]),
      casesDataFun() {
        return this.casesData.page || {};
      }
      // ...mapGetters("test", ["getTest"])
    },
    data() {
      return {
        imgList: appDevelopData.imgList,
        caseList: appDevelopData.caseList,
        testData: appDevelopData.testData,
        customData: appDevelopData.appCustom
      };
    },
    methods: {
      ...mapActions("cases", ["getCasesData"]),
      handlerClick(val) {
        this.$go({
          path: "/cases",
          query: {
            id: val.id
          }
        });
      }
    }
  };

</script>

<style scoped>
</style>

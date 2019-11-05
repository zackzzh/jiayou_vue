
<template>
  <div>
    <!-- 这是移动开发 -->
    <home-img :list="item" v-for="item in imgList" :key="item.key">
      <applet-one v-if="item.isCenterImg" slot="centerImg" :list="appletOne"></applet-one>
      <applet-advantage v-if="item.isAdvantage" slot="centerImg" :list="advantage"></applet-advantage>
      <!-- isCase -->
      <applet-case
        v-if="item.isCase"
        slot="centerImg"
        :list="caseDemoData"
        :data="casesData.page"
        @handlerClick="handlerClick"
      ></applet-case>
    </home-img>
    <more-dit></more-dit>
    <jy-footer/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import jyFooter from "@/components/jy-footer/index";
import moreDit from "@/components/more-dit";
import homeImg from "@/pages/home/home-img";
// applet-one
import appletOne from "./applet-one";
import appletAdvantage from "./applet-advantage";
import appletCase from "./applet-case";

import appletData from "./appletData";

export default {
  components: {
    jyFooter,
    homeImg,
    appletOne,
    appletAdvantage,
    appletCase,
    moreDit
  },
  created() {
    document.body.style.cssText = "overflow: auto";
    document.documentElement.scrollTop = 0;
    // console.log("appletData", this.$route.query);
    const pageNum = {
      page: 1, //当前页码
      limit: 6 //一页多少条
    };
    Object.assign(pageNum, this.$route.query);
    this.getCasesData(pageNum);
  },
  computed: {
    ...mapState("cases", ["casesData"])
  },
  data() {
    return {
      imgList: appletData.imgList,
      appletOne: appletData.appletOne,
      advantage: appletData.advantage,
      caseDemoData: appletData.caseData
    };
  },
  methods: {
    ...mapActions("cases", ["getCasesData"]),
    handlerClick(val) {
      // console.log("从子类传过来的", val);
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
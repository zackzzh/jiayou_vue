<template>
  <div>
    <!-- 配套服务 -->
    <support-img :id="item.key" :data="item" v-for="item in supportData" :key="item.key">
      <!-- 域名、邮箱，虚拟主机 -->
      <div v-if="item.middleData" slot="middleSlot">
        <support-card :data="item.middleData"/>
        <support-step :data="item.bottomData"/>
      </div>
      <div v-if="item.tableData" slot="tableSlot">
        <p class="itemTitleType">{{item.title}}</p>
        <Table
          :columns="item.tableData.columns"
          :data="item.tableData.data"
          size="large"
          stripe
          border
        ></Table>
      </div>
      <!-- 服务器租用 -->
      <div style="padding-top: 80px" v-if="item.cardList" slot="middleSlot">
        <!-- <p :id="item.key" class="itemTitleType">{{item.title}}</p> -->
        <!-- <support-server-card :data="item.cardList" /> -->
        <support-options :data="item.cardList"></support-options>
      </div>
    </support-img>
    <more-dit></more-dit>
    <jy-footer/>
  </div>
</template>

<script>
import jyFooter from "@/components/jy-footer/index";
import moreDit from "@/components/more-dit";
import supportImg from "./support-img";
import supportCard from "./support-card";
import supportStep from "./support-step";
import supportServerCard from "./support-server-card";
import supportOptions from "./support-options";
import supportData from "./supportServiceData";

export default {
  components: {
    jyFooter,
    supportImg,
    supportCard,
    supportServerCard,
    moreDit,
    supportOptions,
    supportStep
  },
  created() {
    document.body.style.cssText = "overflow: auto";
    document.documentElement.scrollTop = 0;
    console.log("this.$route.query", this.$route.query);
  },
  mounted() {
    // const elVal = this.$el.querySelector("#domain");
    const offsetTopNum = this.getElOffsetTop(this.$route.query.pathName);

    this.hanlerScroll(offsetTopNum);
    console.log("elVal", offsetTopNum);
  },
  watch: {
    routeDataFun: function(newVal, oldVal) {
      const offsetTopval = this.getElOffsetTop(newVal);
      const scrollTopVal = document.documentElement.scrollTop;
      this.hanlerScroll(offsetTopval, scrollTopVal);
    }
  },
  computed: {
    routeDataFun() {
      return this.$route.query.pathName;
    }
  },
  data() {
    return {
      supportData,
      inputValue: "",
      selectValue: ".com"
    };
  },
  methods: {
    getElOffsetTop(val) {
      // 传入路由值
      // 获取当前的offsetTop的值
      if (val) {
        const regex = /\w+$/;
        const pathVal = "#" + val.match(regex)[0];
        const anchor = this.$el.querySelector(pathVal);
        return anchor.offsetTop;
      } else {
        return 0;
      }
    },
    hanlerScroll(offsetTopval = 0, scrollTopVal = 0) {
      // 滚动到指定位置
      document.documentElement.scrollTop = scrollTopVal;

      const timer = setInterval(function() {
        if (scrollTopVal < offsetTopval) {
          document.documentElement.scrollTop += 30;
          if (document.documentElement.scrollTop >= offsetTopval) {
            // console.log("anchor",document.documentElement.scrollTop,offsetTopval)
            clearInterval(timer);
          }
        } else {
          document.documentElement.scrollTop -= 30;
          if (document.documentElement.scrollTop <= offsetTopval) {
            // console.log("anchor",document.documentElement.scrollTop,offsetTopval)
            clearInterval(timer);
          }
        }
      }, 1);
    }
  }
};
</script>

<style scoped lang="less">
.itemTitleType {
  margin-bottom: 26px;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 5px;
}
</style>

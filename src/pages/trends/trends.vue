<template>
  <div>
    <!-- 这是行业动态 -->
    <img class="bgImgType" :src="trendsData.bgImgUrl">
    <div class="rowDivType" v-if="!newsIdFun.id">
      <!-- <Row>
        <i-col span="15">
          <trends-left :data="newsListData"/>
        </i-col>
        <i-col offset="1" span="8">
          <trends-news :list="newsData" :data="hotNewsData"/>
        </i-col>
      </Row>-->
      <trends-left :data="newsListData" @handlerMenu="handlerMenu" @handlerClick="handlerClick"/>
    </div>
    <!-- 新闻详情 -->
    <div v-else class="detailsType">
      <div class="titleDivType">
        <!-- {{newsInfoData}} -->
        <div class="titleType">{{newsInfoData.title}}</div>
        <div class="subtitleType">{{newsInfoData.subtitle}}</div>
        <div class="timeType">
          <p>作者：{{newsInfoData.author}}</p>
          <p>创建时间：{{newsInfoData.createtime}}</p>
        </div>
        <img :src="newsInfoData.picUrl">
      </div>
      <div v-html="newsInfoData.content"></div>
    </div>
    <jy-footer/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import jyFooter from "@/components/jy-footer/index";

import trendsNews from "./trends-news";
import trendsLeft from "./trends-left";

import trendsData from "./trendsData";

export default {
  components: {
    jyFooter,
    trendsNews,
    trendsLeft
  },
  computed: {
    // ...mapGetters("test", ["getTest"])
    ...mapState("trends", ["newsListData", "newsInfoData"]),
    newsIdFun() {
      // console.log("哈哈哈", this.$route.query);
      this.getData();
      document.documentElement.scrollTop = 0;

      return this.$route.query;
    }
  },
  data() {
    return {
      trendsData,
      newsData: trendsData.newData,
      leftData: trendsData.leftData
    };
  },
  created() {
    document.documentElement.scrollTop = 0;
    document.body.style.cssText = "overflow: auto";
    this.getData();
  },
  methods: {
    ...mapActions("trends", ["newsList", "getNewsInfo"]),
    getData() {
      if (this.$route.query.id) {
        this.getNewsInfo(this.$route.query);
        // console.log("执行getData：", this.$route.query);
      } else {
        this.newsList();
      }
    },
    handlerMenu(val) {
      // console.log("trends点击：", val);
      this.newsList(val);
    },
    handlerClick(val) {
      // console.log("点击handlerClick：", val);
      this.$go({
        path: "/trends",
        query: {
          id: val.id
        }
      });
      // this.getData();
      // this.getNewsInfo(val);
    }
  }
};
</script>

<style scoped lang="less">
/* box-shadow: 0 0 40px rgba(0,0,0,0.21) */
.bgImgType {
  width: 100%;
  height: auto;
}
.rowDivType {
  margin: 3% 15%;
}
.detailsType {
  width: 100%;
  padding: 3% 12%;
  .titleDivType {
    text-align: center;
    .titleType {
      font-size: 42px;
      font-weight: bold;
    }
    .subtitleType {
      font-size: 20px;
      margin: 10px 0;
    }
    .timeType {
      margin: 10px 13%;
      display: flex;
      justify-content: space-between;
      // p {
      //   display: inline-block;
      // }
    }
  }
}
</style>
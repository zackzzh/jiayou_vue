<template>
  <div>
    <!-- 公共部分中间 -->
    <!-- {{commonData}} background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat; -->
    <div class="contentDivType" :style="`background-image:url(${commonData.imgUrl})`">
      <img :src="list.iconUrl">
      <p class="titleType">{{list.title}}</p>
      <div class="lineType"></div>
      <p class="contentType">{{list.content}}</p>
    </div>
    <!-- <div class="contentDivType" :style="`background: url(${commonData.iconUrl})  top no-repeat, url(${commonData.imgUrl}) left top repeat;`"></div> -->
    <!-- 公共图标部分 -->
    <Row>
      <i-col class="iconType" :class="{'active': imgShow === item.key }" span="3" v-for="item in commonData.list" :key="item.key">
        <div class="iconDivType" @mouseenter="mouseenter(item)" @mouseleave="mouseleave(item,$event)" @click="handlerClick(item)">
          <img v-show="imgShow !== item.key" :src="item.iconUrl">
          <img v-show="imgShow === item.key" :src="item.activeUrl">
          <!-- {{item}}activeUrl -->
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    props: ["list", "commonData"],
    data() {
      return {
        show: false,
        // isShow: null,
      };
    },
    wathc: {
      imgShow(newName, oldName) {

      }
    },
    computed: {
      ...mapGetters('cases', ['getImgShow']),
      ...mapState('cases', ['imgShow']),
    },
    methods: {
      ...mapMutations('cases', ['setImgShow']),
      mouseenter(val) {
        this.show = true;
        // this.isShow = val.key;
        this.setImgShow(val.key);
        // console.log("鼠标进入", val);
      },
      mouseleave(val, e) {
        // this.isShow = null;
        if (this.show) {
          this.setImgShow(null);
        }
        // console.log("鼠标离开", val);
      },
      handlerClick(val) {
        console.log("handlerClick", val);
        this.show = false;
        this.$go({
          path: val.pathName,
          query: {
            pathName: val.pathName
          }
        });
        this.setImgShow(val.key);
      }
    }
  };

</script>

<style scoped lang="less">
  .contentDivType {
    width: 72%;
    height: 500px;
    margin: -128px 14% 0 14%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center top;

    img {
      margin: 20px;
      width: 10%;
    }

    .titleType {
      font-size: 38px;
      font-weight: bold;
      color: rgba(2, 2, 2, 0.8);
    }

    .lineType {
      margin: 28px 42%;
      border-bottom: 2px solid #000000;
    }

    .contentType {
      margin: 0 110px;
      font-size: 22px;
      color: rgba(2, 2, 2, 0.55);
    }
  }

  .iconType {
    margin-top: 100px;
    cursor: pointer;

    img {
      width: 40%;
    }

    .iconDivType {
      -webkit-transition: margin 200ms;
      /* Safari */
      transition: margin 200ms;
    }

    .iconDivType:hover {
      margin-top: -10px;
    }
  }

  .active {
    .iconDivType:hover {
      margin-top: -10px;
    }

    .iconDivType {
      -webkit-transition: margin 200ms;
      /* Safari */
      transition: margin 200ms;
    }
  }

  @media screen and (max-width:768px) {
    .lineType {
      margin: 12px 42% !important;
    }

    .titleType {
      font-size: 30px !important;
    }

    .contentType {
      margin: 0 50px !important;
      font-size: 12px !important;
    }

    .contentDivType {
      height: 300px !important;
    }

    .iconType {
      margin-top: 10px;
    }
  }

  @media screen and (min-width:769px) and (max-width:1024px) {
    .lineType {
      margin: 12px 42% !important;
    }

    .titleType {
      font-size: 30px !important;
    }

    img {
      margin-bottom: 0px !important;
    }

    .contentType {
      font-size: 15px !important;
    }

    .contentDivType {
      height: 350px !important;
    }

    .iconType {
      margin-top: 50px;
    }
  }

  @media screen and (min-width:1025px) and (max-width:1280px) {
    .titleType {
      font-size: 34px !important;
    }

    .contentType {
      font-size: 18px !important;
    }

    .contentDivType {
      height: 438px !important;
    }

    .iconType {
      margin-top: 50px;
    }
  }

  @media screen and (min-width:1281px) and (max-width:1366px) {
    .titleType {
      font-size: 34px !important;
    }

    .contentType {
      font-size: 18px !important;
    }

    .contentDivType {
      height: 438px !important;
    }

    .iconType {
      margin-top: 80px;
    }
  }


  @media screen and (min-width:1367px) and (max-width:1440px) {
    .titleType {
      font-size: 34px !important;
    }

    .contentType {
      font-size: 20px !important;
    }

    .contentDivType {
      height: 438px !important;
    }
  }

</style>

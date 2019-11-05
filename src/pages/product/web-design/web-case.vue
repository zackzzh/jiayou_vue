<template>
  <div class="webCasesDivType">
    <div class="titleType">
      <p>案例墙</p>
      <p>Case Wall</p>
    </div>
    <Row :gutter="40" class="rowType" type="flex" justify="start">
      <i-col style="margin-bottom: 20px" span="8" v-for="item in data.list" :key="item.id">
        <div @mouseenter="mouseenter(item)" @mouseleave="mouseleave(item)" @click="handlerClick(item)">
          <!-- <div> -->
          <img class="imgType" :src="item.picUrl">
          <transition name="transbox">
            <div class="transbox" v-show="isDisplay===item.id">
              <div class="textTitleType" v-html="item.title"></div>
              <div class="textType" v-html="item.remark"></div>
              <!-- <Button class="btnType" size="small" ghost>{{item.title}}</Button> -->
              <div class="linkDivType">
                <a class="btnType" v-if="item.caseUrl" :href="item.caseUrl" target="_blank">
                  <Button ghost @click.stop>{{item.title}}</Button>
                </a>
                <a class="btnType" v-if="item.androidUrl" :href="item.androidUrl" target="_blank">
                  <Button ghost @click.stop>安卓下载</Button>
                </a>
                <a class="btnType" v-if="item.iosUrl" :href="item.iosUrl" target="_blank">
                  <Button ghost @click.stop>IOS下载</Button>
                </a>
                <!-- class="imgDivType" -->
                <div class="imgDivType" v-if="item.picWechat" @click.stop>
                  <img :src="item.picWechat">
                  <p>公众号</p>
                </div>
                <div class="imgDivType" v-if="item.picApplet" @click.stop>
                  <img :src="item.picApplet">
                  <p>小程序</p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ["list", "data"],
    data() {
      return {
        isDisplay: null
      };
    },
    methods: {
      mouseenter(val) {
        this.isDisplay = val.id;
        // console.log("鼠标进入事件", val, this.isDisplay);
      },
      mouseleave(val) {
        this.isDisplay = null;
        // console.log("鼠标离开事件", val);
      },
      handlerClick(val) {
        // this.isDisplay = true;
        // console.log("点击事件", val);
        this.$emit("handlerClick", val);
      }
    }
  };

</script>

<style scoped lang="less">
  .webCasesDivType {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 18% 42px 0 42px;

    .titleType {
      font-size: 56px;
      font-weight: bold;
      line-height: 60px;
      /* margin-bottom: 20px; */
    }

    .rowType {
      position: relative;
      // width: 100%;
      margin-top: 20px;

      .imgType {
        width: 100%;
        height: auto;
        box-shadow: -16px 16px 12px rgba(0, 0, 0, 0.55);
        /* box-shadow: -5px 5px 29px 12px rgba(0, 0, 0, 0.55); */
      }

      .transbox {
        /* display: none; */
        /* margin: 30px 50px; */
        position: absolute;
        top: 0;
        width: 93%;
        height: 99%;
        line-height: 20px;
        border: 1px solid black;
        background-color: rgba(0, 0, 0, 0.6);
        font-weight: bold;
        color: #ffffff;

        .textTitleType {
          /* 屏蔽罩内标题 */
          font-size: 20px;
          margin: 40px 0 20px 0;
        }

        .textType {
          /* 内容 */
          margin: 0 14px;
          text-indent: 26px;
          text-align: left;
        }

        // .btnType {
        //   margin-top: 20px;
        // }

        .linkDivType {
          margin-top: 25px;

          .btnType {
            margin: 0 30px;
          }

          .imgDivType {
            display: inline-block;

            img {
              // width: 100%;
              width: 150px;
              margin: 0 30px;
            }
          }
        }
      }

      .transbox-enter-active,
      .transbox-leave-active {
        transition: all 0.5s ease;
      }

      .transbox-enter,
      .transbox-leave-to {
        // transform: translateY(10px);
        height: 0%;
        opacity: 0;
      }

      // .displayType {
      //   /* 控制屏蔽罩是否显示 */
      //   display: none;
      // }
    }
  }

  @media screen and (min-width:769px) and (max-width:1024px) {
    .titleType {
      font-size: 44px !important;
      line-height: 50px !important;
    }

    .textTitleType {
      /* 屏蔽罩内标题 */
      font-size: 16px !important;
      margin: 0px !important;
    }

    .textType {
      line-height: 16px;
    }
  }

  @media screen and (max-width:768px){
    .titleType {
      font-size: 35px !important;
      line-height: 45px !important;
    }

    .textTitleType {
      /* 屏蔽罩内标题 */
      font-size: 16px !important;
      margin: 0px !important;
    }

    .textType {
      line-height: 16px;
    }
  }

  @media screen and (min-width:1025px) and (max-width:1280px) {
    .textTitleType {
      /* 屏蔽罩内标题 */
      font-size: 16px !important;
      margin: 0px !important;
    }

    .textType {
      line-height: 16px;
    }
  }

  @media screen and (min-width:1281px) and (max-width:1366px) {
    .textTitleType {
      /* 屏蔽罩内标题 */
      font-size: 16px !important;
      margin: 0px !important;
    }

    .textType {
      line-height: 18px;
    }
  }

  @media screen and (min-width:1367px) and (max-width:1440px) {
    .textTitleType {
      /* 屏蔽罩内标题 */
      font-size: 16px !important;
      margin: 10px !important;
    }
  }

</style>

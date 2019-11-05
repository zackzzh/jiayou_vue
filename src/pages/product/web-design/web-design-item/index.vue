<template>
  <div class="designDivType">
    <div class="swiper-pagination rightMenu animated slideInDown"></div>
    <div class="swiper-container" :style="`height: ${heightFun}px`">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in webItemData.list" :key="item.key">
          <web-item-bgimg :id="item.followId" :data="item.imgUrl">
            <Row class="webItemRowType" type="flex">
              <!-- 图片 -->
              <i-col span="12" :order="index%2===0?3:1" :class="animationData.imgIn">
                <img :class="`imgDivType${index}`" :src="item.itemImgUrl">
              </i-col>
              <!-- 空隔，相当于offset -->
              <i-col span="3" :order="index%2===0?1:3"></i-col>
              <!-- 内容标题 -->
              <i-col span="9" order="2" :class="animationData.divIn">
                <web-item-card :data="item">
                  <div>
                    <p>{{item.commonContent}}</p>
                    <div class="btuGroupType">
                      <Button class="gBtnType" ghost to="/cases">更多案例</Button>
                      <Button class="btnType" @click="modal = true">我要做网站</Button>
                    </div>
                  </div>
                </web-item-card>
              </i-col>
            </Row>
          </web-item-bgimg>
        </div>
        <div class="swiper-slide">
          <jy-footer class="jyFooterType" :changeStyle="true" />
        </div>
      </div>
    </div>
    <Modal v-model="modal" :footer-hide="true">
      <jy-modal @out="outChage"></jy-modal>
    </Modal>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";
  import jyModal from "@/components/jy-modal";
  import jyFooter from "@/components/jy-footer/index";

  import homeImg from "@/pages/home/home-img";

  import webItemBgimg from "./web-item-bgimg";
  import webItemCard from "./web-item-card";

  import webItemData from "./webItemData";

  export default {
    components: {
      jyFooter,
      homeImg,
      webItemBgimg,
      webItemCard,
      jyModal
    },
    created() {},
    mounted() {
      document.body.style.cssText = "overflow: hidden";
      document.documentElement.scrollTop = 0;
      this.setSlideToNum(this.$route.query.pathName);
    },
    watch: {
      routePathFun: function (newVal, oldVal) {
        // console.log("网站建设", newVal, oldVal);
        this.setSlideToNum(newVal);
      }
    },
    computed: {
      routePathFun() {
        return this.$route.query.pathName;
      },
      heightFun() {
        // const elData = document.querySelector(".homeMainDivType");
        // const elWidth = elData.getBoundingClientRect().width;
        const elWidth = document.body.clientWidth;
        return elWidth * (document.documentElement.clientHeight / document.body.clientWidth);
      }
    },
    data() {
      return {
        webItemData,
        heightNum: 1080,
        animationData: {},
        slideToNum: 0,
        modal: false,
        slideArr: [
          "/enterprise",
          "/marketing",
          "/responsive",
          "/eBusiness",
          "/trade"
        ]
      };
    },
    methods: {
      outChage(e) {
        this.modal = e;
      },
      // demoGoTo(){
      //   console.log("执行走起函数")
      //   this.setSwiper().slideTo(0, 1000, false);
      // },
      setSlideToNum(val) {
        // 通过传过来的路由实现跳转
        // let slideToNum = 0;
        // this.slideArr.findIndex(val)
        const slideNum = this.slideArr.indexOf(val);
        // console.log("slideToNum", slideNum);
        this.setSwiper().slideTo(slideNum, 1000, false);
      },

      setSwiper() {
        // console.log("执行");
        const that = this;
        return new Swiper(".swiper-container", {
          //autoplay: true //可选选项，自动滑动designSwiper =
          // height: that.heightNum,
          direction: "vertical",
          pagination: '.swiper-pagination',
          paginationClickable: true,
          bulletClass: "bulleType",
          bulletActiveClass: "bulleActiveType",
          mousewheelControl: true,
          watchSlidesProgress: true,
          paginationBulletRender: function (swiper, index, className) {
            let text = null;
            let borderType = "";
            switch (index) {
              case 0:
                text = "企业网站";
                break;
              case 1:
                text = "营销网站";
                break;
              case 2:
                text = "响应式网站";
                break;
              case 3:
                text = "电商网站";
                break;
              case 4:
                text = "行业门户网站";
                break;
            }
            if (index === 5) {
              return "";
            } else {
              return (
                '<div class="' + className +
                '" style=""><span style="">' +
                text +
                '</span><span style="">' +
                "</span> </div>"
              );
            }
          },
          onProgress: function (swiper, progress) {
            // console.log("活动的progress：", progress);
            // const elData = document.querySelector(".designDivType");
            // const elWidth = elData.getBoundingClientRect().width;
            // that.heightNum = elWidth * (27 / 48);
            // console.log("elData", progress);
            if (progress === 0) {
              that.animationData = {
                imgIn: "animated zoomIn",
                divIn: "animated slideInLeft"
              };
            } else if (progress === 0.2) {
              that.animationData = {
                imgIn: "animated slideInLeft",
                divIn: "animated zoomIn"
              };
            } else if (progress === 0.4) {
              that.animationData = {
                imgIn: "animated zoomIn",
                divIn: "animated slideInLeft"
              };
            } else if (progress === 0.6) {
              that.animationData = {
                imgIn: "animated slideInLeft",
                divIn: "animated zoomIn"
              };
            } else if (progress === 0.8) {
              const slideTwo = swiper.slides.eq(webItemData.list.length - 1);
              slideTwo.transform("translateY(" + "0px" + ")");
              that.animationData = {
                imgIn: "animated zoomIn",
                divIn: "animated slideInLeft"
              };
            } else if (progress === 1) {
              const slideOne = swiper.slides.eq(webItemData.list.length);
              const slideTwo = swiper.slides.eq(webItemData.list.length - 1);

              const footerEl = document.querySelector(".jyFooterType");
              const footerElHeight = footerEl.getBoundingClientRect().height;

              const transNum = that.heightFun - footerElHeight;
              if (transNum > 0) {
                slideOne.transform("translateY(" + transNum + "px)");
                const teans2Num = transNum + 10;
                slideTwo.transform("translateY(" + teans2Num + "px )");
              }

              // console.log("progress", progress, slide);
              that.animationData = {
                imgIn: "animated bounceOutRight",
                divIn: "animated rotateOut",
                logoIn: "animated flipInX",
                addIn: "animated bounceInRight",
                cardIn: "animated bounceInLeft"
              };
            } else {
              that.animationData = {};
            }
          }
        });
      }
    }
  };

</script>

<style scoped lang="less">
  .rightMenu {
    position: fixed;
    top: 220px;
    right: 100px;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    /deep/.bulleType {
      display: block;
      padding: 10px;
      font-size: 16px;
      color: #724009;
      -webkit-transition: font-size 300ms;
      -moz-transform: font-size 300ms;
      -ms-transform: font-size 300ms;
      -o-transform: font-size 300ms;
      transition: font-size 300ms;
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &:after {
        position: absolute;
        z-index: 1;
        content: '';
        top: 10px;
        right: 16px;
        width: 0px;
        height: 110%;
        border: 1px dashed #724009;
      }

      span:nth-child(1) {
        margin-right: 10px;
        width: 100px;
        text-align: right;
        display: inline-block;
      }

      span:nth-child(2) {
        position: relative;
        z-index: 2;
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #724009;
      }
    }

    /deep/.bulleType:hover {
      font-size: 16px;
      color: blue;

      span:nth-child(2) {
        background: blue;
      }
    }

    /deep/.bulleType:focus {
      outline: none;
    }

    /deep/.bulleActiveType {
      font-size: 16px;
      color: blue;

      span:nth-child(2) {
        background: blue;
      }
    }
  }

  /deep/ .ivu-modal {
    width: 62.5% !important;

    .ivu-input-group-large {
      margin-bottom: 20px;
    }

    .ivu-input-group-prepend {
      background: #fff !important;
      border-right: none;
    }

    .ivu-input {
      border-left: none;
    }

    .ivu-icon {
      font-size: 22px;
      margin-right: 10px;
    }

    textarea.ivu-input {
      height: 150px !important;
    }
  }

  @media screen and (max-width: 768px) {
    .form-left {
      width: 60% !important;
    }

    .form-right {
      width: 40% !important;
    }

    /deep/ .ivu-modal {
      width: 96.5% !important;

      .ivu-icon {
        font-size: 16px;
      }

      .ivu-input-group-large>.ivu-input-group-prepend {
        font-size: 12px !important;
      }
    }

    .rightMenu {
      top: 100px !important;
      right: 0px !important;

      .bulleActiveType {
        font-size: 12px !important;
      }

      .bulleType {
        font-size: 12px !important;
      }
    }

  }

  @media screen and (min-width: 769px) and(max-width: 1024px) {
    /deep/ .ivu-modal {
      width: 80% !important;

      .ivu-input-group-large>.ivu-input-group-prepend {
        font-size: 12px !important;
      }
    }

    .rightMenu {
      top: 150px !important;
      right: 0px !important;
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;

    button {}
  }

  .webItemRowType {
    .btuGroupType {
      .gBtnType {
        margin-right: 40px;
        padding: 5px 50px;
        font-size: 24px;
        color: #000000;
        border: 1px solid #000000;

      }

      .gBtnType:hover {
        color: rgba(255, 255, 255, 1);
        // border: 1px solid rgba(0, 0, 0, 0.7);
        background: rgba(0, 0, 0, 1);
      }

      .btnType {
        padding: 5px 50px;
        font-size: 24px;
        color: #ffffff;
        border: 1px solid #000000;
        background: #000000;
      }

      .btnType:hover {
        // border: 1px solid rgba(0, 0, 0, 0.7);
        color: rgba(0, 0, 0, 1);
        background: rgba(0, 0, 0, 0);
      }
    }

    .imgDivType0 {
      width: 50%;
      // margin-top: 5%;
      margin-left: 10%;
    }

    .imgDivType1 {
      // margin: 25% 0 0 -180px;
      width: 90%;
      margin-top: 16%;
      margin-left: 3%;
    }

    .imgDivType2 {
      margin: 15% 0 0 -15%;
      width: 115%;
    }

    .imgDivType3 {
      margin: -15% 0 0 0;
      width: 180%;
    }

    .imgDivType4 {
      margin: 8% 0 0 -5%;
      width: 100%;
    }
  }

  @media screen and (min-width: 1025px) and(max-width: 1280px) {
    .rightMenu {

      right: 30px !important;
    }
  }

  @media screen and (min-width: 1281px) and(max-width: 1366px) {
    .rightMenu {
      right: 30px !important;
    }
  }

  @media screen and (min-width: 1367px) and(max-width: 1440px) {
    .rightMenu {
      right: 50px !important;
    }
  }

  @media screen and (min-width: 1441px) and(max-width: 1600px) {
    .rightMenu {
      right: 50px !important;
    }
  }

  @media screen and (min-width: 1200px) and(max-width: 1370px) {
    .webItemRowType {
      .imgDivType0 {
        width: 55%;
        margin: 5% 0 0 18%;
      }

      .imgDivType1 {
        width: 80%;
        margin-top: 20%;
        margin-left: 3%;
      }

      .imgDivType2 {
        margin: 15% 0 0 -5%;
        width: 115%;
      }

      .imgDivType3 {
        margin: -10% 0 0 0;
        width: 170%;
      }

      .imgDivType4 {
        margin: 5% 0 0 0;
        width: 85%;
      }
    }
  }

  @media screen and (min-width: 1000px) and(max-width: 1200px) {
    .webItemRowType {
      .btuGroupType {
        .gBtnType {
          margin-right: 20px;
          padding: 5px 40px;
          font-size: 20px;
        }

        .btnType {
          padding: 5px 40px;
          font-size: 20px;
        }
      }

      margin-top: -20px;

      .imgDivType0 {
        width: 60%;
        margin: 15% 0 0 18%;
      }

      .imgDivType2 {
        margin: 15% 0 0 -3%;
        width: 115%;
      }

      .imgDivType4 {
        margin: 22% 0 0 0;
        width: 90%;
      }
    }
  }

  @media screen and (min-width: 760px) and(max-width: 1000px) {
    .webItemRowType {
      margin-top: -20px;

      .btuGroupType {
        .gBtnType {
          margin-right: 20px;
          padding: 5px 20px;
          font-size: 18px;
        }

        .btnType {
          padding: 5px 20px;
          font-size: 18px;
        }
      }

      .imgDivType0 {
        width: 60%;
        margin: 15% 0 0 18%;
      }

      .imgDivType2 {
        margin: 15% 0 0 -3%;
        width: 115%;
      }

      .imgDivType4 {
        margin: 22% 0 0 0;
        width: 90%;
      }
    }
  }

</style>

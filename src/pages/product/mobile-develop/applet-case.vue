<template>
  <div>
    <div class="titleDivType">
      <p class="titleType">{{list.title}}</p>
      <p class="enTitleType">{{list.enTitle}}</p>
    </div>
    <Row :gutter="40">
      <i-col span="8" class="cardDivType" v-for="item in data.list" :key="item.id">
        <div @mouseenter="mouseenter(item)" @mouseleave="mouseleave(item)" @click="handlerClick(item)">
          <img class="imgType" :src="item.picUrl">
          <transition name="transbox">
            <div class="transbox" v-show="isShow === item.id">
              <div class="titleType">{{item.title}}</div>
              <div v-if="item.remark" class="remarkTitle">
                {{item.remark}}
              </div>
              <div class="imgDivType">
                <div v-if="item.picWechat">
                  <img :src="item.picWechat" @click.stop>
                  <p>公众号</p>
                </div>
                <div v-if="item.picApplet">
                  <img :src="item.picApplet" @click.stop>
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
        isShow: null
      };
    },
    methods: {
      mouseenter(val) {
        this.isShow = val.id;
        // console.log("mouseenter",val);
      },
      mouseleave(val) {
        this.isShow = null;
        // console.log("mouseleave",val);
      },
      handlerClick(val) {
        // 当前点击卡片事件
        // console.log("handlerClick", val);
        this.$emit("handlerClick", val);
      }
    }
  };

</script>

<style scoped lang="less">
  .titleDivType {
    margin: 10px 0 60px;
    font-size: 50px;
    letter-spacing: 5px;

    .titleType {
      font-weight: bold;
    }

    .enTitleType {
      font-size: 40px;
    }
  }

  .cardDivType {
    position: relative;

    .imgType {
      width: 100%;
      height: auto;
    }
    .remarkTitle{
      overflow: hidden;
      height: 80%;
    }
    .transbox {
      position: absolute;
      top: 0;
      bottom: 0;
      padding: 20px;
      width: 91%;
      height: 99%;
      background: rgba(0, 0, 0, 0.5);

      .titleType {
        font-size: 24px;
        margin-bottom: 10px;
      }

      .imgDivType {
        display: flex;
        justify-content: center;

        div {
          text-align: center;

          img {
            // box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            //   // width: 100%;
            width: 50%;
            // padding: 0 5px;
            border: 1px solid rgba(0, 0, 0, 0.1);
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
  }

  @media screen and (max-width: 768px) {
    .titleDivType {
      margin: 10px 0 30px !important;
      font-size: 40px !important;
    }

    .enTitleType {
      font-size: 35px !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width:1280px) {
    .transbox {
      padding: 5px !important;
    }

    .transbox .titleType {
      font-size: 16px !important;
      margin-bottom: 0px !important;
    }

  }

  @media screen and (min-width: 1281px) and (max-width:1366px) {
    .transbox {
      padding: 10px !important;
    }

    .transbox .titleType {
      font-size: 18px !important;
      margin-bottom: 0px !important;
    }
  }

  @media screen and (min-width: 1367px) and (max-width:1440px) {
    .transbox {
      padding: 15px !important;
    }

    .transbox .titleType {
      font-size: 20px !important;
      margin-bottom: 0px !important;
    }
  }

</style>

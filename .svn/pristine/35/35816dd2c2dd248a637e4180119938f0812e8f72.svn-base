<template>
  <div class="supportCard">
    <Row :gutter="40">
      <i-col span="12" v-for="item in data" :key="item.key">
        <div class="serverCardDivType">
          <Row>
            <i-col span="12">
              <!-- {{item.imgUrl}} -->
              <img :src="item.imgUrl">
              <div class="priceDivType">
                <p>
                  <span>月付</span>
                  {{item.monthPrice}}元/月
                </p>
                <div class="lineDivType"></div>
                <p>
                  <span>年付</span>
                  {{item.yearPrice}}元/年
                </p>
              </div>
            </i-col>
            <i-col class="contentColType" span="12">
              <p class="titleType">{{item.title}}</p>
              <div class="contentDivType">
                <p>系统：{{item.system}}</p>
                <p>CPU：{{item.cpu}}</p>
                <p>内存：{{item.ram}}</p>
                <p>硬盘：{{item.disk}}</p>
                <p>流量：{{item.flux}}</p>
                <p>机房：{{item.computerRoom}}</p>
              </div>
              <p class="btnType">立即咨询</p>
            </i-col>
          </Row>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ["data"]
  };

</script>

<style scoped lang="less">
  .serverCardDivType {
    margin-bottom: 20px;
    border: 1px solid #d9d9d9;

    img {
      width: 100%;
    }

    .priceDivType {
      margin-top: -5px;
      padding: 15px 0;
      background-color: #73bbf3;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 2px;
      line-height: 20px;

      .lineDivType {
        display: inline-block;
        width: 0;
        height: 28px;
        margin: 0 25px;
        border-left: 1px solid #ffffff;
      }

      p {
        display: inline-block;
      }

      span {
        display: block;
        font-weight: bold;
        color: #000000;
      }
    }

    .contentColType {
      text-align: left;
      border-left: 1px solid #d9d9d9;

      .titleType {
        // padding-left: 25px;
        margin: 25px 0 20px 25px;
        font-size: 18px;
        color: #0072ff;
        letter-spacing: 2px;
      }

      .contentDivType {
        // margin:0 0 14% 25px;
        margin: 0 0 22% 25px;
        font-size: 14px;
        color: #828488;
        line-height: 24px;
        letter-spacing: 2px;
      }

      .btnType {
        width: 100%;
        // height: 100%;
        // margin-top: 14%;
        padding: 6% 0;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        color: #1c1c1c;
        background-color: #cccccc;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .supportCard {
      overflow: hidden;
      margin: -0px -80px;
    }

    .contentDivType {
      font-size: 12px !important;
      line-height: 14px !important;
      margin-bottom: 1px !important;
    }

    .titleType {
      font-size: 16px !important;
      margin: 5px 0 5px 25px !important;
    }

    .priceDivType {
      letter-spacing: -1px !important;
      padding: 5px 0 !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    .supportCard {
      overflow: hidden;
      margin: -0px -80px;
    }

    .contentDivType {
      line-height: 21px !important;
      margin-bottom: 7px !important;
    }

    .titleType {
      margin: 5px 0 5px 25px !important;
    }

    .priceDivType {
      padding: 10px 0 !important;
    }
  }

  @media screen and (min-width: 1025px) and (max-width:1280px) {
    .contentDivType {
      line-height: 23px !important;
      margin-bottom: 6px !important;
    }

    .titleType {
      margin: 5px 0 5px 25px !important;
    }
  }

  @media screen and (min-width: 1025px) and (max-width:1280px) {
    .contentDivType {
      line-height: 23px !important;
      margin-bottom: 6px !important;
    }

    .titleType {
      margin: 5px 0 5px 25px !important;
    }
  }

  @media screen and (min-width: 1281px) and (max-width:1366px) {
    .contentDivType {
      margin-bottom: 11px !important;
    }

    .titleType {
      margin: 5px 0 5px 25px !important;
    }
  }

  @media screen and (min-width: 1367px) and (max-width:1440px) {
    .contentDivType {
      margin-bottom: 22px !important;
    }

    .titleType {
      margin: 5px 0 5px 25px !important;
    }
  }

  @media screen and (min-width: 1441px) and (max-width:1600px) {
    .contentDivType {
      margin-bottom: 24px !important;
    }
  }

</style>

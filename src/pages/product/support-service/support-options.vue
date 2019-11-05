<template>
  <div class="supportCard">
    <Row :gutter="40">
      <i-col span="6" v-for="item in data" :key="item.key">
        <div class="supportCard-item">
          <div class="item-left">
            <img :src="item.image" alt="">
          </div>
          <div class="item-right">
            <div class="right-title">{{item.title}}</div>
            <div class="right-content">{{item.content}}</div>
          </div>
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
  .supportCard {
    margin-bottom: 20px;

    .supportCard-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 50%;
      }
      .item-right {
        .right-title {
          font-size: 25px;
          font-weight: bold;
          margin-bottom: 10px;
        }
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

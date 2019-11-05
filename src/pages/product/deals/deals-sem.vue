<template>
  <div>
    <div class="titleDivType">
      <p class="titleType">{{list.title}}</p>
      <p class="enTitleType">{{list.enTitle}}</p>
    </div>
    <Row :gutter="40">
      <i-col span="8" v-for="item in list.list" :key="item.key">
        <div class="cardDivType">
          <p class="subtitleType">{{item.subtitle}}</p>
          <p class="contentType">{{item.content}}</p>
          <img class="imgType" :src="item.imgUrl">
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ["list"],
    created() {
      // console.log("SEM广告投放服务内容", this.list);
    }
  };

</script>

<style scoped>
  .titleDivType {
    line-height: 33px;
    margin: 40px 0;
  }

  .titleType {
    font-size: 45px;
    margin-bottom: 26px;
  }

  .enTitleType {
    font-size: 28px;
  }

  .cardDivType {
    margin-bottom: 100px;
  }

  .subtitleType {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .contentType {
    font-size: 16px;
    /* width: 100%; */
    height: 100px;
  }

  .imgType {
    width: 100%;
    box-shadow: -8px 8px 18px rgba(0, 0, 0, 0.8);
  }

  @media screen and (max-width: 768px) {
    .titleDivType {
      margin: 5px !important;
    }

    .cardDivType {
      margin-bottom: 10px !important;
    }

    .subtitleType {
      font-size: 12px !important;
      margin-bottom: 5px !important;
    }

    .enTitleType {
      font-size: 20px !important;
    }

    .contentType {
      font-size: 12px !important;
      height: 55px !important;
      line-height: 13px !important;
    }

    .titleType {
      font-size: 25px !important;
      margin-bottom: 5px !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    .titleDivType {
      margin: 20px !important;
    }

    .cardDivType {
      margin-bottom: 20px !important;
    }

    .subtitleType {
      font-size: 15px !important;
    }

    .contentType {
      font-size: 13px !important;
      height: 72px !important;
      line-height: 18px !important;
    }

    .titleType {
      font-size: 30px !important;
      margin-bottom: 16px !important;
    }
  }

  @media screen and (min-width: 1025px) and (max-width:1280px) {
    .titleDivType {
      margin: 20px !important;
    }

    .cardDivType {
      margin-bottom: 40px !important;
    }

    .subtitleType {
      font-size: 18px !important;
    }

    .contentType {
      font-size: 14px !important;
    }
  }

  @media screen and (min-width: 1281px) and (max-width:1366px) {
    .titleDivType {
      margin: 20px !important;
    }

    .cardDivType {
      margin-bottom: 60px !important;
    }

    .subtitleType {
      font-size: 18px !important;
    }
  }

  @media screen and (min-width: 1367px) and (max-width:1440px) {
    .cardDivType {
      margin-bottom: 80px !important;
    }

    .subtitleType {
      font-size: 20px !important;
    }
  }

</style>

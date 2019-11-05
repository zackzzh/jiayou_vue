<template>
  <div class="mainDivType">
    <img class="imgType" :src="list.titleImgUrl">
    <Row :gutter="80" type="flex" justify="space-around">
      <i-col span="7" class="cardType" :style="`background-image: url(${item.imgUrl})`" v-for="item in list.list" :key="item.key">
        <p class="titleType">{{item.title}}</p>
        <p class="contentType">{{item.content}}</p>
        <!-- <img :src="item.imgUrl" /> -->
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ["list"]
  };

</script>

<style scoped lang="less">
  .mainDivType {
    margin-top: 40px;

    .imgType {
      width: 340px;
      height: auto;
    }

    .cardType {
      height: 500px;
      padding: 130px;
      // border: 1px dashed #c6c6c6;
      letter-spacing: 2px;
      background-size: 100% 100%;

      // width: 100%;
      .titleType {
        font-size: 40px;
        margin-bottom: 30px;
      }

      .contentType {
        font-size: 18px;
        margin: 0 10px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .mainDivType {
      margin-top: -60px !important;
    }
    .imgType{
      width: 250px !important;
    }
    .titleType {
      font-size: 24px !important;
      margin-bottom: 20px !important;
    }

    .cardType {
      height: 250px !important;
      padding: 20px !important;
    }

    .contentType {
      font-size: 14px !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    .mainDivType {
      margin-top: -30px !important;
    }

    .titleType {
      font-size: 30px !important;
      margin-bottom: 20px !important;
    }

    .cardType {
      height: 300px !important;
      padding: 50px !important;
    }

    .contentType {
      font-size: 16px !important;
    }
  }

  @media screen and (min-width: 1025px) and (max-width:1280px) {
    .titleType {
      font-size: 30px !important;
      margin-bottom: 20px !important;
    }

    .cardType {
      height: 350px !important;
      padding: 60px !important;
    }

    .contentType {
      font-size: 16px !important;
    }
  }

  @media screen and (min-width: 1281px) and (max-width:1366px) {

    .cardType {
      height: 400px !important;
      padding: 70px !important;
    }
  }

  @media screen and (min-width: 1367px) and (max-width:1440px) {

    .cardType {
      height: 450px !important;
    }
  }

</style>

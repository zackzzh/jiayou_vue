<template>
  <div class="styleTwo">
    <p class="titleType">{{list.title}}</p>
    <Divider />
    <Row :gutter="150" class="rowType">
      <i-col span="12" v-for="item in list.list" :key="item.key">
        <p class="subtitleType">{{item.subtitle}}</p>
        <p class="contentType">{{item.content}}</p>
        <img class="imgType" :src="item.imgUrl">
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ["list"],
    created() {
      // console.log("官网定制", this.list);
    }
  };

</script>

<style scoped lang="less">
  .titleType {
    font-size: 48px;
    font-weight: bold;
    margin: 80px 0;
  }

  .rowType {
    z-index: 1;

    .subtitleType {
      font-size: 22px;
      font-weight: bold;
      margin-top: 20px;
    }

    .contentType {
      font-size: 18px;
      height: 150px;
      margin: 40px 0 30px 0;
    }

    .imgType {
      width: 100%;
      height: auto;
      /* z-index: 100; */
    }
  }

  @media screen and (max-width:768px) {
    .styleTwo{
      margin-top: -40px !important;
    }
    .titleType {
      margin: 0px !important;
      font-size: 30px !important;
    }

    .subtitleType {
      margin-top: 0px !important;
    }

    .contentType {
      height: 130px !important;
      font-size: 12px !important;
      margin: 0px !important;
    }
  }

  @media screen and (min-width:769px) and (max-width:1024px) {
    .titleType {
      margin: 10px 0 !important;
      font-size: 30px !important;
    }

    .subtitleType {
      margin-top: 10px !important;
    }

    .contentType {
      height: 130px !important;
      font-size: 14px !important;
      margin: 5px 0px !important;
    }
  }

  @media screen and (min-width:1025px) and (max-width:1280px) {
    .titleType {
      margin: 10px 0 !important;
    }

    .contentType {
      font-size: 16px !important;
      margin: 10px 0px !important;
    }
  }

  @media screen and (min-width:1281px) and (max-width:1366px) {
    .titleType {
      margin: 20px 0 !important;
    }

    .contentType {

      margin: 20px 0px !important;
    }
  }

  @media screen and (min-width:1367px) and (max-width:1440px) {
    .titleType {
      margin: 20px 0 !important;
    }

    .contentType {
      margin: 20px 0px !important;
    }
  }

  @media screen and (min-width:1441px) and (max-width:1600px) {
    .titleType {
      margin: 40px 0 !important;
    }

    .contentType {
      margin: 20px 0px !important;
    }
  }

</style>

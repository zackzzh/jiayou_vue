<template>
  <div class="mainDivType">
    <p class="titleType color">{{list.title}}</p>
    <Row :gutter="10">
      <i-col class="colType" :style="`background-image: url(${list.bgImgUrl})`" span="8" v-for="item in list.list"
        :key="item.key">
        <div class="contentDivType">
          <div class="imgType"> <img :src="item.imgUrl"></div>
          <p class="titleType">{{item.title}}</p>
          <p class="contentType">{{item.content}}</p>
        </div>
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
    padding-top: 100px;

    .titleType {
      //   border-bottom: 3px solid #15ffd6;
      font-size: 40px;
      font-weight: bold;
      color: #fff !important;
    }

    .color {
      color: #fff;
    }

    .colType {
      // box-shadow: 0 0 12px rgba(0, 0, 0, 0.7);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-origin: content-box;
    }

    .contentDivType {
      margin: 0px 30px;
      letter-spacing: 2px;
      padding-bottom: 20px;

      .imgType {
        margin: 0 auto;
        margin-top: 30px;
        width: 130px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
        }
      }

      .titleType {
        margin: 30px 0 30px;
        font-size: 32px;
        font-weight: bold;
        color: #fff;
      }

      .contentType {
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .mainDivType {
      padding-top: 10px !important;
    }

    .titleType {
      font-size: 25px !important;
      color: #fff;
    }

    .contentDivType {
      margin: 15px !important;

      .titleType {
        font-size: 15px !important;
        margin: 0px 0 3px !important;
      }

      .contentType {
        font-size: 12px !important;
      }
    }

  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .mainDivType {
      padding-top: 20px !important;
    }

    .titleType {
      font-size: 25px !important;
      color: #fff;
    }

    .contentDivType {
      margin: 15px 30px !important;

      .titleType {
        font-size: 15px !important;
        margin: 0px 0 3px !important;
      }

      .contentType {
        font-size: 12px !important;
      }
    }

  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    .mainDivType {
      padding-top: 80px !important;
    }

    .contentDivType {
      margin: 10px 30px !important;

      .titleType {
        font-size: 24px !important;
      }

      .contentType {
        font-size: 14px !important;
      }
    }
  }

  @media screen and (min-width: 1281px) and (max-width: 1366px) {
    .mainDivType {
      padding-top: 50px !important;

      .titleType {
        margin-bottom: 10px !important;
        color: #fff;
      }
    }

    .contentDivType {
      margin: 30px !important;

      .titleType {
        color: #fff;
        font-size: 30px !important;
        margin-bottom: 10px !important;
      }

      .contentType {
        font-size: 14px !important;
      }
    }

    .titleType {
      font-size: 30px !important;
    }

  }

  @media screen and (min-width: 1367px) and (max-width: 1440px) {
    .mainDivType {
      padding-top: 80px !important;

      .titleType {
        font-size: 30px !important;
        margin-bottom: 20px !important;
      }
    }

    .contentDivType {
      margin: 40px 30px !important;

      .titleType {
        font-size: 30px !important;
      }

      .contentType {
        font-size: 17px !important;
      }
    }
  }

  @media screen and (min-width: 1441px) and (max-width: 1600px) {
    .mainDivType {
      padding-top: 55px !important;
    }

    .contentDivType {
      margin: 40px 30px !important;

      .titleType {
        font-size: 30px !important;
      }

      .contentType {
        font-size: 17px !important;
      }
    }
  }

</style>

<template>
  <div>
    <!-- 功能介绍 -->
    <div class="titleDivType">
      <p class="titleType">{{commonData.title}}</p>
      <div class="lineType"></div>
      <p class="titleEnType">{{commonData.titleEn}}</p>
    </div>
    <!-- {{list}} -->
    <Row class="rowType" :gutter="100">
      <i-col span="8" v-for="item in list" :key="item.key">
        <div class="cardDivType">
          <p class="cardTitleType" :class="{cardTitle2: item.title.length === 2}">{{item.title}}</p>
          <p class="cardContentType" v-for="o in item.itemList" :key="o.key">{{o.content}}</p>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ["commonData", "list"]
  };

</script>

<style scoped lang="less">
  .titleDivType {
    .titleType {
      font-size: 58px;
      font-weight: bold;
      letter-spacing: 5px;
      color: rgba(255, 255, 255, 0.8);
    }

    .lineType {
      margin: 10px 38% 20px 38%;
      border-bottom: 2px solid #ffffff;
    }

    .titleEnType {
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 5px;
      color: rgba(255, 255, 255, 1);
    }
  }

  .rowType {
    .cardDivType {
      // padding-bottom: 10px;
     
      margin: 30px 50px;
      padding: 10px 10px 20px 10px;
      line-height: 45px;
      background-color: #eeeeee;
      background-origin: content-box;

      .cardTitleType {
        width: 90px;
        height: 90px;
        margin: -20px 0 15px 20px;
        padding: 5px 5px;
        font-size: 30px;
        background-color: #cd0c27;
      }

      .cardTitle2 {
        padding: 25px 5px;
      }

      .cardContentType {
        margin-left: 20px;
        font-size: 22px;
        color: #484848;
        text-align: left;
      }
    }
  }
 @media screen and(min-width: 1680px){
    .rowType {
      .cardDivType {
        height: 350px;
      }
    }
  }
  @media screen and(min-width: 1400px) and(max-width: 1680px) {
    .titleDivType {
      .titleType {
        font-size: 52px;
      }

      .titleEnType {
        font-size: 28px;
      }
    }

    .rowType {
      .cardDivType {
        margin: 26px;
        line-height: 34px;
        height: 260px;
        line-height: 34px;

        .cardTitleType {
          width: 70px;
          height: 70px;
        }
      }
    }
  }

  @media screen and(min-width: 1200px) and(max-width: 1400px) {
    .titleDivType {
      margin-top: -40px;

      .titleType {
        font-size: 48px;
      }

      .lineType {
        margin: 10px 40% 10px 40%;
        border-bottom: 2px solid #ffffff;
      }

      .titleEnType {
        font-size: 28px;
      }
    }

    .rowType {
      .cardDivType {
        height: 240px;
        margin: 20px 30px;
        line-height: 30px;

        .cardTitleType {
          width: 70px;
          height: 70px;
          margin: -20px 0 15px 20px;
          padding: 5px 5px;
          font-size: 28px;
        }

        .cardTitle2 {
          padding: 25px 5px;
        }

        .cardContentType {
          margin-left: 20px;
          font-size: 18px;
        }
      }
    }
  }

  @media screen and(min-width: 1000px) and(max-width: 1200px) {
    .titleDivType {
      margin-top: -60px;

      .titleType {
        font-size: 42px;
      }

      .lineType {
        margin: 4px 38% 8px 38%;
        border-bottom: 2px solid #ffffff;
      }

      .titleEnType {
        font-size: 24px;
      }
    }

    .rowType {
      .cardDivType {
        height: 200px;
        margin: 20px 0;
        line-height: 26px;

        .cardTitleType {
          width: 60px;
          height: 60px;
          margin: -20px 0 8px 20px;
          padding: 5px 5px;
          font-size: 24px;
        }

        .cardTitle2 {
          padding: 20px 5px;
        }

        .cardContentType {
          margin-left: 20px;
          font-size: 18px;
        }
      }
    }
  }

  @media screen and(min-width: 760px) and(max-width: 1000px) {
    .titleDivType {
      margin-top: -80px;

      .titleType {
        font-size: 30px;
      }

      .lineType {
        margin: 4px 42% 0 42%;
        border-bottom: 2px solid #ffffff;
      }

      .titleEnType {
        font-size: 20px;
      }
    }

    .rowType {
      .cardDivType {
        height: 160px;
        margin: 10px 0;
        line-height: 20px;

        .cardTitleType {
          width: 60px;
          height: 60px;
          margin: -20px 0 6px 10px;
          padding: 5px 5px;
          font-size: 20px;
        }

        .cardTitle2 {
          padding: 20px 5px;
        }

        .cardContentType {
          margin-left: 10px;
          font-size: 13px;
        }
      }
    }
  }

</style>

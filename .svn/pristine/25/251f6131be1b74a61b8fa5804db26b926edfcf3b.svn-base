<template>
  <!-- 这是加入我们的轮播 -->
  <div class="mainDivType">
    <p class="titleType">{{list.title}}</p>
    <!-- 笑脸图 -->
    <div class="imgDivType">
      <img class="imgType" :style="`background-image: url(${list.smileBgImgUrl})`" :src="list.smileImgUrl">
    </div>
    <!-- 轮播 -->
    <div class="swiper-container" :style="`height:${changeHeightNum}px`">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data" :key="item.id">
          <div class="cardDivType" :style="`background-image: url(${list.bgImgUrl})`">
            <p class="cardTitleType">{{item.position}}</p>
            <!-- <div class="cardContentType">{{item}}</div> -->
            <Row class="rowType">
              <i-col span="8" v-for="o in subtitleList" :key="o">
                <div class="itemType">
                  <p class="cardSubtitleType">{{o}}</p>
                  <div class="cardContentType" v-if="o === '任职要求'" v-html="item.responsibility"></div>
                  <div class="cardContentType" v-else-if="o === '岗位职责'" v-html="item.requeiements"></div>
                  <div class="cardContentType" v-else v-html="item.welfare"></div>
                </div>
              </i-col>
            </Row>
          </div>
        </div>
        <!-- <div class="swiper-slide" v-for="item in list.list" :key="item.key"> -->
        <!-- <img :src="item.imgUrl"> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- <div class="swiper-button-next"></div> -->
    <div class="btuType">
      <div>
        <Icon type="ios-arrow-down" class="down one" />
      </div>
      <div>
        <Icon type="ios-arrow-down" class="down two" />
      </div>
      <div>
        <Icon type="ios-arrow-down" class="down three" />
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";

  export default {
    props: ["list", "data"],
    updated() {
      this.setSwiper();
      console.log('data', this.data)
    },
    data() {
      return {
        subtitleList: ["任职要求", "岗位职责", "薪酬福利"],
        changeHeightNum: 820
      };
    },
    methods: {
      setSwiper() {
        const that = this;
        const joinSwiper = new Swiper(".swiper-container", {
          autoplay: false, //可选选项，自动滑动
          direction: "vertical",
          watchSlidesProgress: true,
          slidesPerView: "auto",
          centeredSlides: true,
          loop: true,
          loopedSlides: 5,
          simulateTouch: false,
          roundLengths: true,
          nextButton:'.btuType',
          // 左右切换的箭头
          onProgress: function (swiper, progress) {
            // const swiperEl = document.querySelectorAll(".swiper-container");
            // const heightPx = swiperEl.getBoundingClientRect().width;

            // console.log("heightPx",heightPx );

            for (let i = 0; i < swiper.slides.length; i++) {
              // 节点
              let slide = swiper.slides.eq(i);
              // 选择的项
              let slideProgress = swiper.slides[i].progress;
              const moduleNum = Math.abs(slideProgress % 4);
              // const moduleNum = Math.abs(slideProgress % lengthNum);

              if (moduleNum !== 0) {
                // 数值长度

                const bodyWidth = document.body.clientWidth;
                let changeNum = 5.22;

                // const heightPx = (82 / 190) * bodyWidth + 100;
                // const shortNum = ((820 - heightPx) / 10) * 0.066;
                // that.changeHeightNum = heightPx;
                // const changeNum = 5.22 - shortNum;
                // console.log("-----------------");
                // console.log("moduleNum", moduleNum);
                // console.log("bodyWidth", bodyWidth);
                // console.log("heightPx", heightPx);
                // console.log("changeNum", changeNum);
                // console.log("shortNum", shortNum);
                // console.log("zIndex", zIndex);
                // console.log("-----------------");
                // Y轴移动的数
                // console.log("bodyWidth", bodyWidth);
                if (1367 < bodyWidth && bodyWidth <= 1600) {
                  that.changeHeightNum = 800;
                  //5.22 - ((820-650)/10*0.066)
                  changeNum = 5.08;

                } else if (1281 < bodyWidth && bodyWidth <= 1366) {
                  that.changeHeightNum = 700;
                  //5.22 - ((820-610)/10*0.066)
                  changeNum = 4.428;
                } else if (1025 < bodyWidth && bodyWidth <= 1280) {
                  that.changeHeightNum = 580;
                  //5.22 - ((820-480)/10*0.066)
                  changeNum = 3.372;
                } else if (769 < bodyWidth && bodyWidth <= 1024) {
                  that.changeHeightNum = 440;
                  //5.22 - ((820-440)/10*0.066)
                  // changeNum = 1.524;
                  changeNum = 2.71;
                } else if (bodyWidth <= 768) {
                  that.changeHeightNum = 350;
                  //5.22 - ((820-440)/10*0.066)
                  changeNum = 2.11;
                }
                const heightNum =
                  (changeNum * moduleNum + 0.2 * (4 * 1 + 1)) * 150 + "px";
                // const heightNum =
                //   (5.22 * moduleNum + 0.2 * (lengthNum * 1 + 1)) * 150 + "px";
                // 放大倍数
                // const scaleNum = 1 - (lengthNum - moduleNum) * 0.05;
                // console.log("heightNum", i, heightNum, scaleNum, moduleNum);
                // 取模
                const scaleNum = 1 - (4 - moduleNum) * 0.05;
                const zIndex = scaleNum * 100;
                slide.css("zIndex", zIndex);
                slide.transform(
                  "translateY(" + heightNum + ") scale(" + scaleNum + ")"
                );
              } else {
                slide.css("zIndex", 100);
                slide.transform("translateY(" + "0" + ") scale(" + "1" + ")");
              }
            }
          },
          onSetTransition: function (swiper, transition) {
            // console.log("执行setTransition",that.testData);
            // that.testData += 1;
            for (let i = 0; i < swiper.slides.length; i++) {
              let slide = swiper.slides.eq(i);
              slide.transition(transition);
            }
          }
        });
      }
    }
  };

</script>

<style scoped lang="less">
  .mainDivType {
    position: relative;
    text-align: center;

    .titleType {
      margin: 80px 0 70px;
      font-size: 40px;
      font-weight: bold;
      color: #4a4a4a;
    }

    .imgDivType {
      position: relative;
      width: 100%;
      .imgType {

        width: 12%;
        // height: 58px;
        // margin-left: -6%;
        padding: 14px;
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        z-index: 101;
      }
    }

    .swiper-container {
      // width: 90%;
      // height: 820px;

      .cardDivType {
        width: 100%;
        height: 90%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        color: #575757;

        .cardTitleType {
          padding: 100px 0 44px;
          font-size: 50px;
          font-weight: bold;
          color: #000000;
        }

        .rowType {
          padding: 0 50px;

          .itemType::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 10px;
            /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
          }

          .itemType::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            background: #e0e0e0;
          }

          .itemType::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            background: #EDEDED;
          }

          .itemType {
            margin: 0 20px;
            height: 450px;
            overflow-y: auto;
            box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.3);

            .cardSubtitleType {
              padding: 20px 0;
              font-size: 28px;
              font-weight: bold;
            }

            .cardContentType {
              padding: 0 20px;
              text-align: left;
              font-size: 14px;
              letter-spacing: 2px;
              line-height: 26px;
            }
          }
        }
      }
    }

    .heart {
      animation: heart 3s ease-in-out 1s infinite alternate;
    }

    @keyframes heart {
      from {
        transform: translate(0, 0)
      }

      to {
        transform: translate(0, 20px)
      }
    }

    .btuType {
      position: absolute;
      bottom: 40px;
      left: 47%;
      z-index: 101;
      font-size: 70px;

      .one {
        position: absolute;
        top: -85px;
        left: 0;
        color: blue;
        opacity: 0.5;
      }

      .two {
        position: absolute;
        top: -60px;
        left: 0;
        color: blue;
        opacity: 0.7;
      }

      .three {
        position: absolute;
        top: -40px;
        left: 0;
        color: blue;
        opacity: 1.0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .mainDivType {
      .titleType {
        margin: 0 0 20px 0;
        font-size: 20px;
      }

      .imgDivType {
        .imgType {
          width: 7%;
          margin-left: -4%;
          position: absolute;
          top: -30px;
        }
      }

      .cardTitleType {
        padding: 42px 0 0 !important;
      }

      .swiper-container {
        .cardDivType {
          height: 100%;

          .cardTitleType {
            padding: 40px 0 0;
            font-size: 18px;
          }

          .rowType {
            .itemType {
              margin: 0 10px;
              height: 230px;

              .cardSubtitleType {
                padding: 0;
                font-size: 14px;
              }

              .cardContentType {
                padding: 0 5px !important;
                line-height: 14px !important;
                font-size: 12px !important;
              }
            }
          }
        }
      }

      .btuType {
        position: absolute;
        bottom: 60px;
        left: 47%;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .mainDivType {
      .titleType {
        margin: 0px 0 19px 0;
        font-size: 20px;
      }

      .imgDivType {
        .imgType {
          position: absolute;
          top: -30px;
        }
      }

      .swiper-container {
        .cardDivType {
          height: 81%;

          .cardTitleType {
            padding: 44px 0 0;
            font-size: 30px;
          }

          .rowType {
            .itemType {
              margin: 0 10px;
              height: 250px;

              .cardSubtitleType {
                padding: 10px 0 0 0;
                font-size: 18px;
              }

              .cardContentType {
                padding: 0 10px !important;
                line-height: 16px !important;
                font-size: 14px !important;
              }
            }
          }
        }
      }

      .cardSubtitleType {
        padding: 5px 0 !important;
        font-size: 22px !important;
      }

      .cardContentType {
        padding: 0px 7px !important;
      }

      .btuType {
        bottom: 65px !important;
      }

      .btuType {
        position: absolute;
        bottom: 60px;
        left: 47%;
      }
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    .mainDivType {
      .titleType {
        margin: 0px 0 50px;
        font-size: 34px;
      }

      .swiper-container {
        .cardDivType {
          height: 88%;

          .cardTitleType {
            padding: 40px 0 0;
            font-size: 33px;
          }

          .rowType {
            .itemType {
              margin: 0 18px;
              height: 390px;

              .cardSubtitleType {
                padding: 10px 0 0 0;
                font-size: 24px;
              }

              .cardContentType {
                line-height: 22px;
              }
            }
          }
        }
      }

      .btuType {
        position: absolute;
        bottom: 60px;
        left: 47%;
      }

      .cardSubtitleType {
        padding: 5px 0 !important;
        font-size: 22px !important;
      }

      .cardContentType {
        padding: 0px 7px !important;
      }

      .btuType {
        bottom: 40px !important;
      }
    }
  }

  @media screen and (min-width: 1281px) and (max-width: 1366px) {
    .imgDivType {
      height: auto;
    }

    .contentType {
      font-size: 12px !important;
    }

    .cardTitleType {
      padding: 44px 0 10px !important;
      font-size: 25px !important;
    }

    .titleType {
      margin: 0px 0 70px !important;
      font-size: 30px !important;
    }

    .cardSubtitleType {
      padding: 5px 0 !important;
      font-size: 22px !important;
    }

    .cardContentType {
      padding: 0px 10px !important;
    }

    .btuType {
      bottom: 40px !important;
    }
  }

  @media screen and (min-width: 1367px) and (max-width: 1440px) {
    .mainDivType {
      .titleType {
        margin: 0 0 70px;
        font-size: 30px;
      }

      .swiper-container {
        .cardDivType {
          .cardTitleType {
            padding: 50px 0 30px;
          }

          .rowType {
            .itemType {
              margin: 0 18px;
              height: 430px;
            }
          }
        }
      }

      .btuType {
        position: absolute;
        bottom: 60px;
        left: 47%;
      }
    }
  }

  @media screen and (min-width: 1441px) and (max-width: 1610px) {
    .mainDivType {
      .titleType {
        margin: 0 0 70px;
      }

      .swiper-container {
        .cardDivType {
          .cardTitleType {
            padding: 90px 0 38px;
          }

          .rowType {
            .itemType {
              margin: 0 20px;
              height: 430px;
            }
          }
        }
      }

      .btuType {
        position: absolute;
        bottom: 60px;
        left: 47%;
      }
    }
  }

</style>

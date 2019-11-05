<template>
  <div class="home-top">
    <Carousel v-model="value" loop arrow="always" dots="none">
      <CarouselItem v-for="(item, index) in data" :key="index">
        <img :src="item.picUrl" alt="" />
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
  export default {
    props: ["data"],
    data() {
      return {
        value: 0,
        imgList: [{
            image: 'static/home/homeOne.png'
          },
          {
            image: 'static/webDesign/web01.png'
          },
          {
            image: 'static/mobileDevelop/applet/01.png'
          },
          {
            image: 'static/mobileDevelop/applet/05.png'
          }
        ]
      }
    },
    mounted() {
      if (this.data) {
        let track = document.getElementsByClassName('ivu-carousel-track');
        let tracki = document.getElementsByClassName('ivu-carousel-item');
        let width = document.body.clientWidth;
        track[0].style.width = width * this.data.length + 'px';
        // if (tracki.length > 0) {
        //   for (var i = 0; i < tracki.length > 0; i++) {
        //     tracki[i].style.height = document.documentElement.clientHeight + 'px';
        //   }
        // }
      }
    }
  }

</script>

<style scoped lang="less">
  //   /deep/ .ivu-carousel-dots-inside {
  //     bottom: 13% !important;
  //   }\
  /deep/ .ivu-carousel-arrow.left {
    left: 50px;
  }

  /deep/ .ivu-carousel-arrow.right {
    right: 50px;
  }

  /deep/ .ivu-carousel-arrow {
    background: none !important;
    color: #fff !important;
    font-size: 50px;
  }

  .home-top {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

</style>

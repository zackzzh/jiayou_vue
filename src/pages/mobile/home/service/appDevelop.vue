<template>
  <div>
    <img src="/static/mobile/back.png" alt class="back" @click="back">
    <div class="page" style="padding-bottom: 1.85rem;">
      <img
        :src="item.iamge"
        alt
        v-for="(item, index) in data"
        :key="index"
        :style="item.top?'margin-top:'+item.top + 'rem':''"
      >
    </div>
    <!-- 尾部/底部 -->
    <Row class-name="footer">
      <Col span="12">
        <a href="tel:020-81807466">电话咨询</a>
      </Col>
      <Col span="12">
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=13267969&userId=27524150">在线咨询</a>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "appDevelop1",
  data() {
    return {
      data: []
    };
  },
  created() {
    console.log(this.$route.query);
    switch (Number(this.$route.query.index)) {
      case 0:
        this.data = [
          {
            iamge: "/static/mobile/wz1.png"
          },
          {
            iamge: "/static/mobile/wz2.png",
            top: 0.2
          },
          {
            iamge: "/static/mobile/wz3.png",
            top: 0.4
          }
        ];
        break;
      case 1:
        this.data = [
          {
            iamge: "/static/mobile/app1.png"
          },
          {
            iamge: "/static/mobile/app2.png"
          },
          {
            iamge: "/static/mobile/app3.png",
            top: 0.4
          }
        ];
        break;
      case 2:
        this.data = [
          {
            iamge: "/static/mobile/wx1.png"
          },
          {
            iamge: "/static/mobile/wx2.png"
          },
          {
            top: 0.6,
            iamge: "/static/mobile/wx3.png"
          }
        ];
        break;
      case 3:
        this.data = [
          {
            iamge: "/static/mobile/xt1.png"
          },
          {
            iamge: "/static/mobile/xt2.png"
          },
          {
            top: 0.6,
            iamge: "/static/mobile/xt3.png"
          }
        ];
        break;
    }
  },
  methods: {
    back() {
      this.$back();
    }
  }
};
</script>

<style scoped>
.back {
  position: absolute;
  top: 0.266667rem;
  left: 0.266667rem;
  z-index: 100;
  width: 0.666667rem;
  height: 0.666667rem;
}
.page {
  font-size: 0px;
  position: relative;
  z-index: 10;
}

img {
  width: 100%;
}

.footer {
  position: fixed;
  z-index:1000;
  width: 100%;
  bottom: 0;
  height: 1.22rem;
  background-color: rgba(0, 0, 0, 0.7);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.footer a {
  display: block;
  font-size: 0.29rem;
  border-radius: 5px;
  height: 0.67rem;
  line-height: 0.67rem;
  width: 60%;
  border: 1px solid #fff;
  text-align: center;
  color: #fff;
  margin: 0 auto;
}
</style>
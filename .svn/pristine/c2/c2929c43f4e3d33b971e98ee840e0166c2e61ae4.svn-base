<template>
  <div>
    <div style="background-color:#f9f9f9;">
      <!-- 头部/顶部 -->
      <Row class-name="header" type="flex" align="middle" justify="space-between">
        <Col span="12">
          <img src="/static/mobile/ld3.png" alt class="img">
        </Col>
        <Col span="12">
          <div class="div">
            <img src="/static/mobile/dianhua.png" alt>020-81807466
            <p>做更好的互联网服务提供商</p>
          </div>
        </Col>
      </Row>
      <!-- 轮播 -->
      <Carousel autoplay>
        <Carousel-item>
          <img src="/static/mobile/banner1.png" alt>
        </Carousel-item>
        <Carousel-item>
          <img src="/static/mobile/banner2.png" alt>
        </Carousel-item>
        <Carousel-item>
          <img src="/static/mobile/banner3.png" alt>
        </Carousel-item>
        <Carousel-item>
          <img src="/static/mobile/banner4.png" alt>
        </Carousel-item>
      </Carousel>
      <!-- 服务范围 -->
      <div class="server">
        <div class="server_h">
          <h2>服务范围</h2>
          <span>Service scope</span>
        </div>
        <Row :gutter="10" class-name="row-one" type="flex">
          <Col span="12">
            <div @click="nav(0)">
              <img src="/static/mobile/ld9.png" alt>
            </div>
          </Col>
          <Col span="12">
            <div @click="nav(1)">
              <img src="/static/mobile/ld11.png" alt>
            </div>
          </Col>
        </Row>
        <Row :gutter="10" type="flex" class-name="row-one">
          <Col span="12">
            <div @click="nav(2)">
              <img src="/static/mobile/ld16.png" alt>
            </div>
          </Col>
          <Col span="12">
            <div @click="nav(3)">
              <img src="/static/mobile/ld18.png" alt>
            </div>
          </Col>
        </Row>
      </div>

      <!-- 覆盖行业 -->
      <div class="server">
        <div class="server_h">
          <h2>覆盖行业</h2>
          <span>Covering industry</span>
        </div>
        <Row :gutter="10" class-name="row-two" type="flex">
          <Col span="6">
            <img src="/static/mobile/ld22.png" alt>
            <p>社交</p>
          </Col>
          <Col span="6">
            <img src="/static/mobile/ld24.png" alt>
            <p>电商</p>
          </Col>
          <Col span="6">
            <img src="/static/mobile/ld27.png" alt>
            <p>家政</p>
          </Col>
          <Col span="6">
            <img src="/static/mobile/ld29.png" alt>
            <p>企业</p>
          </Col>
        </Row>
        <Row :gutter="10" class-name="row-two" type="flex">
          <Col span="6">
            <img src="/static/mobile/ld35.png" alt>
            <p>餐饮</p>
          </Col>
          <Col span="6">
            <img src="/static/mobile/ld37.png" alt>
            <p>旅游</p>
          </Col>
          <Col span="6">
            <img src="/static/mobile/ld39.png" alt>
            <p>医疗</p>
          </Col>
          <Col span="6">
            <img src="/static/mobile/ld40.png" alt>
            <p>金融</p>
          </Col>
        </Row>
      </div>

      <!-- 我们的优势 -->
      <div class="server">
        <div class="server_h">
          <h2>我们的优势</h2>
          <span>Our advantages</span>
        </div>
        <div class="advantages">
          <img src="/static/mobile/bg.png" alt>
        </div>
      </div>

      <!-- 免费评估定制方案 -->
      <div class="server" id="scheme">
        <div class="server_h">
          <h2>免费评估定制方案</h2>
          <span>Evaluation scheme</span>
        </div>
        <div class="scheme">
          <form action>
            <div>
              <input type="text" id="custName" v-model="formData.custName" placeholder="请输入您的姓名">
            </div>
            <div>
              <input
                type="text"
                id="custPhone"
                v-model="formData.custPhone"
                placeholder="请输入您的手机号码"
              >
            </div>
            <div>
              <input
                type="text"
                id="custCompany"
                v-model="formData.custCompany"
                placeholder="请输入您的公司名称"
              >
            </div>
            <textarea placeholder="请输入您的项目需求" id="custRemark" v-model="formData.custRemark"></textarea>
          </form>
        </div>
        <div class="scheme_b" @click="submit">立即发布需求o</div>
      </div>
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
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { api } from "@/api";
export default {
  data() {
    return {
      formData: {
        custCompany: "",
        custName: "",
        custPhone: "",
        custRemark: ""
      }
    };
  },
  mounted() {
    this.change();
  },
  methods: {
    change() {
      return new Swiper(".swiper-container", {
        autoplay: 3000,
        loop: true,
        pagination: ".swiper-pagination"
      });
    },
    nav(index) {
      this.$go({
        path: "home/appDevelop1",
        query: {
          index: index
        }
      });
    },
    submit() {
      if (this.formData.custCompany.length == 0) {
        this.$Message.info("请填写公司名称");
        return;
      }
      if (this.formData.custPhone.length == 0) {
        this.$Message.info("请填写联系电话");
        return;
      }
      if (this.formData.custName.length == 0) {
        this.$Message.info("请填写联系人");
        return;
      }
      if (this.formData.custRemark.length == 0) {
        this.$Message.info("请填写项目需求");
        return;
      }
      api.productApi.addCustDemand(this.formData).then(res => {
        if (res.code == 200) {
          this.$Message.info({
            content: res.msg
          });
        }
        this.formData = {
          custCompany: "",
          custName: "",
          custPhone: "",
          custRemark: ""
        };
      });
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body,
html {
  background-color: #f9f9f9 !important;
  height: 100%;
  overflow-x: hidden;
}

body {
  font-size: 16px;
}

img {
  width: 100%;
  display: block;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

input {
  border: 0;
  outline: 0;
}
.row-one {
  margin-bottom: 0.266667rem;
  margin-top: 0.266667rem;
}
.row-two {
  margin-bottom: 0.266667rem;
  margin-top: 0.266667rem;
}
.row-two img {
  width: 60%;
  margin: 0 auto;
}
.header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin:.133333rem;
}

.header .img {
  width: 2.666667rem;
}

.header div {
  color: #1352a3;
  font-size: 0.133333rem;
  text-align: right;
}

.header .div img {
  vertical-align: middle;
  display: inline-block;
  margin-right: 0.15rem;
  width: 0.4rem;
}

.swiper-container {
  width: 100%;
  height: 4.59rem;
}

.server {
  text-align: center;
  margin-top: 0.8rem;
  margin: 0.266667rem;
}

.server .server_h h2 {
  font-size: 0.3rem;
  color: #4cb9de;
}

.server .server_h span {
  font-size: 0.15rem;
  height: 0.5rem;
  line-height: 0.5rem;
  display: inline-block;
  border-bottom: 1px solid #4cb9de;
}

.server .server_c {
  margin-top: 0.22rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.server .server_c div {
  width: 50%;
  border: 5px solid #f9f9f9;
  box-sizing: border-box;
}

.server .cover {
  margin-top: 0.22rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.server .cover div {
  flex: 1 25%;
  margin-bottom: 0.266667rem;
  height: 1.9rem;
}

.server .cover div img {
  width: 60%;
  margin: 0 auto;
}

.server .cover div p {
  font-size: 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
}

.server .cover_b {
  width: 1.8rem;
  height: 0.62rem;
  line-height: 0.62rem;
  text-align: center;
  background-color: #4cb9de;
  border-radius: 5px;
  font-size: 0.22rem;
  color: #fff;
  margin: 0 auto;
  -webkit-box-shadow: 0px 3px 3px 1px #ccc;
  box-shadow: 0px 3px 3px 1px #ccc;
}

.server .advantages {
  margin-top: 0.17rem;
}

.server .scheme {
  margin-top: 0.17rem;
  padding: 0 0.3rem;
  font-size: 0.24rem;
}

.server .scheme div {
  height: 0.8rem;
  line-height: 0.8rem;
  color: #ccc;
  border: 1px solid #ccc;
  margin-bottom: 0.17rem;
  padding: 0 0.18rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.server .scheme div input {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #f9f9f9;
}

.server .scheme textarea {
  font-size: 0.24rem;
  resize: none;
  line-height: 0.73rem;
  padding: 0 0.18rem;
  background-color: #f9f9f9;
  border-color: #ccc;
  width: 100%;
}

.server .scheme textarea::-webkit-input-placeholder {
}

.server .scheme_b {
  font-size: 0.22rem;
  width: 2.37rem;
  height: 0.62rem;
  line-height: 0.62rem;
  text-align: center;
  background-color: #4cb9de;
  color: #fff;
  -webkit-box-shadow: 0px 3px 3px 1px #ccc;
  box-shadow: 0px 3px 3px 1px #ccc;
  margin: 0 auto;
  margin-top: 0.48rem;
}

.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 1.22rem;

  background-color: rgba(0, 0, 0, 0.7);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-around;
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

.go-top {
  cursor: pointer;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  bottom: 20%;
  right: 1%;
  color: #fff;
  font-size: 18px;
}

/*# sourceMappingURL=index.css.map */
</style>
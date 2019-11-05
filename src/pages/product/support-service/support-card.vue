<template>
  <div>
    <div v-if="!Array.isArray(data)" class="supportCardDivType">
      <p class="titleType">{{data.subtitle}}</p>
      <Row :gutter="20">
        <i-col span="20">
          <i-input class="inputType" v-model="formData.inputValue" :placeholder="data.placeholder">
            <Select v-model="formData.selectValue" slot="append" style="width: 80px">
              <Option :value="o" v-for="o in data.placeholderList" :key="o">{{o}}</Option>
            </Select>
          </i-input>
        </i-col>
        <i-col span="4">
          <Button class="btnType" type="primary" @click="handlerClick" long>域名咨询</Button>
        </i-col>
      </Row>
      <p class="detailType">{{data.detail}}</p>
    </div>
    <!-- 中间卡片为数组 -->
    <div class="arrMainDivType" v-else>
      <Row type="flex" justify="space-between">
        <!-- 卡片循环 -->
        <i-col span="7" class="supportCardArrDivType" v-for="item in data" :key="item.key">
          <!-- <i-col span="24"> -->
          <support-card-item :data="item" />
          <!-- </i-col> -->
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  import supportCardItem from "./support-card-item";

  export default {
    components: {
      supportCardItem
    },
    props: ["data"],
    data() {
      return {
        formData: {
          inputValue: "",
          selectValue: ".com"
        }
      };
    },
    //   created() {
    //     console.log("data.isArray()", this.data.isArray());
    //   },
    methods: {
      handlerClick() {
        console.log("formData", this.formData);
        window.open("https://wanwang.aliyun.com/?spm=5176.8142029.selected.4.3dbd6d3en0OWBh")
      }
    }
  };

</script>

<style scoped lang="less">
  .supportCardDivType {
    //   margin: 0 10%;
    // border: 1px solid red;
    margin: -15% 5% 2%;
    padding: 5%;
    border-radius: 10px;
    // text-align: center;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
    background: #ffffff;

    .titleType {
      margin-bottom: 20px;
      font-size: 22px;
      color: #5f5f5f;
      letter-spacing: 5px;
    }
    .detailType{
      margin-top: 40px;
      font-size:20px;
      color:#ccc;
    }
    .inputType {
      /deep/input {
        height: 50px;
      }
    }

    .btnType {
      padding: 13px;
    }
  }

  .arrMainDivType {
    margin-top: -13%;

    .supportCardArrDivType {
      padding: 30px 0;
      margin-bottom: 40px;
      //   padding: 20px 9%;
      border-radius: 10px;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
      background: #ffffff;
    }
  }

</style>

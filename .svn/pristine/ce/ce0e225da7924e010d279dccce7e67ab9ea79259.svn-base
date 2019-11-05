<template>
  <div>
    <p>哈哈哈</p>
    <div class="mainDivType">
      <img class="imgType animated" :class="imgClass" src="static/webDesign/webCase/01.png">
      <Row type="flex" justify="space-around">
        <div v-for="item in animateCssData" :key="item.title">
          <p>{{item.title}}</p>
          <div style="margin:3px" v-for="o in item.list" :key="o" @click="handlerClick(o)">
            <Button type="primary">{{o}}</Button>
          </div>
        </div>
      </Row>
    </div>
  </div>
</template>

<script>
import animateCssData from "./testData";

export default {
  data() {
    return {
      animateCssData: animateCssData,
      imgClass: null
    };
  },
  created() {
    console.log("animateCssData", animateCssData);
  },
  methods: {
    handlerClick(val) {
      this.imgClass = val;
      console.log("valval", this.imgClass);
    }
  }
};
</script>

<style scoped>
.mainDivType {
  height: 1000px;
  text-align: center;
}
.imgType {
  width: 500px;
  margin: 80px;
  border: 1px solid #000000;
}
</style>
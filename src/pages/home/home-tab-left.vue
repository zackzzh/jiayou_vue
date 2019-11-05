<template>
  <div>
    <div style="margin: 5px" v-for="item in tabList" :key="item.key">
      <Card>
        <Row>
          <i-col span="8">
            <img style="width: 90%" :src="item.imgUrl">
          </i-col>
          <i-col span="16">
            <div>
              <p>{{item.title}}</p>
              <p>{{item.createDate}}</p>
            </div>
          </i-col>
        </Row>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabList"],
  created() {
    // console.log("tabList", this.tabList);
  }
};
</script>

<style scoped>
</style>
<template>
  <!-- 团队风采轮播 -->
  <div v-if="data && data.length>0" class="team">
    <p class="titleType">{{list.title}}</p>
    <img class="imgType" :src="data[0].picUrl">
  </div>
</template>

<script>
  export default {
    props: ["list", "data"],
    data() {
      return {
        value: 0
      };
    }
  };

</script>

<style scoped lang="less">
  .titleType {
    margin: 40px 0 50px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
  }

  .imgType {
    position: relative;
    font-size: 0;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    .titleType {
      margin: 30px 0;
      font-size: 20px;
    }

    .imgType {
      width: 59%;
      height: auto;
    }
  }

  @media screen and(min-width: 769px) and(max-width: 1024px) {
    .titleType {
      margin: 30px 0;
      font-size: 25px;
    }

    .imgType {
      width: 92%;
      height: auto;
    }
  }

  @media screen and(min-width: 1440px) and(max-width: 1600px) {
    .titleType {
      margin: 30px 0;
    }
  }

  @media screen and(min-width: 750px) and(max-width: 1440px) {
    .titleType {
      font-size: 30px;
      margin: 10px 0;
    }
  }

  // @media screen and(min-width: 1280px) and(max-width: 1366px) {
  //   .titleType {
  //     margin: 10px 0;
  //   }
  // }

</style>

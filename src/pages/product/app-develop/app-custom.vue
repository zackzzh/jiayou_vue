<template>
  <div>
    <Row>
      <i-col span="12">
        <div class="cardDivType">
          <p class="titleType">{{list.title}}</p>
          <p class="subtitleType">{{list.subtitle}}</p>
          <p class="contentType">{{list.content}}</p>
        </div>
      </i-col>
      <i-col span="12">
        <img style="width:140%" :src="list.imgUrl">
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: ["list"]
  };

</script>

<style scoped>
  .cardDivType {
    margin: 40px 0;
    text-align: left;
  }

  .titleType {
    color: #000000;
    margin-bottom: 20px;
    font-size: 48px;
    font-weight: bold;
  }

  .subtitleType {
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 50px;
    color: #0dafff;
  }

  .contentType {
    margin-top: 40px;
    text-align: left;
    font-size: 22px;
    line-height: 45px;
    color: #777777;
  }

  @media screen and (max-width:768px) {
    .cardDivType {
      margin: 10px 0 !important;
    }

    .titleType {
      margin-bottom: 5px !important;
      font-size: 25px !important;
    }

    .subtitleType {
      font-size: 27px !important;
      padding-bottom: 5px;
    }

    .contentType {
      font-size: 14px !important;
      line-height: 25px !important;
      margin-top: 10px !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    .cardDivType {
      margin: 20px 0 !important;
    }

    .titleType {
      margin-bottom: 10px !important;
      font-size: 30px !important;
    }

    .subtitleType {
      font-size: 32px !important;
      padding-bottom: 10px;
    }

    .contentType {
      font-size: 18px !important;
      line-height: 35px !important;
      margin-top: 15px !important;
    }
  }

  @media screen and (min-width: 1025px) and (max-width:1280px) {
    .cardDivType {
      margin: 30px 0 !important;
    }

    .titleType {
      margin-bottom: 15px !important;
      font-size: 40px !important;
    }

    .subtitleType {
      font-size: 42px !important;
      padding-bottom: 20px;
    }

    .contentType {
      margin-top: 25px !important;
    }
  }

</style>

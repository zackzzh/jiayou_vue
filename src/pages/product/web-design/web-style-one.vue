<template>
  <div class="mainDivType">
    <Card class="cardTyle">
      <Row>
        <img class="imgType" :src="list.imgUrl">
        <i-col offset="10" span="13">
          <div class="cardDivType">
            <!-- <img src="../../images/logo.png"> -->
            <!-- <h3>A high quality UI Toolkit based on Vue.js</h3> -->
            <p class="titleType">{{list.title}}</p>
            <p class="subtitleType">{{list.subtitle}}</p>
            <Divider />
            <p class="contentType">{{list.content}}</p>
          </div>
        </i-col>
      </Row>
    </Card>
  </div>
</template>

<script>
  export default {
    props: ["list"]
  };

</script>

<style scoped>
  .mainDivType {
    position: relative;
  }

  .cardTyle {
    margin-top: 5%;
    border-radius: 30px;
    letter-spacing: 8px;
    color: #000000;
  }

  .imgType {
    position: absolute;
    top: 20%;
    left: -20%;
    width: 60%;
    height: auto;
    z-index: 1;
  }

  .cardDivType {
    margin: 40px 0;
    text-align: right;
  }

  .titleType {
    margin-bottom: 20px;
    font-size: 48px;
    font-weight: bold;
  }

  .subtitleType {
    font-size: 60px;
    color: #0dafff;
  }

  .contentType {
    text-align: left;
    /* width: 60%; */
    /* float: right; */
    font-size: 18px;
    line-height: 45px;
    color: #777777;
  }

  @media screen and (max-width:768px) {
    .cardTyle {
      margin-top: -50px !important;
    }

    .imgType {
      top: 32% !important;
    }

    .cardDivType {
      margin:0px !important;
    }

    .titleType {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 0px;
    }

    .subtitleType {
      font-size: 22px;
      color: #0dafff;
    }

    .contentType {
      font-size: 12px;
      line-height: 15px;
    }
  }

  @media screen and (min-width:769px) and (max-width:1025px) {
    .cardTyle {
      margin-top: 0px !important;
    }

    .imgType {
      top: 20% !important;
    }

    .cardDivType {
      margin: 20px 0px !important;
    }

    .titleType {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .subtitleType {
      font-size: 25px;
      color: #0dafff;
    }

    .contentType {
      font-size: 15px;
      line-height: 15px;
    }
  }

  @media screen and (min-width:1025px) and (max-width:1280px) {
    .imgType {
      top: 15% !important;
    }

    .titleType {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .subtitleType {
      font-size: 30px;
      color: #0dafff;
    }

    .contentType {
      font-size: 15px;
      line-height: 18px;
    }
  }

  @media screen and (min-width:1281px) and (max-width:1366px) {
    .imgType {
      top: 16% !important;
    }

    .titleType {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .subtitleType {
      font-size: 40px;
      color: #0dafff;
    }

    .contentType {
      font-size: 15px;
      line-height: 20px;
    }
  }

  @media screen and (min-width:1367px) and (max-width:1440px) {
    .imgType {
      top: 16% !important;
    }

    .titleType {
      font-size: 35px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .subtitleType {
      font-size: 45px;
      color: #0dafff;
    }

    .contentType {
      font-size: 15px;
      line-height: 20px;
    }
  }

  @media screen and (min-width:1441px) and (max-width:1600px) {
    .imgType {
      top: 18% !important;
    }

    .titleType {
      font-size: 40px;
      font-weight: bold;
    }

    .subtitleType {
      font-size: 50px;
      color: #0dafff;
    }

    .contentType {
      font-size: 15px;
      line-height: 30px;
    }
  }

</style>

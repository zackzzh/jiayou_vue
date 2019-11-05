<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div v-if="btnFlag" class="go-top" @click="backTop">
      <img :src="'/static/back.png'" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: "App",
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true,
        btnFlag: false
      }
    },

    mounted() {
      window.addEventListener('scroll', this.scrollToTop);
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true;
        })
      },
      backTop() {
        let that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 40)
      },
      scrollToTop() {
        let that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if (that.scrollTop > 60) {
          that.btnFlag = true
        } else {
          that.btnFlag = false
        }
      }
    },
  }

</script>

<style>
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */

  }

  .animated {
    animation-duration: 1.5s !important;
    animation-delay: 0.5s !important;
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

</style>

<template>
  <div>
    <Row class="rowType" type="flex" justify="space-around">
      <MenuItem style="padding: 0;background: none;" :name="item.pathName" v-for="item in itemList" :key="item.key">
      <!-- <div class="iconType">
          <p>{{item.title}}{{item.iconUrl}}</p>
        </div>-->
      <div :class="{'active': imgShow === item.key }" class="iconType" @mouseenter=" mouseenter(item)" @mouseleave="mouseleave(item,$event)"
        @click="handleClick(item)">
        <img v-show="imgShow !== item.key" :src="item.iconUrl">
        <img v-show="imgShow === item.key" :src="item.activeUrl ? item.activeUrl : item.iconUrl">
        <p>{{item.title}}</p>
      </div>
      </MenuItem>
    </Row>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    props: ["itemList"],
    computed: {
      ...mapGetters('cases', ['getImgShow']),
      ...mapState('cases', ['imgShow']),
    },
    data() {
      return {
        show: true
      };
    },
    methods: {
      ...mapMutations('cases', ['setImgShow']),
      mouseenter(val) {
        this.show = true;
        this.setImgShow(val.key);
      },
      mouseleave(val, e) {
        if (this.show) {
          this.setImgShow(null);
        }
      },
      handleClick(val) {
        this.show = false;
        this.setImgShow(val.key);
      }
    }
  };

</script>

<style scoped lang="less">
  .rowType {
    width: 900px;
    margin: 20px 10px;

    .iconType {
      width: 90px;
      text-align: center;
      color: #ffffff;

      -webkit-transition: font-size 200ms, margin-top 200ms;
      /* Safari */
      transition: font-size 200ms, margin-top 200ms;

      // -webkit-transition: margin-top 2s; /* Safari */
      // transition: margin-top 2s;
      img {
        width: 50%;
      }

      p {
        margin-top: 8px;
      }
    }

    .iconType:hover {
      margin-top: -5px;
      margin-bottom: -4px;
      font-size: 16px;
      color: #ffa74e;
      // background: rgba(255, 255, 255, 0.3);
    }

    .active {
      margin-top: -5px;
      margin-bottom: -4px;
      font-size: 16px;
      color: #ffa74e;
    }
  }

</style>

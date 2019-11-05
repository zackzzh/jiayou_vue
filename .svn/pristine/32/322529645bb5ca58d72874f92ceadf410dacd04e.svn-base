<template>
  <!-- <div class="mainDivType"> -->
    <div class="anchorDivType animated" :class="list.animationClass">
      <Anchor class="anchorType" @on-select="handlerLink" @on-change="linkChange">
        <AnchorLink
          class="linkType"
          :class="{linkActiveType: activeLink === item.link}"
          :href="`#${item.link}`"
          :title="item.title"
          v-for="item in list.list"
          :key="item.key"
        />
        <AnchorLink
          class="linkType"
          style="border: 0;"
          :class="{linkActiveType: activeLink === 'airlines'}"
          href="#airlines"
          title="客户服务"
        />
      </Anchor>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      activeLink: ""
    };
  },
  methods: {
    handlerLink(val) {
      this.activeLink = val.slice(1);
    },
    linkChange(newHref, oldHref) {
      // 右侧锚点，值变化时，触发
      // 改变选中的样式
      console.log("选中", newHref, oldHref);
      const hrefValue = newHref.slice(1);
      if (hrefValue === "") {
        this.activeLink = oldHref.slice(1);
      } else {
        this.activeLink = hrefValue;
      }
    }
  }
};
</script>

<style scoped lang="less">
// .mainDivType {
//   position: relative;
  .anchorDivType {
    // width: 100px;
    position: fixed;
    top: 120px;
    right: 100px;
    background-color: red;
    // background-image: url("../assets/home/rightMenu(2).png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 10;
    .anchorType {
      text-align: center;
      /deep/ .ivu-anchor-ink {
        display: none;
      }
      .linkType {
        padding: 0;
        margin: 0;
        // border-bottom: 1px solid rgba(86, 121, 255, 1);
        border-bottom: 1px solid rgba(86, 121, 255, 0.4);
        text-align: center;
        /deep/ .ivu-anchor-link-title {
          padding: 10px;
          color: #a9d1ff;
        }
        /deep/ .ivu-anchor-link-title:hover {
          margin-left: -2px;
          font-size: 16px;
          color: #1b85ff;
          background: #ffffff;
        }
      }
      .linkActiveType {
        font-size: 16px;
        background: #ffffff;
        margin-left: -2px;
        /deep/ .ivu-anchor-link-title {
          color: #1b85ff;
        }
      }
    }
  }
// }
</style>
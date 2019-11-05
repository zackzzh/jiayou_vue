<template>
  <div>
    <header-menu @fromCard="clickCard" :list="menuData" :data="productData"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import listData from "./headerData";
import headerMenu from "./header-menu";

export default {
  components: {
    headerMenu
  },
  mounted() {
    // console.log("menuData", this.menuData);
    this.getProduct();
  },
  computed: {
    ...mapState("product", ["productData"])
  },
  data() {
    return {
      menuData: listData
    };
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    // 从二级菜单card传过来的数据
    clickCard(val) {
      // console.log("我是menu传过来的card内容", val);
    }
  }
};
</script>

<style scoped>
</style>
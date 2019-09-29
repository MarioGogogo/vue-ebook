<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="menuVisible">
      <div class="left">
        <span class="iconfont icon-arrow-ios-back-outline"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="iconfont icon-dianzan"></span>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont icon-gouwuche"></span>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { ebookMixin } from "../../utils/mixin";
export default {
  name: "EbookTitle",
  mixins: [ebookMixin]
};
</script>


<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  width: 100%;
  height: 80px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
  font-size: 22px;
  .iconfont {
    font-size: 50px;
  }
  .left {
    flex: 0 0 37px;
    @include right;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 37px;
      @include left;
    }
  }
}
</style>
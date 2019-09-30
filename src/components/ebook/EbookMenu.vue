<template>
  <div>
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        :class="{'hide-box-shadow':!menuVisible || settingVisible >= 0}"
        v-show="menuVisible"
      >
        <div class="icon-wrapper">
          <span class="iconfont icon-cebianlan" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont icon-xiangkan" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont icon-icontubiao" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="iconfont icon-ziti" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
    <ebook-setting-font></ebook-setting-font>
    <ebook-setting-font-popup></ebook-setting-font-popup>
  </div>
</template>

<script>
import { ebookMixin } from "../../utils/mixin";
import EbookSettingFont from "./EbookSettingFont";
import EbookSettingFontPopup from "./EbookSettingFontPopup";

export default {
  name: "EbookMenu",
  mixins: [ebookMixin],
  components: {
    EbookSettingFont,
    EbookSettingFontPopup
  },
  methods: {
    showSetting(index) {
      console.log("显示设置", index);
      this.setSettingVisible(index);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
.menu-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 200;
  display: flex;
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
  font-size: 22px;
  .iconfont {
    font-size: 50px;
  }
  &.hide-box-shadow {
    box-shadow: none;
  }
  .icon-wrapper {
    flex: 1;
    @include center;
    .icon-progress {
      font-size: 24px;
    }
    .icon-A {
      font-size: 20px;
    }
  }
}
</style>
<template>
  <transition name="popup-slide-up">
    <div class="ebook-popup-list" v-show="fontFamilyVisible">
      <div class="ebook-popup-title">
        <div class="ebook-popup-title-icon" @click="hideFontFamilySetting">
          <span class="iconfont icon-arrow-ios-back-outline"></span>
        </div>
        <span class="ebook-popup-title-text">{{$t('book.selectFont')}}</span>
      </div>
      <div class="ebook-popup-list-wrapper">
        <div
          class="ebook-popup-item"
          v-for="(item,index) in fontFamily"
          :key="index"
          @click="setFontFamily(item.font)"
        >
          <div class="ebook-popup-item-text" :class="{'selected':isSelected(item)}">{{item.font}}</div>
          <div class="ebook-popup-item-check" v-if="isSelected(item)">
            <span class="iconfont icon-chenggong"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import { ebookMixin } from "../../utils/mixin";
import { FONT_FAMILY } from "../../utils/book";
import {
  setLocalStorage,
  getLocalStorage,
  saveFontFamily
} from "../../utils/localStorage";
export default {
  name: "EbookSettingFontPopup",
  mixins: [ebookMixin],
  data() {
    return {
      fontFamily: FONT_FAMILY
    };
  },
  methods: {
    setFontFamily(fontFamily) {
      this.setDefaultFontFamily(fontFamily);
      saveFontFamily(this.fileName, fontFamily);
      if (fontFamily === "Default") {
        this.currentBook.rendition.themes.font("Microsoft YaHei");
      } else {
        this.currentBook.rendition.themes.font(fontFamily);
      }
    },
    isSelected(item) {
      return this.defaultFontFamily === item.font;
    },
    hideFontFamilySetting() {
      this.setFontFamilyVisible(false);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
* {
  outline: 1px solid rgb(241, 135, 135);
}
.ebook-popup-list {
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 350;
  width: 100%;
  font-size: 0;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  .iconfont {
    font-size: 40px;
  }
  .ebook-popup-title {
    position: relative;
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid #b8b9bb;
    box-sizing: border-box;
    @include center;
    .ebook-popup-title-text {
      font-size: 26px;
      font-weight: bold;
    }
    .ebook-popup-title-icon {
      position: absolute;
      left: 15px;
      top: 0;
      height: 100%;
      @include center;
    }
  }
  .ebook-popup-list-wrapper {
    .ebook-popup-item {
      @include center;
      padding: 15px;
      .ebook-popup-item-text {
        flex: 1;
        font-size: 26px;
        text-align: left;
        &.selected {
          color: red;
          font-size: blod;
        }
      }
      .iconfont {
        color: red;
      }
      .ebook-popup-item-check {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
/** * @Author: lovewcc * @Date: 2019-09-29T22:46:59+08:00 * @Last modified by:
lovewcc * @Last modified time: 2019-10-01T00:45:21+08:00 */

<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
      <div class="setting-font-size">
        <div class="preview" ref="left">
          <span :style="styleLeft" ref="leftText">A</span>
        </div>
        <div class="select">
          <div
            class="select-wrapper"
            v-for="(item, index) in fontSizeList"
            :key="index"
            @click="setFontSize(item.fontSize)"
            ref="item"
          >
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show="defaultFontSize === item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="preview" ref="right">
          <span :style="styleRight" ref="rightText">A</span>
        </div>
      </div>
      <div class="setting-font-family" @click.stop="showFontFamilySetting">
        <div class="setting-font-family-text-wrapper">
          <span class="setting-font-family-text">{{ defaultFontFamily }}</span>
        </div>
        <div class="setting-font-family-icon-wrapper">
          <span class="iconfont icon-arrow-ios-forward-outline"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from "../../utils/mixin";
import { FONT_SIZE_LIST } from "../../utils/book";
import {
  getFontSize,
  saveFontSize,
  saveFontFamily
} from "../../utils/localStorage";
export default {
  name: "EbookSettingFont",
  mixins: [ebookMixin],
  data() {
    return {
      styleLeft: {},
      styleRight: {},
      fontSizeList: FONT_SIZE_LIST
    };
  },
  watch: {
    settingVisible(v) {
      if (v === 0) {
        this.$nextTick(() => {
          // this.genStyle();
          console.log("设置拖动", this.$refs.left);
        });
      }
    }
  },
  methods: {
    setFontSize(fontSize) {
      // this.genStyle(fontSize);
      this.setDefaultFontSize(fontSize);
      saveFontSize(this.fileName, fontSize);
      this.currentBook.rendition.themes.fontSize(fontSize);
    },
    showFontFamilySetting() {
      console.log("字体弹窗");
      this.setFontFamilyVisible(true);
    },
    genStyle() {
      const left = this.$refs.left.getBoundingClientRect().width;
      const right = this.$refs.left.getBoundingClientRect().width;
      const leftText = this.$refs.leftText.getBoundingClientRect().width;
      const rightText = this.$refs.leftText.getBoundingClientRect().width;
      const item = this.$refs.item[0].getBoundingClientRect().width;
      this.styleLeft = {
        marginLeft: (left + item - leftText) / 2 + "px",
        fontSize: this.fontSizeList[0].fontSize + "px"
      };
      this.styleRight = {
        marginRight: (right + item - rightText) / 2 + "px",
        fontSize:
          this.fontSizeList[this.fontSizeList.length - 1].fontSize + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global.scss";

.setting-wrapper {
  position: absolute;
  bottom: 80px;
  left: 0;
  z-index: 190;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
  .setting-font-size {
    flex: 2;
    display: flex;
    height: 100%;
    .preview {
      flex: 0 0 40px;
      @include center;
    }
    .select {
      display: flex;
      flex: 1;
      .select-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        &:first-child {
          .line {
            &:first-child {
              border-top: none;
            }
          }
        }
        &:last-child {
          .line {
            &:last-child {
              border-top: none;
            }
          }
        }
        .line {
          flex: 1;
          height: 0;
        }
        .point-wrapper {
          position: relative;
          flex: 0 0 0;
          width: 0;
          height: 7px;
          .point {
            position: absolute;
            top: -8px;
            left: -10px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
            @include center;
            .small-point {
              width: 5px;
              height: 5px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
  .setting-font-family {
    flex: 1;
    font-size: 30px;
    @include center;
    .setting-font-family-text-wrapper {
      @include center;
    }
    .setting-font-family-icon-wrapper {
      @include center;
    }
    .iconfont {
      font-size: 30px;
    }
  }
}
</style>

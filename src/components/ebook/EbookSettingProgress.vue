<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 2">
      <div class="setting-progress">
        <div class="read-time-wrapper">
          <span class="read-time-text">{{getReadTime()}}</span>
          <span class="icon-forward"></span>
        </div>
        <div class="progress-wrapper">
          <div class="progress-icon-wrapper" @click="prevSection()">
            <span class="iconfont icon-arrow-ios-back-outline"></span>
          </div>
          <input
            class="progress"
            type="range"
            max="100"
            min="0"
            step="1"
            @input="onProgressInput($event.target.value)"
            @change="onProgressChange($event.target.value)"
            :value="progress"
            :disabled="!bookAvailable"
            ref="progress"
          />
          <div class="progress-icon-wrapper" @click="nextSection()">
            <span class="iconfont icon-arrow-ios-forward-outline"></span>
          </div>
        </div>
        <div class="text-wrapper">
          <span class="progress-section-text">{{getSectionName}}</span>
          <span class="progress-text">({{bookAvailable ? progress + '%' : $t('book.loading')}})</span>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import { ebookMixin } from "../../utils/mixin";
export default {
  mixins: [ebookMixin],
  name: "EbookSettingProgress",
  methods: {
    getReadTime() {
      console.log("阅读时间");
    },
    prevSection() {
      console.log("prevSection");
    },
    onProgressInput(value) {
      console.log("onProgressInput");
    },
    onProgressChange(value) {
      console.log("onProgressChange");
    },
    nextSection() {
      console.log("nextSection");
    }
  },
  computed: {
    getSectionName() {
      return "xuanzhe";
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
  width: 100%;
  height: 90px;
  box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.15);
  .iconfont {
    font-size: 40px;
  }
  .setting-progress {
    position: relative;
    width: 100%;
    height: 100%;
    .read-time-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 60px;
      @include center;
      font-size: 12px;
    }
    .progress-wrapper {
      width: 100%;
      height: 100%;
      @include center;
      padding: 0 15px;
      box-sizing: border-box;
      .progress {
        flex: 1;
        width: 100%;
        -webkit-appearance: none;
        height: 2px;
        background: -webkit-linear-gradient(#5d6268, #5d6268) no-repeat, #b4b5b7;
        background-size: 0 100%;
        margin: 0 10px;
        &:focus {
          outline: none;
        }
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ceced0;
          box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
          border: none;
        }
      }
      .progress-icon-wrapper {
        flex: 0 0 22px;
        font-size: 22px;
        @include center;
      }
    }
    .text-wrapper {
      position: absolute;
      left: 0;
      bottom: 5px;
      width: 100%;
      font-size: 12px;
      text-align: center;
      padding: 0 15px;
      box-sizing: border-box;
      @include center;
      .progress-section-text {
        line-height: 15px;
        @include ellipsis;
      }
      .progress-text {
      }
    }
  }
}
</style>
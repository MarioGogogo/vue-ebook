<template>
  <div class="ebook-read">
    <div id="read"></div>
  </div>
</template>



<script>
import Epub from "epubjs";
import { ebookMixin } from "../../utils/mixin";
import {
  getFontFamily,
  saveFontFamily,
  getFontSize,
  saveFontSize
} from "../../utils/localStorage";
import { getDiffieHellman } from "crypto";
global.epub = Epub;
export default {
  mixins: [ebookMixin],
  methods: {
    initEpub() {
      const baseUrl = "http://192.168.0.111:8080/#/ebook";
      const fileUrl = baseUrl + this.fileName + ".epub";
      console.log("fileUrl", fileUrl);

      const file = "/2018_Book_HousingEstatesInEurope.epub";
      this.book = new Epub(file);
      this.setCurrentBook(this.book);
      console.log(this.book);

      this.rendition = this.book.renderTo("read", {
        width: innerWidth,
        height: innerHeight,
        method: "default" //微信
      });

      this.rendition.display().then(() => {
        this.initFontFamily();
        this.initFontSize();
      });

      // 翻页为iframe绑定事件
      this.rendition.on("touchstart", event => {
        // 获取一只手指点击屏幕的x轴位置
        console.log("touchstart", event);

        this.touchStartX = event.changedTouches[0].clientX;
        // 获取手指点击时间来判断是否是手指长按屏幕事件
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on("touchend", event => {
        // 离开屏幕时获得x轴的偏移量
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        // 我们消耗的时间
        const time = event.timeStamp - this.touchStartTime;
        console.log(offsetX, time);

        // 判断滑动方向和方式
        // 划过时间需要小于500毫秒，偏移量大于40时我们进入上一页
        if (time < 500 && offsetX > 40) {
          this.prevPage();
        } else if (time < 500 && offsetX < -40) {
          //切换到下一页
          this.nextPage();
        } else {
          // 显示标题和菜单栏
          this.showTitleAndMenu();
        }
        // 禁止默认事件和方法调用
        event.preventDefault();
        event.stopPropagation();
      });
      // rendition的钩子函数 //路径地址 192.168.2.22/font/default.css
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          // contents.addStylesheet(
          //   `${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`
          // ),
          contents.addStylesheet("http://192.168.8.93:8000/fonts/Arial.css"),
          contents.addStylesheet("http://192.168.8.93:8000/fonts/bebas.css"),
          contents.addStylesheet("http://192.168.8.93:8000/fonts/gaobai.css"),
          contents.addStylesheet("http://192.168.8.93:8000/fonts/hksn.css"),
          contents.addStylesheet("http://192.168.8.93:8000/fonts/xiaolong.css")
        ]).then(() => {
          console.log("字体加载完");
        });
      });
    },
    //初始化字体设置
    initFontFamily() {
      const font = getFontFamily(this.fileName);
      if (!font) {
        saveFontFamily(this.fileName, this.defaultFontFamily);
      } else {
        this.rendition.themes.font(font);
        this.setDefaultFontFamily(font);
      }
    },
    //初始化字号
    initFontSize() {
      const fontsize = getFontSize(this.fileName);
      if (!fontsize) {
        saveFontSize(this.fileName, this.defaultFontSize);
      } else {
        this.rendition.themes.fontSize(fontsize);
        this.setDefaultFontSize(fontsize);
      }
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
        this.menuVisible && this.showTitleAndMenu();
      }
      console.log("上一页");
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
        this.showTitleAndMenu();
        this.menuVisible && this.showTitleAndMenu();
      }
      console.log("下一页");
    },

    showTitleAndMenu() {
      console.log("切换标题和菜单栏");
      if (this.menuVisible) {
        this.setSettingVisible(-1); //隐藏字号设置面板
        this.setFontFamilyVisible(false);
      }
      this.setMenuVisible(!this.menuVisible);
    }
  },
  mounted() {
    const fileName = this.$route.params.fileName.split("|").join("/");

    this.setFileName(fileName.split(".")[0]).then(() => {
      this.initEpub();
    });
    // this.$store.dispatch("setFileName", fileName.split(".")[0]).then(() => {
    //   this.initEpub();
    // });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
.ebook-read {
  margin-top: 40px;
}
#read {
  border: 1px solid red;
}
</style>
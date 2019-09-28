<template>
  <div class="ebook-read">
    <div id="read"></div>
  </div>
</template>



<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Epub from "epubjs";
global.epub = Epub;
export default {
  computed: {
    ...mapGetters(["fileName", "menuVisible"])
  },
  methods: {
    initEpub() {
      const baseUrl = "http://192.168.0.111:8080/#/ebook";
      const fileUrl = baseUrl + this.fileName + ".epub";
      console.log("fileUrl", fileUrl);

      const file = "/2018_Book_HousingEstatesInEurope.epub";
      this.book = new Epub(file);
      console.log(this.book);

      this.rendition = this.book.renderTo("read", {
        width: innerWidth,
        height: innerHeight,
        method: "default" //微信
      });

      this.rendition.display();

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
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
      console.log("上一页");
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
      console.log("下一页");
    },
    showTitleAndMenu() {
      console.log("切换标题和菜单栏");
      this.$store.dispatch("setMenuVisible", !this.menuVisible);
    }
  },
  mounted() {
    const fileName = this.$route.params.fileName.split("|").join("/");

    this.$store.dispatch("setFileName", fileName.split(".")[0]).then(() => {
      this.initEpub();
    });
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
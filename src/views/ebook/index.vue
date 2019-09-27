<template>
  <div class="ebook">
    aaaa
    <ebook-read></ebook-read>
  </div>
</template>

<script>
import EbookRead from "../../components/ebook/reader";
import Epub from "epubjs";
export default {
  name: "ebook",
  components: {
    EbookRead
  },
  methods: {
    initEpub() {
      const fileName = this.$router.params.fileName.split("|").join("/");
      const baseUrl = "http://192.168.0.107:8080/#/ebook";
      const fileUrl = baseUrl + fileName + ".epub";
      this.book = new Epub(fileUrl);
      this.rendition = this.book.renderTo("read", {
        width: innerWidth,
        height: innerHeight,
        method: "default" //微信
      });

      this.rendition.display();
      this.rendition.on("touchstart", event => {
        console.log("手指移动开始", event);
      });
      this.rendition.on("touchend", event => {
        console.log("手指移动结束", event);
      });
      console.log("初始化");
    }
  },
  mounted() {
    const fileName = this.$router.params.fileName.split("|").join("/");
    this.$store.dispatch("setFileName", fileName).then(res => {
      console.log("路径里", res);
      this.initEpub();
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";
</style>
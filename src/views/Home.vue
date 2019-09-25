<template>
  <span class="home">
    <span class="text">
      HELLO WORD THIS IS BOOK
      <span class="iconfont icon-chenggong"></span>
    </span>
    <div id="area"></div>
  </span>
</template>

<script>
import Epub from "epubjs";

global.ePub = Epub;

export default {
  name: "home",
  mounted() {
    this.book = new Epub("/择天记.epub");
    console.log(this.book);
    this.book
      .renderTo("area", {
        width: window.innerWidth,
        height: window.innerHeight
      })
      .display();
  }
};
</script>

<style>
#area {
  border: 1px solid red;
}
.text {
  font-size: 22px;
  font-family: "Arial";
}
.home .iconfont {
  font-size: 44px;
  color: red;
}
</style>

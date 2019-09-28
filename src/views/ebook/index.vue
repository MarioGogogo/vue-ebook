<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-read></ebook-read>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
import EbookTitle from "../../components/ebook/EbookTitle";
import EbookRead from "../../components/ebook/EbookReader";
import EbookMenu from "../../components/ebook/EbookMenu";
export default {
  name: "ebook",
  components: {
    EbookTitle,
    EbookRead,
    EbookMenu
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
</style>
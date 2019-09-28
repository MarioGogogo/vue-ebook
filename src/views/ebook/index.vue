<template>
  <div class="ebook">
    <ebook-read></ebook-read>
  </div>
</template>

<script>
import EbookRead from "../../components/ebook/reader";
export default {
  name: "ebook",
  components: {
    EbookRead
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global.scss";
</style>
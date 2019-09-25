<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// 设置rem
export default {};
document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  let fontsize = window.innerWidth / 10;
  fontsize = fontsize > 50 ? 50 : fontsize;
  html.style.fontSize = fontsize + "px";
});
</script>

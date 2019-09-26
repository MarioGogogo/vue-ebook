<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="top-1px" class="ignore">看顶部1px</div>
    <div id="background-top-1px">看顶部使用background处理的1px</div>
    <div class="content">
      <div class="color">元素容器宽高比188/246</div>
    </div>
    <div class="img">
      <img
        src="//gw.alicdn.com/imgextra/i1/642910327/TB26bQ_bb_0UKFjy1XaXXbKfXXa_!!642910327-0-beehive-scenes.jpg"
        alt
        width="100%"
        height="100%"
      />
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 25px;
}
#top-1px {
  font-size: 44px;
}
.ignore {
  border-top: 1px solid #00b1ff;
}
@svg 1px-background {
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}
#background-top-1px {
  font-size: 40px;
  background: white svg(1px-background param(--color #00b1ff));
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 1px;
}
.content {
  width: 188px;
  padding: 10px;
}

.color {
  width: 188px;
  height: 246px;
  color: #fff;
  background: #333;
}
.img {
  margin-top: 10px;
  width: 600px;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}
</style>

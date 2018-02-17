<template>
  <div class="home_container">
    <header class="top_tips">
      <span class="num_tip">0</span>
      <span class="num_tip">题目</span>
    </header>
    <div>
      <div class="home_logo item_container_style"></div>
      <router-link to="/item" class="start button_style"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  methods: {}
}

</script>
<style lang="less">
.top_tips {
  position: absolute;
  width: 3.25rem;
  height: 7.35rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url('~assets/images/WechatIMG2.png') no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: "黑体";
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style {
  position: absolute;
  top: 4.1rem;
  left: 1rem;
  height: 11.625rem;
  width: 13.15rem;
}
.home_logo {
  background: url('~assets/images/1-2.png') no-repeat;
  background-size: 13.142rem 100%;
  background-position: right center;
}
.button_style {
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.start {
  background-image: url('~assets/images/1-4.png');
}
</style>

<template>
  <div class="home_container">
    <header class="top_tips">
      <span class="num_tip">0</span>
      <span class="num_tip">题目</span>
    </header>
    <div>
      <div class="item_back item_container_style">
        <div class="item_list_container">
          <header class="item_title"></header>
          <ul>
            <li class="item_list">
              <span class="option_style"></span>
              <span class="option_detail"></span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next_item button_style"></span>
      <span class="submit_item button_style"></span>
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
  .item_back {
    background-image: url('~assets/images/2-1.png');
    background-size: 100% 100%;
  }
  .next_item {
    background-image: url('~assets/images/2-2.png');
  }
  .submit_item {
    background-image: url('~assets/images/3-1.png');
  }
  .item_list_container {
    position: absolute;
    height: 7rem;
    width: 8rem;
    top: 2.4rem;
    left: 3rem;
    -webkit-font-smoothing: antialiased;
  }
  .item_title {
    font-size: 0.65rem;
    color: #fff;
    line-height: 0.7rem;
  }
  .item_list {
    font-size: 0;
    margin-top: 0.4rem;
    width: 10rem;
    span {
      display: inline-block;
      font-size: 0.6rem;
      color: #fff;
      vertical-align: middle;
    }
    .option_style {
      height: 0.725rem;
      width: 0.725rem;
      border: 1px solid #fff;
      border-radius: 50%;
      line-height: 0.725rem;
      text-align: center;
      margin-right: 0.3rem;
      font-size: 0.5rem;
      font-family: "Arial";
    }
    .has_choosed {
      background-color: #ffd400;
      color: #575757;
      border-color: #ffd400;
    }
    .option_detail {
      width: 7.5rem;
      padding-top: 0.11rem;
    }
  }
</style>

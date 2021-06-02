<template>
  <div class="films-list">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../images/pic-1.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../images/pic-2.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../images/pic-3.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../images/pic-4.jpg" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
    <div class="city-fixed">
      <span>{{ curCity }}</span>
      <i class="iconfont icon-jiantou-copy-copy
      "></i>
    </div>
    <div class="tab-bar-wrapper">
      <ul class="tab-bar">
        <li class="z-act">
          <span>正在热映</span>
        </li>
        <li>
          <span>即将上映</span>
        </li>
        <div class="tabs-slide">
                        <span></span>
                    </div>
      </ul>
    </div>
    <div class="movies"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'Films',

  data () {
    return {
      curCity: ''
    }
  },

  created () {
    // 获取当前城市名称
    /* eslint-disable */
    let myCity = new BMap.LocalCity();
    myCity.get((result) => {
      this.curCity = result.name;
    })
  },

  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }
};
</script>

<style lang="scss">
// @代表src 在webpack.base.conf里面可以设置
@import "@/styles/common/px2rem.scss";
@import "swiper/dist/css/swiper.min.css";

.films-list {
  flex: 1;
  overflow-y: auto;
}

.swiper-container {
  width: 100%;
  // height: px2rem(210);
  .swiper-pagination-bullet {
  width: px2rem(8);
  height: px2rem(8);
  }

  .swiper-pagination-bullet-active {
    background: #f1f1f1;
  }

  .swiper-slide{
    img{
      height: 100%;
      width: 100%;
    }
  }
}

.movies{
  height: px2rem(3000);
  width: 100%;
  overflow: auto;
}

.city-fixed{
  position: absolute;
  top: px2rem(18);
  left: px2rem(7);
  color: #fff;
  z-index: 10;
  font-size: px2rem(13);
  background: rgba(0,0,0,.2);
  height: px2rem(30);
  line-height: px2rem(30);
  border-radius: px2rem(15);
  text-align: center;
  padding: 0 px2rem(5);
  .icon-jiantou-copy-copy{
    font-size: px2rem(10)
  }
}

.tab-bar-wrapper {
  position: sticky;
  z-index: 999;
  top: px2rem(0);
  height: px2rem(50);
  border-bottom: px2rem(1) solid #ededed;
  background: #fff;
  .tab-bar {
    display: flex;
    height: px2rem(50);
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      font-size: px2rem(14);
      span {
        padding: 0 px2rem(10);
      }
      &.z-act {
        color: #ff5f16;
      }
    }

    .tabs-slide{
    width: 50%;
    position: absolute;
    height: 2px;
    top: px2rem(47);
        span{
            border-bottom: px2rem(2) solid #ff5f16;
            display: block;
            margin:0 px2rem(66);
            border-radius: px2rem(20)
        }
    }
  }
}
</style>

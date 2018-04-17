<template>
  <div id="detail">
    <my-title title="项目介绍" />
    <div class="banner">
      <div class="slider-wrapper">
        <slider :styleBottom="'40px'">
          <div v-for="(i, index) in imglist" :key="index">
            <img :src="i" alt="">
          </div>
        </slider>
      </div>
    </div>
  </div>
</template>

<script>
import myTitle from '../../base/title/title'
import scroll from 'base/scroll/scroll'
import slider from 'base/slider/slider'
export default {
  data: () => ({
    imglist: [
      'http://sofmanager.fangsir007.com/image/ddmrfdzhutu1.jpg',
      'http://sofmanager.fangsir007.com/image/ddmrfdzhutu1.jpg',
      'http://sofmanager.fangsir007.com/image/ddmrfdzhutu1.jpg',
      'http://sofmanager.fangsir007.com/image/ddmrfdzhutu1.jpg',
      'http://sofmanager.fangsir007.com/image/ddmrfdzhutu1.jpg'
    ]
  }),
  components: {
    myTitle,
    scroll,
    slider
  }
}
</script>

<style lang="stylus" scoped>
#detail {
  .banner {
    .slider-wrapper {
      position: relative;
      width: 100%;
    }

    img {
      width: 100%;
      height: 200px;
    }
  }
}
</style>

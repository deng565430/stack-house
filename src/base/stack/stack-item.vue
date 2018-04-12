<template>
  <div class="item">
    <div class="item-img" >
      <img :src="'http://sofmanager.fangsir007.com/image/' + data.img" alt="">
      <div class="img-album"><i class="icon-images"></i> 8</div>
    </div>
    <div class="item-cover">
      <p><span>581</span>万 <span>99.81</span>平方米 <strong>两室两厅 南北朝向</strong></p>
    </div>
    <div class="small-img">
      <div>
        <img :src="'http://sofmanager.fangsir007.com/image/' + data.img" alt="">
      </div>
      <div>
        <img :src="'http://sofmanager.fangsir007.com/image/' + data.img" alt="">
      </div>
      <div>
        <img :src="'http://sofmanager.fangsir007.com/image/' + data.img" alt="">
      </div>
      <div>
        <img :src="'http://sofmanager.fangsir007.com/image/' + data.img" alt="">
      </div>
    </div>
    <div class="item-top">
      <div class="item-addr">
        <h1>{{data.title}} <span> {{data.addr}}</span></h1>
      </div>
      <div class="item-hot">
        <div class="top">
          <span><img :src="houseHome" alt=""></span>
          <span>
            <rate :num="4" :text="'该房源很火'"></rate>
          </span>
        </div>
        <div class="bottom">
          <span><img :src="houseHot" alt=""></span>
          <span>
            <rate :num="4" :type="'star'" :text="'该小区很火'"></rate>
          </span>
        </div>
      </div>
      <div class="transverse-ine">
        <img :src="transverseLine" alt="">
      </div>
      <div class="item-desc">
        <p>近7号线真图实价不来虚的、多层房一楼双南双天井、万里实验学校</p>
      </div>
    </div>
  </div>
</template>
<script>
import Rate from 'base/rate/rate'
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      transverseLine: require('common/image/transverse-line.png'),
      houseHome: require('common/image/house-home.png'),
      houseHot: require('common/image/house-hot.png')
    }
  },
  components: {
    Rate
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.item
  height: 100%
  background: #fff
  position: relative
.item-img
  height: 9.5rem
  overflow: hidden
  position: relative
  .img-album
    position: absolute
    left: 15px
    top: 15px
    padding: 8px 10px
    background: rgba(0, 0, 0, .5)
    border-radius: 5px
    text-align: center
    font-size: $font-size-medium-x
    color: #fff
  img
    width: 100%
    height: 100%
.small-img
  display: flex
  padding: 3px
  div
    padding-left: 2px
    flex: 1
    &:first-child
      padding-left: 0
    img
      width: 100%
.item-cover
  position: absolute
  height: 2rem
  background: rgba(0, 0, 0 .5)
  right: 0
  left: 0
  top: 7.5rem
  p
    color: #fff
    line-height: 2rem
    font-weight: 100
    font-size: 0.8rem
    span
      color: #e96d26
.item-top
  background: #fff
  padding: 10px

.item-addr
  border-radius: 5px
  h1
    text-align: center
    margin: 0
    line-height: 2
    font-size: 25px
    font-weight: bold
    span
      font-size: $font-size-large
.item-hot
  font-size: $font-size-medium-x
  .top, .bottom
    display: flex
    justify-content: center
    margin: .2rem 0
    span
      padding: 0 5px
      line-height: 1.5
      vertical-align: top
      img
        width: 80%
        vertical-align: bottom
.transverse-ine
  text-align: center
  height: 30px
  img
    width: 100%
.item-desc
  text-align: left
  line-height: 1.5
  font-size: $font-size-medium
  background: #fff
</style>

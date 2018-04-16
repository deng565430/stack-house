<template>
  <div class="item">
    <div class="item-img" >
      <img :src="'http://sofmanager.fangsir007.com/image/' + data.listChar" alt="">
      <div class="img-album"><i class="icon-images"></i> {{data.pictureNum}}</div>
    </div>
    <div class="item-cover">
      <p><span>{{data.totalPrice}}</span>万 <span>{{data.area}}</span>平方米 <strong>{{data.room}}室{{data.hall}}厅 </strong></p>
    </div>
    <div class="small-img">
      <div :key="item" v-for="item in data.listPropertyAlbum">
        <img :src="'http://sofmanager.fangsir007.com/image/' + item" alt="">
      </div>
    </div>
    <div class="item-top">
      <div class="item-addr">
        <h1>{{data.name}} <span> {{data.district}}</span> <span>{{data.block}}</span></h1>
      </div>
      <div class="item-hot">
        <div class="top">
          <span><img :src="houseHome" alt=""></span>
          <span>
            <rate :num="data.heat" :text="data.heat >= 3 ?'该房源很火' : '该房源比较热'"></rate>
          </span>
        </div>
        <div class="bottom">
          <span><img :src="houseHot" alt=""></span>
          <span>
            <rate :num="data.heatVillage" :type="'star'" :text="data.heatVillage >= 3 ? '该小区很火' : '该小区比较火'"></rate>
          </span>
        </div>
      </div>
      <div class="transverse-ine" :style="{background: `url(${transverseLine}) no-repeat top center`,  backgroundSize: '100%'}">
      </div>
      <div class="item-desc">
        <p>{{data.remark}}</p>
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
  overflow: hidden
  background: #fff
  position: relative
.item-img
  height: 8.5rem
  overflow: hidden
  position: relative
  .img-album
    position: absolute
    left: 15px
    top: 15px
    padding: 6px 8px
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
  padding: .08rem
  height: 2.2rem
  overflow: hidden
  div
    padding-left: 2px
    flex: 1
    &:first-child
      padding-left: 0
    img
      width: 100%
.item-cover
  position: absolute
  height: 1.5rem
  background: rgba(0, 0, 0 .5)
  right: 0
  left: 0
  top: 7rem
  p
    color: #fff
    line-height: 1.5rem
    font-weight: 100
    font-size: 0.75rem
    span
      color: #e96d26
.item-top
  background: #fff
  padding: 2px

.item-addr
  border-radius: 5px
  h1
    text-align: center
    margin: 0
    line-height: 1.2
    font-size: 1rem
    font-weight: bold
    span
      font-size: $font-size-large
.item-hot
  font-size: .6rem
  .top, .bottom
    margin: .2rem 18%
    text-align: center
    text-align: left
    span
      display: inline-block
      padding: 0 5px
      vertical-align: middle
      &:first-child
        width: 1rem
      &:last-child
        line-height: 2.2
      img
        width: 100%
        vertical-align: middle
.transverse-ine
  text-align: center
  height: .3rem
  img
    width: 100%
.item-desc
  padding: 0 10px 10px 10px
  height: 2rem
  text-align: left
  line-height: 1.4
  font-size: $font-size-medium
  background: #fff
</style>

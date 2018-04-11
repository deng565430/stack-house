<template>
  <div class="item">
    <img class="item-img" :src="'http://sofmanager.fangsir007.com/image/' + data.img" alt="">
    <div class="item-top">
      <div class="item-addr">
        <h1>{{data.title}}</h1>
        <p>{{data.addr}}</p>
      </div>
    </div>
    <div class="item-comm">
      <div class="top">结佣标准</div>
      <div class="buttom">{{data.price}}<i class="icon-back"></i></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
.item
.item-img
  width: 100%
  display: block
  pointer-events: none
  border-radius: 5px
.item-top
  background: #fbf9f9
  padding: 10px
.item-addr
  background: #fff
  border-radius: 5px
  h1
    margin: 0
    line-height: 2
    font-size: 24px
  p
    margin: 0
.item-comm
  text-align: center
  border-radius: 10px
  overflow: hidden
  margin: 10px 10px 0
  .top
    display: block
    width: 100%
    background: #ff5f00
    line-height: 35px
    color: #fff
    font-size: 16px
  .buttom
    display: block
    text-align: left
    line-height: 30px
    text-indent: 2em
    border-radius: 0 0 10px 10px
    padding: 10px
    border: 1px solid #ccc
    border-top: none
</style>

<template>
  <div class="mid-center">
    <div class="stack-wrapper" :style="style">
      <stack ref="stack" @nextDataList='nextDataList' :pages="dataList" :stackinit="stackinit" @collectConcat="collectConcat"></stack>
    </div>
    <div class="img-collect"><i class="icon-heard"></i> {{collectNum}}</div>
    <div class="controls">
      <button @click="tellPhone" class="button"><i class="icon-phone"></i>  <span class="text-hidden">  马上联系 TA</span></button>
    </div>
  </div>
</template>
<script>
import stack from '../../base/stack/stack'
import { getDataList } from '../../api/home'
export default {
  data () {
    return {
      dataList: [],
      style: {
        height: window.innerHeight - 150 + 'px'
      },
      stackinit: {
        visible: 3
      },
      collectNum: 0,
      timer: null
    }
  },
  created () {
    this._getDataList()
  },
  components: {
    stack
  },
  methods: {
    // 计算喜欢多少个
    collectConcat () {
      this.collectNum++
    },
    // 拨打电话
    tellPhone () {},
    nextDataList () {
      console.log('超过80个')
      this._getDataList()
    },
    _getDataList () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        getDataList().then(res => {
          this.dataList = this.dataList.concat(res.data.data)
        })
      }, 200)
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .mid-center
    height: 100%
    overflow: hidden
    padding: 15px
    .img-collect
      position: absolute
      z-index: 1200
      right: 0
      top: 30px
      padding: 5px 10px
      border-radius: 15px 0 0 15px
      background: #fff
      color: #f52312
      font-size: $font-size-large
  .stack-wrapper
    margin: 0 auto
    position: relative
    z-index: 1000
    width: 100%
    padding: 0
    list-style: none
    pointer-events: none
  .controls
    position: relative
    padding: 0 15%
    text-align: center
    display:flex
    justify-content:space-around
    margin: 0 auto
    margin-top: 3rem
    .button
      border: none
      background: none
      position: relative
      display: inline-block
      cursor: pointer
      font-size: 16px
      width: 100%
      height: 2rem
      z-index: 100
      -webkit-tap-highlight-color: rgba(0,0,0,0)
      border-radius: 1.5rem
      background: linear-gradient(to right, #ed6253, #f77428)
      color: #fff
      i
        font-size: $font-size-title
        vertical-align: middle
      span
        font-size: $font-size-large-x
        vertical-align: middle
</style>

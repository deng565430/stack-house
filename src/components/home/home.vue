<template>
  <div class="mid-center">
    <div class="stack-wrapper">
      <stack ref="stack" @nextDataList='nextDataList' :pages="dataList" :stackinit="stackinit"></stack>
    </div>
    <div class="controls">
      <button @click="prev" class="button"><i class="prev"></i><span class="text-hidden">prev</span></button>
      <button @click="next" class="button"><i class="next"></i><span class="text-hidden">next</span></button>
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
      stackinit: {
        visible: 3
      },
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
    // 左滑
    prev () {
      this.$refs.stack.$emit('prev')
    },
    // 又滑
    next () {
      this.$refs.stack.$emit('next')
    },
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
  .mid-center
    height: 100%
    overflow: hidden
  .stack-wrapper
    margin: 0 auto
    position: relative
    z-index: 1000
    width: 320px
    height: 420px
    padding: 0
    list-style: none
    pointer-events: none
  .controls
    position: relative
    width: 200px
    text-align: center
    display:flex
    justify-content:space-around
    margin: 0 auto
    margin-top: 50px
    .button
      border: none
      background: none
      position: relative
      display: inline-block
      cursor: pointer
      font-size: 16px
      width: 50px
      height: 50px
      z-index: 100
      -webkit-tap-highlight-color: rgba(0,0,0,0)
      border-radius: 50%
      background: #fff
      .next
        display: inline-block
        width: 10px
        height:5px
        background: rgb(129,212,125)
        line-height: 0
        font-size:0
        vertical-align: middle
        -webkit-transform: rotate(45deg)
        left: -5px
        top: 2px
        position: relative
        &:after
          content:'/'
          display:block
          width: 20px
          height:5px
          background: rgb(129,212,125)
          transform: rotate(-90deg) translateY(-50%) translateX(50%)
      .prev
        display: inline-block
        width: 20px
        height:5px
        background: rgb(230,104,104)
        line-height: 0
        font-size:0
        vertical-align: middle
        transform: rotate(45deg)
        &:after
          content:'/'
          display:block
          width: 20px
          height:5px
          background: rgb(230,104,104)
          transform: rotate(-90deg)
    .text-hidden
      position: absolute
      overflow: hidden
      width: 0
      height: 0
      color: transparent
      display: block

</style>

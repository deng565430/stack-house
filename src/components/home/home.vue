<template>
  <div class="mid-center">
    <div class="stack-wrapper" :style="style">
      <stack
        ref="stack"
        :pages="dataList"
        :stackinit="stackinit"
        @nextDataList='nextDataList'
        @collectConcat="collectConcat"
        @sendMsg="sendMsg">
      </stack>
    </div>
    <div class="img-collect"><i class="icon-heard"></i> {{collectNum}}</div>
    <div class="controls">
      <button @click="tellPhone" class="button"><i class="icon-phone"></i>  <span class="text-hidden">  马上联系 TA</span></button>
    </div>
    <message ref="msg">
      <div class="message">
       <div class="msg-img">
         <img :src="msgImage" alt="">
       </div>
       <div class="msg-contant">
         <p>
           为你收藏了<span>30</span>套房源<span>8</span>个经纪人等待您的联系
         </p>
         <p>
           你灭掉了<span>74</span>套房源 伤了<span>32</span>个经纪人的心
         </p>
       </div>
      </div>
    </message>
  </div>
</template>
<script>
import stack from '../../base/stack/stack'
import Message from '../../base/message/message'
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
      msgImage: require('common/image/house-msg.png'),
      timer: null
    }
  },
  created () {
    this._getDataList()
  },
  components: {
    stack,
    Message
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
    // 计算左滑右滑的总数 然后是否触发消息
    sendMsg (num) {
      if (num % 20 === 0) {
        this.isShowMsg()
      }
    },
    // 显示隐藏弹出消息
    isShowMsg () {
      this.$refs.msg.show()
      setTimeout(() => {
        this.$refs.msg.hide()
      }, 2000)
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
  .message
    display: flex
    .msg-img
      width: 28%
      img
        width: 100%
        height: 100%
        vertical-align: middle
    .msg-contant
      width: 72%
      padding: 0 5px
      p
        font-size: $font-size-medium
        padding: 4px 0
        &:first-child
          span
            color: #f8894b
        &:last-child
          color: #afafaf
          span
            color: #000
</style>

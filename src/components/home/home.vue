<template>
  <div class="mid-center">
    <div class="stack-wrapper" :style="style">
      <stack
        ref="stack"
        class="stack"
        :style='{height: stackHeight}'
        :pages="dataList"
        :stackinit="stackinit"
        @nextDataList='nextDataList'
        @collectConcat="collectConcat"
        @sendMsg="sendMsg">
      </stack>
    </div>
    <div class="img-collect"><i class="icon-heard"></i> {{collectNum}}</div>
    <div class="controls">
      <a @click="tellPhone" class="button"><i class="icon-phone"></i>  <span class="text-hidden">  马上联系 TA</span></a>
    </div>
    <modal ref="modal">
      <div class="modal-content">
        <p><a :href="'tel:13333333333'">{{'13333333333'}}</a></p>
        <img :src="tellPhoneImage" alt="">
        <a @click="tell">立即拨打</a>
      </div>
    </modal>
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
import Modal from '../../base/modal/modal'
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
      tellPhoneImage: require('common/image/tell-phone-img.png'),
      stackHeight: '19rem',
      start: 0,
      timer: null,
      flag: false
    }
  },
  created () {
    this._getDataList()
    this.stackHeight = this.isAndroid()
  },
  components: {
    stack,
    Message,
    Modal
  },
  methods: {
    // 判断是什么设备
    isAndroid () {
      var u = navigator.userAgent
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
      return isAndroid ? '18rem' : '20rem'
    },
    // 计算喜欢多少个
    collectConcat () {
      this.collectNum++
    },
    // 点击拨打电话按钮
    tellPhone () {
      this.$refs.modal.show()
    },
    // 拨打电话
    tell () {
      window.location.href = 'tel:13333333333'
    },
    nextDataList () {
      console.log('超过80%')
      if (this.flag) {
        this.start++
        this._getDataList()
      }
      this.flag = false
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
      }, 5000)
    },
    _getDataList () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        getDataList({start: this.start}).then(res => {
          if (res.data.code === 0) {
            this.dataList = this.dataList.concat(res.data.data)
            this.flag = true
          }
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
    padding: 10px
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
    height: 100%
    padding: 0
    list-style: none
    pointer-events: none
    .stack
      height: 20rem
  .controls
    position: relative
    padding: 0 20%
    text-align: center
    display:flex
    justify-content:space-around
    margin: 0 auto
    margin-top: 3.5rem
    .button
      border: none
      background: none
      position: relative
      display: inline-block
      cursor: pointer
      font-size: 16px
      width: 100%
      padding: 5px 0
      z-index: 100
      -webkit-tap-highlight-color: rgba(0,0,0,0)
      border-radius: 1.5rem
      background: linear-gradient(to right, #ed6253, #f77428)
      color: #fff
      i
        font-size: $font-size-title
        vertical-align: middle
      span
        font-size: $font-size-large
        vertical-align: middle
  .modal-content
    color: #f65700
    text-align: center
    >p
      font-size: 1rem
      font-weight: bolder
      a
        color: #f65700
    >img
      display: block
      width: 5rem
      margin: 0 auto
    >a
      position: relative
      display: inline-block
      cursor: pointer
      font-size: 16px
      width: 90%
      margin-top: 10px
      padding: 10px 0
      z-index: 100
      -webkit-tap-highlight-color: rgba(0,0,0,0)
      border-radius: 1.5rem
      background: linear-gradient(to right, #ed6253, #f77428)
      color: #fff
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

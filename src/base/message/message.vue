<template>
  <div id="message" :class="{transit: isTransition}" ref="msg" :style="{transform: `translateY(${translate}px)`, marginLeft: -left/2 + 'px'}">
    <i class="icon-close" @click="hide"></i>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    left: 0,
    translate: 108,
    isTransition: false
  }),
  mounted () {
    setTimeout(() => {
      this.hide()
      this.left = this.$refs.msg.offsetWidth
      setTimeout(() => {
        this.isTransition = true
        this.translate = 0
      }, 500)
    }, 0)
  },
  methods: {
    hide () {
      this.translate = this.$refs.msg.offsetHeight
    }
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
#message {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 6px 6px 20px 20px;
  border-radius: 6px;
  position: fixed;
  bottom: 0;
  max-height: 1000px;
  width: 90%;
  left: 50%;

  .icon-close {
    align-self: flex-end;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.8rem;
  }

  .content {
    padding: 10px 16px 10px 0;
  }
}

.transit {
  transition: all 1s;
  -moz-transition: all 1s;
  -webkit-transition: all 0.3s;
  -o-transition: all 1s;
}
</style>

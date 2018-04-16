<template>
  <div id="message" :class="{transit: isTransition}" ref="msg" :style="{transform: `translateY(${translate}px)`}">
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
    translate: 0,
    isTransition: false
  }),
  mounted () {
    setTimeout(() => {
      this.hide()
    }, 0)
  },
  methods: {
    hide () {
      this.translate = this.$refs.msg.offsetHeight + 10
    },
    show () {
      this.isTransition = true
      this.translate = 0
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
  border-radius: 6px;
  position: fixed;
  padding: 4px 4px 10px 0
  bottom: 0;
  margin: 0 10px
  max-height: 1000px;
  left: 0
  right: 0
  z-index: 2000

  .icon-close {
    align-self: flex-end;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.8rem;
  }

  .content {
    padding: 3px 15px 5px 0;
  }
}

.transit {
  transition: all .3s;
  -moz-transition: all .3s;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
}
</style>

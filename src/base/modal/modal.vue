<template>
  <transition name="modal-fade">
    <div class="modal" v-show="showFlag" @click.stop>
      <div class="modal-wrapper">
        <div class="modal-content">
          <p class="close"><i class="icon-close" @click="cancel"></i></p>
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {},
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    cancel () {
      this.hide()
      this.$emit('cancel')
    },
    modal () {
      this.hide()
      this.$emit('modal')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'

.modal
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  z-index: 3000
  background-color: $color-background-d
  &.modal-fade-enter-active
    animation: modal-fadein 0.3s
    .modal-content
      animation: modal-zoom 0.3s
  .modal-wrapper
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 3100
    .modal-content
      width: 9rem
      height: 9rem
      border-radius: 13px
      background: $color-highlight-background
      .close
        padding: 10px 0
        text-align: right
        font-size: $font-size-large
        color: $color-text-l
        i
          padding: 10px
      .content
        padding: 0 20px
@keyframes modal-fadein
  0%
    opacity: 0
  100%
    opacity: 1
@keyframes modal-zoom
  0%
    transform: scale(0)
  50%
    transform: scale(1.1)
  100%
    transform: scale(1)
</style>

<template>
  <div id="rate">
    <i v-for="item in 5" :key="item" :class="[item <= num ? 'active' : '', type == 'star' ? 'icon-star' : 'icon-ege']"></i>
    <span class="text" v-if="text">{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String, // 文字描述
    type: String, // icon类型，default: ege, option: 'star'
    num: Number // 彩色icon数量
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
#rate {
  display: flex;
  justify-content: center;
  align-items: center;
}

[class^='icon-'], [class*=' icon-'] {
  color: #ccc;
  font-size: 1rem;
}

.active {
  color: #ed634e;
}

.text {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8rem;
  margin-left: 0.3rem;
}
</style>

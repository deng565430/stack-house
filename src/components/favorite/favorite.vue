<template>
  <div id="favorite">
    <my-title title="我的最爱"></my-title>
    <scroll ref="scroll" class="scroll">
      <div>
        <div class="list" v-for="item in 3" :key="item">
          <div class="time">
            <span class="circle"></span>
            <span>今天</span>
          </div>
          <div class="content">
            <ul>
              <li v-for="item in 30" :key="item">
                <img v-lazy="'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3238483097,555852839&fm=27&gp=0.jpg'" alt="">
                <p class="name">宝林6村</p>
                <p class="addr">闸北彭浦</p>
                <button>查看</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import myTitle from '../../base/title/title'
import scroll from 'base/scroll/scroll'

export default {
  components: {
    scroll,
    myTitle
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#favorite {
  position: fixed;
  width: 100%;
  top: 0px;
  bottom: 0;
  z-index: 10000;
  background: #fff;
  min-height: 100vh;

  .scroll {
    position: fixed;
    top: 50px;
    bottom: 0;
    width: 100%;
    overflow: hidden;

    .time {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.6);
      margin-left: 20px;
      margin-top: 10px;

      .circle {
        display: inline-block;
        width: 15px;
        height: 15px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-right: 10px;
      }
    }

    .content {
      margin-top: 10px;
      width: 86%;
      min-height: 100px;
      border-left: 1px solid #ccc;
      margin-left: 28px;
      padding-bottom: 35px;
      background: #fff;

      ul {
        padding-left: 10px;

        li {
          width: 28%;
          display: inline-block;
          margin-left: 0.65rem;
          margin-top: 15px;

          img {
            width: 100%;
            height: 100%;
          }

          p {
            text-align: center;
          }

          .name {
            font-size: 18px;
            color: #333;
            margin-top: 10px;
          }

          .addr {
            margin-top: 5px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
          }

          button {
            border: 1px solid #f4866a;
            background: #fff;
            color: #f4866a;
            display: block;
            margin: 5px auto;
          }
        }
      }
    }
  }
}
</style>

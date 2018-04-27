<template>
  <div id="detail">
    <my-title title="项目介绍" share />
    <scroll ref="scroll" class="scroll">
      <div class="container">
        <div class="banner">
          <div class="slider-wrapper">
            <slider :styleBottom="'110px'">
              <div v-for="i in 5" :key="i">
                <img src="http://sofmanager.fangsir007.com/image/jyshzxzhutu1.jpg" alt="">
                <div class="title">
                  <p style="margin-top:0.8rem;font-size: 0.8rem">保利名苑</p>
                  <p style="margin-top:0.3rem;color: #333">闸北 彭浦</p>
                </div>
              </div>
            </slider>
          </div>
        </div>
        <ul class="tab">
          <li>
            <p>售价</p>
            <p>581元</p>
          </li>
          <li>
            <p>房型</p>
            <p>2室2厅</p>
          </li>
          <li>
            <p>建筑面积</p>
            <p>99.88 m^2</p>
          </li>
        </ul>
        <div class="selling-points">
          <p class="title">
            房源卖点
          </p>
          <div class="item-list" v-for="i in 4" :key="i">
            <i class="icon-xingxing"></i>
            <span>独立产权现房出售，手续办完即可办理房产证</span>
          </div>
        </div>
        <div class="news">
          <p class="title">
            最新动态
          </p>
          <div class="item-list" v-for="i in 4" :key="i">
            <i class="icon-xingxing"></i>
            <span>独立产权现房出售，手续办完即可办理房产证</span>
          </div>
        </div>
        <div class="information">
          <div class="header">
            <p class="title">
              房源信息
            </p>
          </div>
          <div class="info-box">
            <p style="text-align: center; margin-bottom: 25px;">房源信息</p>
            <p>
              <span>楼盘名称：</span>
              <span>平湖国际进口商场</span>
            </p>
            <p>
              <span>单价：</span>
              <span>2.6万／平凡左右</span>
            </p>
            <p>
              <span>面积：</span>
              <span>14-40m^2</span>
            </p>
            <p>
              <span>总价：</span>
              <span>50万起</span>
            </p>
            <p>
              <span>交房时间：</span>
              <span>现房</span>
            </p>
            <div class="btn">
              点击查看更多信息
              <i class="icon-down"></i>
            </div>
          </div>
          <div class="header">
            <p class="title">
              实景图
            </p>
          </div>
          <div class="pic">
            <img src="http://sofmanager.fangsir007.com/image/jyshzxzhutu1.jpg" alt="">
          </div>
          <div class="btn">
            点击查看更多信息
            <i class="icon-down"></i>
          </div>
          <div class="header">
            <p class="title">
              户型图
            </p>
          </div>
          <div class="pic">
            <img src="http://sofmanager.fangsir007.com/image/jyshzxzhutu1.jpg" alt="">
          </div>
          <div class="btn">
            点击查看更多信息
            <i class="icon-down"></i>
          </div>
        </div>
        <div class="pick-up">
          <div class="avt">
            <img src="http://sofmanager.fangsir007.com/image/jyshzxzhutu1.jpg" alt="">
          </div>
          <div class="content">
            <p class="name">
              <span>吴继东</span>
              <span>项目对接人</span>
            </p>
            <p class="introduce">
              <span>从业五年|</span>
              <span>擅长：政策解读</span>
            </p>
            <div class="tags">
              <span style="border: 1px solid #89c997">
                <i class="icon-mingpian"></i>
                80后
              </span>
              <span style="border: 1px solid #eeb790">
                <i class="icon-xueli"></i>
                大专毕业
              </span>
            </div>
            <p style="text-align: center; color: #eeb790; font-size: 0.6rem;">用心让您每一组苦户，变成您的高额佣金</p>
            <p class="text">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试。</p>
          </div>
          <div class="btn-box">
            <div class="btn">
              <i class="icon-phone"></i>
              联系电话
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import myTitle from '../../base/title/title'
import scroll from 'base/scroll/scroll'
import slider from 'base/slider/slider'
export default {
  data: () => ({}),
  components: {
    myTitle,
    scroll,
    slider
  }
}
</script>

<style lang="stylus" scoped>
[class^='icon-'], [class*=' icon-'] {
  color: #e47d2d;
}

#detail {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 100%;
  z-index: 10000;
  background: #eee;
  font-size: 14px;

  .scroll {
    position: fixed;
    top: 50px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }

  .banner {
    height: 260px;
    position: relative;

    .slider-wrapper {
      width: 100%;

      img {
        width: 100%;
        height: 200px;
      }

      .title {
        width: 80vw;
        height: 80px;
        background: #FFF;
        border-radius: 12px;
        position: absolute;
        z-index: 1;
        margin-top: -1.65rem;
        margin-left: 1.5rem;
      }
    }
  }

  .tab {
    width: 100%;
    padding: 10px 0;
    background: #FFF;
    display: flex;
    flex-wrap: nowrap;

    li {
      width: 33.3%;
      box-sizing: border-box;
      flex-grow: 1;
      height: 65px;
      display: inline-block;
      border-right: 1px solid transparent;
      border-image: -webkit-linear-gradient(#fff, #ccc, #fff) 1 1;

      &:last-child {
        border: none;
      }

      p {
        text-align: center;
        margin-top: 10px;
      }

      :first-child {
        color: rgba(0, 0, 0, 0.6);
        font-size: 16px;
      }

      :last-child {
        color: #f36c39;
        font-size: 0.8rem;
      }
    }
  }

  .selling-points, .news {
    width: 100%;
    height: 130px;
    background: #fff;
    margin-top: 10px;
    padding: 15px;

    .title {
      color: #ee644c;
      font-size: 0.9rem;
      border-left: 3px solid #f36c39;
      text-indent: 0.8rem;
      margin-bottom: 15px;
    }

    .item-list {
      margin-top: 3px;
      margin-left: 20px;
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  .information {
    margin-top: 10px;
    width: 100%;
    padding-bottom: 5px;
    background: #FFF;

    .header {
      height: 55px;
      border-bottom: 1px solid #ccc;

      .title {
        width: 90px;
        height: 54px;
        line-height: 54px;
        font-size: 0.65rem;
        color: #ee634d;
        text-align: center;
        border-bottom: 2px solid #ee634d;
        margin-left: 15px;
      }
    }

    .info-box {
      padding: 20px 15px;
      padding-bottom: 0;

      p {
        font-size: 0.65rem;
        color: rgba(0, 0, 0, 0.6);
        margin-top: 10px;
      }
    }

    .btn {
      width: 230px;
      height: 40px;
      background: #ee634d;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 15px;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
      color: #FFF;
      position: relative;
      font-size: 0.6rem;

      i {
        color: #FFF;
        position: absolute;
        right: 0.6rem;
        line-height: 40px;
      }
    }

    .pic {
      padding: 0 15px;

      img {
        margin-top: 15px;
        width: 100%;
        height: 100%;
      }
    }
  }

  .pick-up {
    padding-top: 65px;
    margin-top: 10px;
    background: #FFF;
    position: relative;

    .avt {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      top: 25px;
      left: 0;
      right: 0;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .content {
      padding: 40px 15px 20px 15px;
      border-radius: 6px;
      border: 1px solid #ccc;
      width: 85%;
      margin: 0 auto;
      margin-bottom: 15px;

      p {
        margin-top: 10px;
      }

      .name {
        font-size: 0.75rem;
        color: #333;
        text-align: center;
      }

      .tags {
        margin-top: 5px;
        display: flex;
        justify-content: center;

        span {
          display: flex;
          align-items: center;
          margin-right: 10px;
          border-radius: 3px;
          padding: 3px 10px;

          i {
            color: #333;
            margin-right: 5px;
          }
        }
      }

      .introduce {
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
      }

      .text {
        text-indent: 1rem;
        font-size: 0.6rem;
        color: rgba(0, 0, 0, 0.6);
        line-height: 1rem;
      }
    }

    .btn-box {
      border-top: 1px solid #ccc;
      padding: 10px 15px;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          color: #FFF;
          font-size: 1rem;
          margin-right: 10px;
        }

        height: 40px;
        background: -webkit-linear-gradient(left, #ee634e, #f6722e);
        background: -o-linear-gradient(right, #ee634e, #f6722e);
        background: -moz-linear-gradient(right, #ee634e, #f6722e);
        background: linear-gradient(to right, #ee634e, #f6722e);
        border-radius: 3px;
        color: #FFF;
        font-size: 0.6rem;
      }
    }
  }
}
</style>

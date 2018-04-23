<template>
  <transition name="playerClose">
    <div class="main" v-show="playerClose">
      <span class="closePlay icon-back"  @click="_playClose"></span>
      <div class="songTitle">
        <p class="name">小星星</p>
        <p class="singer">汪苏泷</p>
      </div>
      <div class="songRotateBg">
        <div class="rotateImg"></div>
      </div>
      <div class="playerPanel">
        <div class="percentContainer">
          <div class="percent">
            <span>00:01</span>
            <div>
              <div></div>
            </div>
            <span>03:35</span>
          </div>
        </div>
        <div class="playerIcon">
          <div class="iconItem"><span class="icon-random"></span></div>
          <div class="iconItem"><span class="icon-prev"></span></div>
          <div class="iconItem iconPlaying"><span class="icon-play"></span></div>
          <div class="iconItem"><span class="icon-next"></span></div>
          <div class="iconItem"><span class="icon-favorite"></span></div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      playerClose: true
    }
  },
  methods: {
    _playClose () {
      this.playerClose = false
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/icon.less';
.main{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999999999;
  background: #111111;
  color:#f6cc17;
  .closePlay{
    font-size: 20px;
    position: absolute;
    top: 15px;
    left: 15px;
    transform: rotate(270deg);
    z-index: 22;
  }
  .songRotateBg{
    position: fixed;
    top: 120px;
    bottom: 130px;
    left: 0;
    right: 0;
    width: 100%;
    .rotateImg{
      width: 70%;
      margin: 0 auto;
      padding-top: 70%;
      background: #ffffff;
      border: 5px solid rgba(51,51,51,0.3);
      border-radius: 50%;
    }
  }
  .songTitle{
    padding-top: 10px;
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    color: #ffffff;
    z-index: 20;
    .name{
      font-size: 16px;
      height: 30px;
      line-height: 30px;
    }
    .singer{
      font-size:12px;
      height: 20px;
      line-height: 20px;
    }
  }
  .playerPanel{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height:130px;
    .playerIcon{
      display: flex;
      align-items: center;
      .iconItem{
        flex: 1;
        font-size: 30px;
        text-align: center;
        &.iconPlaying{
          font-size: 40px;
        }
      }
    }
    .percentContainer{
      color:#ffffff;
      font-size: 12px;
      padding: 20px 15px;
      .percent{
        display: flex;
        align-items: center;
        span{
          flex: 0 0 55px;
          text-align: center;
        }
        >div{
          flex: 1;
          width: 100%;
          height: 5px;
          background: #595b64;
          border-radius: 3px;
          position: relative;
          >div{
            width: 16px;
            height: 16px;
            border: 3px solid #ffffff;
            background: #ffcd32;
            border-radius: 50%;
            top: -5px;
            position: absolute;
          }
        }
      }
    }
  }
}
.playerClose-enter-active,.playerClose-leave-active{
  transition: all 0.4s ;
}
.playerClose-enter,.playerClose-leave-to {
  transform:translate3d(0,100%,0);
}
.playerClose-enter-to,.playerClose-leave{
   transform:translate3d(0,0,0);
}
</style>
<template>
  <transition name="playerClose">
    <div>
      <div class="main" v-show="fullScreen">
        <div class="background">
          <img :src="_getPlayingSong.image">
        </div>
        <span class="closePlay icon-back"  @click="_playClose"></span>
        <div class="songTitle">
          <p class="name">{{ _getPlayingSong.name ? _getPlayingSong.name : ''}}</p>
          <p class="singer">{{ _getPlayingSong.singer ? _getPlayingSong.singer: ''}}</p>
        </div>
        <div class="songRotateBg">
          <div class="rotateImg" :class="{rotate:isPlaying}" v-bind:style="{backgroundSize:cover,backgroundImage:_bgImg}"></div>
        </div>
        <div class="playerPanel">
          <div class="percentContainer">
            <div class="percent">
              <span>{{_currentTime}}</span>
              <div ref="progressHeight">
                <div  :style="{left:progress}"></div>
              </div>
              <span>{{_duration}}</span>
            </div>
          </div>
          <div class="playerIcon">
            <div class="iconItem"><span class="icon-random"></span></div>
            <div class="iconItem"><span class="icon-prev"></span></div>
            <div class="iconItem iconPlaying"><span :class="playIcon" @click.stop="togglePlay"></span></div>
            <div class="iconItem"><span class="icon-next"></span></div>
            <div class="iconItem"><span class="icon-favorite"></span></div>
          </div>
        </div>
        <audio :src="_getPlayingSong.url" ref="audio" @loadstart="loadstart" @play="play" @pause="pause" autoplay="true" @ended ="ended" @error="error" @timeupdate="timeupdate"></audio>
      </div>
      <div class="miniPlayer" v-show="!fullScreen">
        <div class="container">
          <div class="avatar">
            <span class="img" :class="{rotate:isPlaying}" :style="{backgroundSize:cover,backgroundImage:_bgImg}"></span>
          </div>
          <div class="singer">
            <div class="name">{{ _getPlayingSong.name ? _getPlayingSong.name : ''}}</div>
            <div class="sname">{{ _getPlayingSong.singer ? _getPlayingSong.singer: ''}}</div>
          </div>
          <div class="mini-icon">
            <span :class="playIcon" @click.stop="togglePlay"></span>
            <span class="icon-playlist iconPlayList" ></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { formatTime } from '@/js/util'
const BTNWIDTH = 16
export default {
  data () {
    return {
      cover: 'cover',
      isPlaying: false,
      currentTime: 0,
      progress: 0
    }
  },
  methods: {
    ...mapMutations({
      set_fullScreen: 'SET_FULLSCREEN'
    }),
    _playClose () {
      this.set_fullScreen(false)
    },
    play () {
      this.isPlaying = true
    },
    ended () {
      this.isPlaying = false
    },
    pause () {
       this.isPlaying = false
    },
    error () {
      alert("出错了！")
    },
    loadstart () {
      console.log("loadStart")
    },
    timeupdate () {
      let audio = this.$refs.audio
      this.currentTime = audio.currentTime 
      let progressHeight = this.$refs.progressHeight.offsetWidth - BTNWIDTH
      console.log(progressHeight)
      this.progress = this.currentTime / this.playList[this.playIndex].duration * progressHeight + 'px'
    },
    togglePlay () {
      this.isPlaying = !this.isPlaying
      let audio = this.$refs.audio
      this.isPlaying ? audio.play() : audio.pause()
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'fullScreen',
      'playIndex',
      'playing',
      'playList'
    ]),
    _getPlayingSong () {
      return this.playList[this.playIndex] 
    },
    _bgImg () {
      if (!this.playList.length) return 
      return `url(${this.playList[this.playIndex].image}) ` 
    },
    playIcon () {
      return this.isPlaying ? 'icon-pause' : 'icon-play'
    },
    _duration () {
      if (!this.playList.length) return 
      return formatTime(this.playList[this.playIndex].duration)
    },
    _currentTime () {
      return formatTime(this.currentTime)
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
  .background{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .6;
    -webkit-filter: blur(20px);
    filter: blur(20px);
  }
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

.miniPlayer{
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 0;
  background: #444444;
  color:#f6cc17;
  z-index: 999999999998;
  .container {
    display:flex;
    align-items: center;
    height: 100%;
    .avatar{
      flex: 0 0 70px;
      padding-left: 20px;
      .img{
        display:inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .singer{
      flex: 1;
      display: flex;
      flex-direction: column;
      .name{
        color: #ffffff;
        line-height: 20px;
      }
      .sname {
        color:# 656565;
        font-size: 12px;
        line-height: 20px;
      }
    }
    .mini-icon{
      font-size: 28px;
      padding:20px;
      .iconPlayList{
        margin-left: 10px;
      }
    }
  }
}

.rotate{
  transform-origin: center center;
  animation: rotateImg 15s linear;
  animation-iteration-count: infinite ;
}
@keyframes rotateImg {
  0% { transform: rotate(0ded)}
  100% { transform: rotate(360deg)}
}
</style>
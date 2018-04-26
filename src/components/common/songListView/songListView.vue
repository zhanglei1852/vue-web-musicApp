<template>
  <transition name="fade">
    <div class="singerDetail" ref="singerDetailcontainer">
      <div class="singerBg" :style="{background:bgImg,backgroundSize:bgsize}" ref="singerBg">
        <span class="back" @click='_back'></span>
        <div class="singerName">
          {{title}}
        </div>
        <div class="listenList" v-show="showBtn">
          <span>随机播放全部</span>
        </div>
      </div>
      <div class="overflowBg" ref="overflowBg"></div>
      <scroll class="scrollWrapper" @getPos="_getScrollPos" :style="{bottom:calBottom}" :probeType="probeType" :data='songlist' ref="scrollContainer">
        <slot></slot>
      </scroll>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
import scroll from '@/components/common/scroll/scroll'
import { getSingerDetail } from '@/api/singer'
import mixin from '@/js/mixin'
export default {
  mixins: [mixin],
  props: {
    songlist: {
      default: []
    },
    title: {
      type: String,
      default: ''
    },
    bgimg: {
      type: String,
      default: ''
    }
  },
  components: {
    scroll
  },
  data () {
    return {
      showBtn: true,
      probeType: 3,
      bgsize: 'cover'
    }
  },
  created () {
    if (!this.bgimg) {
      this.$router.back()
    } 
  },
  mounted () {
    this.singerBgHeight = parseFloat(this.$refs.singerBg.offsetHeight)
    this.$refs.scrollContainer.$el.style.top = `${this.singerBgHeight}px`
    this.$refs.overflowBg.style.top = `${this.singerBgHeight}px`
  },
  methods: {
    _back () {
      this.$router.back()
    },
    _getScrollPos (pos) {
      const y = -pos.y
      if (y <= 0) {
        this._scaleAnimate(-y)
        return 
      }
      this.showBtn = this.singerBgHeight-y < 100 ? false : true
      if (this.singerBgHeight-y > 60) {
        this.$refs.singerBg.style.paddingTop = `${this.singerBgHeight-y}px`
        this.$refs.overflowBg.style.height = `${y}px`
        this.$refs.overflowBg.style.top = `${this.singerBgHeight-y}px`
      }
    },
    _scaleAnimate (y) {
      const scale = y / this.singerBgHeight  + 1
      this.$refs.singerBg.style.transform = `scale(${scale})`
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ]),
    bgImg () {
       return `url(${this.bgimg}) no-repeat`
    }
  },
  watch: {
    'calBottom' () {
      this.$nextTick(() => {
        this.$refs.scrollContainer.refresh()
      })
    }
  }
}
</script>
<style lang="less" scoped>
.scrollWrapper{
  position:fixed;
  top: 0;
  background: #111111;
  width: 100%;
  left:0;
  right:0;
  bottom:0;
  z-index: 666666;
  padding:0px 0px;
}
.overflowBg{
  position: absolute;
  z-index: 99;
  width: 100%;
  height:0;
  top: 0;
  background: #111111;
}
.listenList{
  position:absolute;
  bottom:15px;
  text-align:center;
  width:100%;
  font-size: 14px;
  color: #f6cc17;
  span{
    display: inline-block;
    padding: 6px;
    border: 1px solid #f6cc17;
    border-radius: 10px;
  }
}
.singerBg{
  width:100%;
  padding-top:70%;
  background-size:cover;
  position:relative;
  z-index: 99999999;
}
.singerName{
  position: absolute;
  width:100%;
  text-align:center;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  top:0;
  left:0;
  right:0;
}
.back{
  position:absolute;
  top: 20px;
  left: 10px;
  background: url('../../../img/back.png') no-repeat;
  color: #ffffff;
  font-size: 16px;
  width:30px;
  height:30px;
  z-index: 9999;
}
.singerDetail{
  position: absolute;
  top:-78px;
  right:0;
  bottom:0;
  left:0;
  width:100%;
  z-index: 9999;
  background: #111;
}
.fade-enter-active,.fade-leave-active{
  transition: all 0.5s;
}
.fade-enter,.fade-leave-to{
  transform: translate3d(-100%,0,0);
}
.fade-enter-to,.fade-leave{
  transform: translate3d(0, 0, 0);
}
</style>
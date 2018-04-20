<template>
  <transition name="fade">
    <div class="singerDetail">
      <div class="singerBg" :style="{background:singerImg,backgroundSize:bgsize}">
        <span class="back" @click='_back'></span>
        <div class="singerName">
          {{singer.Fsinger_name}}
        </div>
        <div class="listenList">
          <span>随机播放全部</span>
        </div>
      </div>
      <scroll class="scrollWrapper" :data='songList'>
        <ul class="songListContainer">
          <li class="songItem" v-for="(item,index) in songList" :key="index">
            <div class="name">{{item.musicData.albumname}}</div>
            <div class="desc">{{item.musicData.albumdesc ? item.musicData.albumdesc : "暂无"}}</div>
          </li>
        </ul>
      </scroll>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
import scroll from '@/components/common/scroll/scroll'
import { getSingerDetail } from '@/api/singer'
export default{
  components: {
    scroll
  },
  data () {
    return {
      singerImg: '',
      bgsize: 'cover',
      songList: []
    }
  },
  created () {
    if (!this.singer.avatar) {
      this.$router.push('/singer')
    }
    this.singerImg = `url(${this.singer.avatar}) no-repeat`
    // 请求歌曲列表
    getSingerDetail(this.singer.Fsinger_mid).then((res) => {
        this.songList = res.data.list
        console.log(this.songList)
    })
  },
  methods: {
    _back () {
      this.$router.push('/singer')
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  }
}
</script>
<style lang="less" scoped>
.scrollWrapper{
  position:fixed;
  top: 280px;
  background: #111111;
  width: 100%;
  overflow: hidden;
  left:0;
  right:0;
  bottom:0;
  z-index: 666666;
  padding:0px 20px;
}
.listenList{
  position:absolute;
  top: 220px;
  text-align:center;
  width:100%;
  font-size: 16px;
  color: #f6cc17;
  span{
    display: inline-block;
    padding: 10px;
    border: 1px solid #f6cc17;
    border-radius: 10px;
  }
}
.singerBg{
  width:100%;
  padding-top:100%;
  background-size:cover;
}
.singerName{
  position: absolute;
  width:100%;
  text-align:center;
  font-size: 16px;
  top: 30px;
}
.songItem{
  padding: 15px;
  .name{
    height:25px;
    line-height: 25px;
    width: 100%;
    overflow:hidden;
  }
  .desc{
    color: #656565;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    height:25px;
    line-height: 25px;
    overflow:hidden;
    width: 100%;
  }
}
.back{
  position:absolute;
  top: 20px;
  left: 10px;
  background: url('../../img/back.png') no-repeat;
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
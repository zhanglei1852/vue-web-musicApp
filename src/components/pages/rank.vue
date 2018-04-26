<template>
  <div class="scrollContainer" :style="{bottom:calBottom}">
    <scroll :data="rankList"  class="scroll" ref="scrollContainer" >
      <div>
        <ul>
          <li v-for="(item, index) in rankList" :key="index" class="rankItem" @click="goList(item)">
            <div class="rankImg" :style="{background:itemImg(item),backgroundSize: cover}">
            </div>
            <div class="rankSongList">
              <div class="songItem" v-for="(songitem, index2) in item.songList" :key="index2">{{ rankDetail(songitem,index2) }}</div>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import { getRankList } from '@/api/rank'
import scroll from '@/components/common/scroll/scroll'
import mixin from '@/js/mixin'
import { mapMutations } from 'vuex'
export default {
  mixins: [mixin],
  components: {
    scroll
  },
  data () {
    return {
      cover: 'cover',
      rankList: []
    }
  },
  methods: {
    ...mapMutations({
      setTopList: 'SET_TOPLIST' 
    }),
    rankDetail (item, index) {

      return `${index + 1}、${item.songname}-${item.singername}`
    },
    itemImg (item) {
      return `url('${item.picUrl}') no-repeat`
    },
    goList (item) {
      this.setTopList(item)
      this.$router.push(`/rank/${item.id}`)
    }
  },
  created () {
    getRankList().then((res) => {
      if (res.code === 0) {
        this.rankList = res.data.topList;
      }
    })
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
.scrollContainer{
  position: fixed;
  top: 78px;
  bottom: 0;
  width: 100%;
  .scroll {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  ul{
    margin-top: 10px;
    padding: 15px;
    .rankItem{
      background: #222222;
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      .rankImg{
        flex: 0 0 85px;
        height: 85px;
        text-align:center;
        display: flex;
        align-items: center;
        padding: 5px;
        line-height: 20px;
      }
      .rankSongList{
        padding: 12px;
        flex: 1;
        color: #656565;
        overflow:hidden;
        .songItem{
          height: 20px;
          line-height: 18px;
          white-space:nowrap;
          overflow:hidden;
          width:100%;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
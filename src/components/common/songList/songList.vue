<template>
<ul class="songListContainer">
  <li class="songItem" v-for="(item,index) in songlists" :key="index" @click="openPlayer(index)">
    <div class="name">{{item.name}}</div>
    <div class="desc">{{item.singer + "-" + item.album}}</div>
  </li>
</ul>
</template>
<script>
import { getSingerDetail } from '@/api/singer'
import { mapActions } from 'vuex'
export default {
  props: {
    songlists: {
      default: []
    }  
  },
  methods: {
    openPlayer (index) {
      this.initPlay({ list: this.songlists, index: index})
    },
    ...mapActions({
      initPlay: 'INIT_PLAY'  
    })
  }
}
</script>
<style lang="less" scoped>
.songItem{
  padding: 15px 35px;
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
</style>
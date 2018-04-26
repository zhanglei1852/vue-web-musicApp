<template>
  <song-list-view :songlist='songlist' :title="singer.Fsinger_name" :bgimg="singer.avatar">
    <song-list :songlists='songlist'></song-list>
  </song-list-view>
</template>
<script>
import songListView from '@/components/common/songListView/songListView'
import songList from '@/components/common/songList/songList'
import { dealSongList }from '@/js/dealSongList'
import { mapGetters } from 'vuex'
import { getSingerDetail } from '@/api/singer'
export default{
  components: {
    scroll,
    songListView,
    songList
  },
  data () {
    return {
      songlist: []
    }
  },
  created () {
    getSingerDetail(this.singer.Fsinger_mid).then((res) => {
      if (res.code === 0) {
        this.songlist = dealSongList(res.data.list)
      } else {
        return false
      } 
    })
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  }
}
</script>
<style lang="less" scoped>
</style>
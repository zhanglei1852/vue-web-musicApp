<template>
  <song-list-view :songlist="songlist" :title="mainList.dissname" :bgimg="mainList.imgurl">
    <song-list :songlists="songlist"></song-list>
  </song-list-view>
</template>
<script>
import songListView from '@/components/common/songListView/songListView'
import songList from '@/components/common/songList/songList'
import { getMainSongList } from '@/api/main'
import { mapGetters } from 'vuex'
import { dealSongList } from '@/js/dealSongList'
export default {
  components: {
    songListView,
    songList
  },
  data () {
    return {
      list: [],
      songlist: []
    }
  },
  created () {
    getMainSongList(this.mainList.dissid).then((res) => {
      if(res.code === 0) {
        this.songlist = dealSongList(res.cdlist[0].songlist)
      }
    })
  },
  computed: {
    ...mapGetters([
      'mainList'
    ])
  },

}
</script>
<style lang="less" scoped>
</style>
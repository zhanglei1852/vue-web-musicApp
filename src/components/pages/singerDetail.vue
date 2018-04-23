<template>
  <song-list-view :songList='songList'>
    <song-list :songList='songList'></song-list>
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
      songList: []
    }
  },
  created () {
    this._checkInfo()
    getSingerDetail(this.singer.Fsinger_mid).then((res) => {
      if (res.code === 0) {
        this.songList = dealSongList(res.data.list)
      } else {
        return false
      } 
    })
  },
  methods: {
    _checkInfo () {
      if (!this.singer.avatar) {
        this.$router.back()
      }
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
</style>
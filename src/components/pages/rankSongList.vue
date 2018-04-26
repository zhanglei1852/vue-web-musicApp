<template>
  <div>
    <song-list-view :songlist="list" :title="title" :bgimg="bgimg">
        <rank-list-view :songlists="list"></rank-list-view>
    </song-list-view>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getRankListDetail } from '@/api/rank'
import songListView from '@/components/common/songListView/songListView'
import rankListView from '@/components/common/rankListView/rankListView'
import { dealSongList } from '@/js/dealSongList'
export default {
  components: {
    songListView,
    rankListView
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'topList'
    ]),
    title () {
      return this.topList.topTitle
    },
    bgimg () {
      return this.topList.picUrl
    }
  },
  created () {
    console.log(this.topList)
    getRankListDetail(this.topList.id).then((res) => {
      if (res.code === 0) {
        this.list = dealSongList(res.songlist)
      }
    })
  }
}
</script>
<style>
</style>
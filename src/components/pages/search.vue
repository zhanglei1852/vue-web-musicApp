<template>
  <div class="search-container">
    <div class="search">
      <search-input @query="getQuery" ref="searchComponents"></search-input>
    </div>
    <transition  name="hotkey">
      <div v-show="showHotKey">
        <p class="hotTitle">热门搜索</p>
        <div class="keyContainer">
          <span v-for="(keyname, index) in hotKey" :key="index" @click="chooseHot(keyname, index)">{{keyname.k}}</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import searchInput from '@/components/common/searchInput/searchInput'
import { getHotSearch, queryInfo } from '@/api/search'
import { debounce } from '@/js/util'

export default {
  components: {
    searchInput
  },
  data () {
    return {
      hotKey: [],
      showHotKey: true 
    }
  },
  created () {
    getHotSearch().then((res) => {
      if (res.code === 0) {
        this.hotKey = res.data.hotkey
      }      
    })
  },
  methods: {
    getInfo (text, page, zhida, size) {
      queryInfo(text, page, zhida, size).then((res) => {
          
      })
    },
    chooseHot (keyname) {
      this.$refs.searchComponents.query(keyname.k)
    },
    getQuery (text) {
      this.showHotKey = !text ? true : false 
      if (!text) return
     
    }
  }
}
</script>
<style lang="less">
.search-container{
  padding: 0px 20px;
  .search{
    padding: 20px 0px;
  }
}
.hotTitle{
  color: #757575;
  height: 30px;
  line-height: 30px;
}
.keyContainer{
  span{
    background: #333333;
    display:inline-block;
    height: 25px;
    line-height: 25px;
    padding: 0px 7px;
    border-radius: 3px;
    color: #656565;
    margin: 5px;
  }
}
.hotkey-enter-active,.hotkey-leave-active{
  transition: all 0.2s cubic-bezier(.17,.99,.38,.86);
  transform-origin: center center;
}
.hotkey-enter,.hotkey-leave-to {
  transform: scale(0)
}
.hotkey-enter-to,hotkey-leave{
 1transform: scale(1)
}
</style>
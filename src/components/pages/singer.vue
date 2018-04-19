<template>
  <div class="main" ref="scrollContainer">
    <scroll :data="singerList" class="singerList" :probeType="probeType" @getPos='_getPos' ref="scrollComponent"> 
      <div > 
        <ul v-for="(item, index) in singerList" :key="index" ref="listGroup">
          <li class="groupTitle">{{item.Findex === 'hot' ? "热门" : item.Findex}}</li>
          <li class="singerLi" v-for="(list, index) in item.list " :key="index">
              <div class="avatar">
                <img v-lazy="list.avatar" class="avatarImg">
              </div>
              <div class="singerName">
                {{list.Fsinger_name}}
              </div>
          </li>
        </ul>
      </div>
    </scroll>

    <ul class="rightNav">
      <li  @click.stop="_scrollTo" :data-index="index" :class="{currentActive: currentIndex === index}" v-for="(navItem, index) in rightNav" :key="index">{{ navItem === 'hot' ? '热' : navItem}}</li>
    </ul>

    <div class="fixedTitle" v-if="singerList.length && scrollpos">
      {{  (singerList.length && singerList[currentIndex].Findex) === "hot" ? "热门" : singerList[currentIndex].Findex}}
    </div>
  </div>
</template>
<script>
import { getSingerList } from '@/api/singer'
import dealSingerList from '@/js/dealSingerList'
import scroll from '@/components/common/scroll/scroll'
export default {
  components: {
    scroll
  },
  data () {
    return {
      scrollpos: 1,
      currentIndex: 0,
      scrollContainerHeight: 0,
      listGroupHeight: [],
      probeType: 3,
      singerList: [],
      // 右侧快速导航
      rightNav: []
    }
  },
  created () {
    this.singerList = getSingerList().then((res) => {
      this.singerList = dealSingerList(res)
      this._rightNav(this.singerList)
    })
  },
  methods: {
    _rightNav (dealRes) {
      let arr = []
      for (let i = 0; i < dealRes.length; i++) {
       arr.push(dealRes[i].Findex)
      }
      this.rightNav = arr
    },
    // 获得实时滚动的位置
    _getPos (pos) {
      let scrollY = -pos.y
      if (scrollY <= 0) {
        this.currentIndex = 0
        this.scrollpos = 0
        return 
      }
      this.scrollpos = 1
      let height = scrollY
      for (let i = 0; i < this.listGroupHeight.length; i++) {
        if (height < this.listGroupHeight[i]) {
          this.currentIndex = i - 1
          return
        } else {
          this.currentIndex = i
        }
      }

    },
    // 获取每个group 的位置
    _getGroupPos () {
      let groupHeight = []
      let listGroup = this.$refs.listGroup
      if (!listGroup) return
      for (let i = 0; i < listGroup.length; i++) {
        groupHeight.push(listGroup[i].offsetTop)
      }
      this.scrollContainerHeight = this.$refs.scrollContainer.offsetHeight
      this.listGroupHeight = groupHeight
    },
    _scrollTo ($event) {
      let index = parseInt($event.target.getAttribute('data-index'))
      let scrollY =  - this.listGroupHeight[index] >= 0 ? 0 :  - this.listGroupHeight[index]
      this.currentIndex = index
      this.$refs.scrollComponent.scrollTo(0, scrollY, 0)
    }
  },
  computed: {
    forShowTitle (item, index) {
      if (index === 0) {
        return true
      } else {
        return this.singerList[index-1].Findex === item.Findex ? false : true
      }
    }
  },
  watch: {
    'singerList' () {
      this.$nextTick(() => {
        this._getGroupPos()
      })
    }
  }
}
</script>
<style lang="less">
.currentActive{
  color:#f6cc17;
}
.fixedTitle {
  position:absolute;
  index: 22;
  top:0;
  width:100%;
  background: #444444;
  padding-left: 20px;
  height: 35px;
  line-height: 35px;
}
.main{
  position: fixed;
  top: 78px;
  bottom: 0;
  width: 100%;
  .rightNav{
    position:absolute;
    right:0;
    top: 60px;
    background: #000000;
    color: #656565;
    font-size:10px;
    width: 20px;
    padding: 15px 3px;
    border-radius: 4px;
    >li{
      line-height:16px;
      width:100%;
      text-align: center;
    }
  }
  .singerList{
    height: 100%;
    overflow: hidden;
  }
}
.groupTitle{
  background: #444444;
  padding-left: 20px;
  height: 35px;
  line-height: 35px;
}
.singerLi{
  display: flex;
  height: 70px;
  padding-left: 35px;
  align-items: center;
  .avatar {
    flex: 0 0 70px;
    .avatarImg {
      width: 60px;
      padding: 10px;
    }
  }
  .singerName{
    flex:1;
  }
}
</style>
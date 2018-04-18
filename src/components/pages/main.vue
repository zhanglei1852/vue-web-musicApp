<template>
  <div class="main">
    <scroll  class="scrollContainer" :data="mainList" >
      <div>
         <m-banner></m-banner>
        <div class="hotListText">
          热门歌单推荐
        </div>
        <ul>
          <li class="listItem" v-for="(item, index) in mainList" :key="index">
            <div class="itemImg">
              <img v-lazy="item.imgurl">
            </div>
            <div class="itemPro">
              <p class="itemProName">
                {{item.creator.name}}
              </p>
              <p class="itemProDetail">
                {{item.dissname}}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>
<script>
import { getMainList } from '@/api/main'
import mBanner from '@/components/common/banner/banner'
import scroll from '@/components/common/scroll/scroll'
export default {
  components: {
    mBanner,
    scroll
  },
  data () {
  	return {
  		mainList: []
  	}
  },
  created () {
  	this.mainList = getMainList().then((res) => {
  		this.mainList = res.data.list
      console.log(this.mainList)    
  	})
  }
}
</script>
<style lang="less" scoped>
.main {
  position: fixed;
  top: 78px;
  bottom: 0;
  width: 100%;
  .scrollContainer{
    height: 100%;
    overflow: hidden;
  }
}
.hotListText {
  color:#f6cc17;
  height: 50px;
  line-height: 50px;
  text-align: center;

}
.listItem{
  display:flex;
  align-items: center;
  .itemImg{
    flex: 0 0 100px;
    padding: 15px;
    img{
      width: 70px;
      height: 70px;
    }
  }
  .itemPro{
     flex:1;
     display:flex;
     flex-direction: column;
     .itemProName{
        flex:1;
        line-height: 30px;
     }
     .itemProDetail{
       flex:1;
       line-height: 30px;
       color: #656565;
       white-space:nowrap;
       text-overflow:ellipsis;
     }
  }
}
</style>
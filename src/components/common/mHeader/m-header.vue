<template>
  <div class='myheader'>
    <div class='top'>
      <div>
        <img src="static/images/logo@2x.png">
        <span>my music</span>
      </div>
    </div>
    <div class="classify">

      <router-link tag="div" to='/main' class="classify-item">
        <span class="itemspan">
           推荐
        </span>
      </router-link>
      <router-link tag="div" to='/singer' class="classify-item">
        <span class="itemspan">
           歌手
        </span>
       
      </router-link>
       <router-link tag="div" to='/rank' class="classify-item">
        <span class="itemspan">
           排行
        </span>
      
      </router-link>
      <router-link tag="div" to='/search' class="classify-item">
        <span class="itemspan">
           搜索
        </span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MHeader'
}
</script>
<style lang="less" scoped>
.myheader{
  &:before{
    content: '';
    display: table;
  }
}
.top{
  height: 30px;
  padding: 5px;
  width: 100%;
  position: fixed;
  >div{
    width: 130px;
    margin: 0 auto;
    font-size: 0px;
    >img{
      height: 30px;
      width:30px;
    }
    >span{
      width:100px;
      font-size: 14px;
      text-align:center;
      color: #ffffff;
      line-height: 30px;
      display: inline-block;
      vertical-align: top;
    }
  }
  &:before{
    content: '';
    display: table;
  }
}
.classify{
  display:flex;
  color: #656565;
  margin-top:40px;
  height:35px;
  line-height: 35px;
  padding-bottom: 5px;
  .classify-item{
    text-align:center;
    flex: 1;
    font-size: 14px;
    font-weight: 700;
  }
  .classify-item.router-link-active{
    color:#f6cc17;
    .itemspan{
      display: inline-block;
      border-bottom: 2px solid #f6cc17;
    }
  }
}
</style>
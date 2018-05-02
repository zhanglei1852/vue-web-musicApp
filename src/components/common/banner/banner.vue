<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide v-if='banner.length' v-for="(item,index) in banner" :key='index'>
        <a :href="item.linkUrl">
          <img :src="item.picUrl">
        </a>
      </swiper-slide>
      <div class="swiper-paginaion self-pagination-container" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { banner } from '@/api/main' 
// 引入'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      banner: [],
      swiperOption: {
        pagination: {
          el: '.swiper-paginaion',
          clickable: true,
          renderBullet (index, className) {
            return ` <span  class="${className} self-pagination-style"></span>`
          }
        },
        slidesPerView: 'auto',  
        centeredSlides: true, 
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    }
  },
  created () {
    banner().then((data) => {
      if (data.code === 0) {
        this.banner = data.data.slider
      }
    })
  }
}
</script>
<style lang="less">
.swiper{
  width:100%;
  overflow:hidden;
  margin-top: 10px;
  a{
    width:100%;
    font-size:0;
    img{
      width:100%;
      font-size:0;
    }
  }
  
}
.self-pagination-container{
  position:absolute;
  bottom:10px !important;
  z-index: 999999999 !important;
  text-align:center;

}
.self-pagination-style{
  width: 10px;
  height: 10px;
  text-align: center;
  display:inline-block;
  border-radius: 10px;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  margin-left: 5px;
  background: rgb(255,255,255);
}
.self-pagination-style.swiper-pagination-bullet-active {
  color: #fff;
  background:#FFFFFF;
  width: 20px;
  background: rgba(255,255,255,0.8);
}
</style>
<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in SliderItem.slider" :key="index" >
        <img :src="item" class="swiper-img" alt="">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>

  </div>

</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {getSlider} from '../api/index';


  export default {
    name: 'Swiper',
    data() {
      return {
        SliderItem:"",
        swiperOption: {
          autoplay:{
          disableOnInteraction:false,
          },
          pagination: {
            el: '.swiper-pagination'
          },
          slidePerView:'auto',
          centeredSlides:true,
          paginationClickable: true,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          },
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },components: {
      swiper,
      swiperSlide
    },
    methods:{
      async getSliderData(){
        this.SliderItem =  await getSlider();

      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {

      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {

    },
    created(){
      this.getSliderData();
    }
  }
</script>

<style scoped lang="less">
  /*.swiper{*/
    /*width: 100%;*/
    /*!*margin: 0 auto;*!*/
    /*!*border: 1px;*!*/
  /*}*/
  .swiper-img{
    width: 100%;
    /*height: 700px;*/
  }
</style>

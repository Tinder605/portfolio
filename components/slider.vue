<template>
    <Swiper 
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :init="false"
    :slides-per-view="2"
    :loop="true"
    :parallax="true"
    :centered-slides="true"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
    :speed="2000"
    :pauseOnMouseEnter="true"
    :effect="'coverflow'"
    :coverflow-effect="{
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
    }"
    class="mt-5">
      <SwiperSlide >
        <div class="text-center"><img class="mx-auto bg-blue-300" src="/Top-page.png" alt="" @click="Push_Application(0)"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="text-center  bg-amber-300"><img class="mx-auto" src="/Oral-top.png" alt="" @click="Push_Application(1)"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="text-center bg-amber-300"><img class="mx-auto" src="/wpm-top.png" alt="" @click="Push_Application(2)"></div>
      </SwiperSlide>
      <SwiperSlide >
        <div class="text-center"><img class="mx-auto bg-blue-300" src="/Top-page.png" alt="" @click="Push_Application(3)"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="text-center  bg-amber-300"><img class="mx-auto" src="/Oral-top.png" alt="" @click="Push_Application(4)"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="text-center bg-amber-300"><img class="mx-auto" src="/wpm-top.png" alt="" @click="Push_Application(5)"></div>
      </SwiperSlide>
    </Swiper>
</template>
<script setup>
import { register } from 'swiper/element/bundle';
register();

</script>

<script>

export default {

  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        loop: true,
      },
    }
  },
  methods:{
    Push_Application(val){
      var url = ''
      switch(val%3){
        case 1:
          url = 'https://www.hibikinoenglish.com/wps/vcayaqwnur';
          window.open(url)
        case 2:
          url = 'https://www.hibikinoenglish.com/speaking/vcayaqwnur';
          window.open(url)
      }
    }
  }
}
</script>

<template>
    <div class="h-full bg-haikei">
      <main-header/>
      <slider />
      <!-- 対応可能な案件の項目-->
      <div class="text-center mt-10">
        <div class="underline text-xl sm:text-2xl lg:text-3xl font-bold">
          <span>対応可能な案件</span>
        </div>
        <div class="mt-2 text-base font-semibold text-sm sm:text-base lg:text-2xl">
          <ul>
            <li>VPS・AWSを用いたwebサービスの構築・移行</li>
            <li>Python, PHP, Javascriptによるwebアプリケーション開発</li>
            <li>Swiftを用いたiOSモバイルアプリケーション開発</li>
          </ul>
        </div>
      </div>
      <pastproject/>
    </div>
  </template>
  
  <script>
    import MainHeader from '../components//header.vue'
    import Slider from '../components/slider.vue'
    import Pastproject from '../components/slider.vue'
  
    export default {
    components: {
      MainHeader,
      Slider,
      Pastproject
    }
  }
  </script>
  
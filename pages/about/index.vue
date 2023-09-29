<template>
    <div class="h-full bg-haikei">
        <main-header/>
        <div class="text-center mt-10 flex-none w-4/5 mx-auto sm:flex-none lg:flex">
            <div class="text-center w-full sm:w-full lg:w-1/2">
                <img  class="mx-auto h-72  sm:h-80 lg:h-96" src="/SakaiTakashi.png" alt="">
            </div>
            <div class="w-full sm:w-full lg:w-1/2">
                <div class="text-left">
                    <h2>坂井 昂</h2>
                    <h2 class="text-5xl">Sakai Takashi</h2>
                </div>
                <div class="text-left mt-10">
                    <div>
                        2000年，兵庫県豊岡市生まれ<br>
                        北九州市立大学大学院　情報システム工学専攻所属<br>
                        2021年より，株式会社FCCテクノ ソリューション事業部webエンジニア長期インターン生として活動<br><br>
                    </div>
                    <div>
                        扱えるプログラミング言語<br>
                        <h4 class="pl-5">Python, Javascript, Typescript, Swift, PHP<br></h4>
                    </div>
                    <div class="mt-4">
                        好きなキャラクター<br>
                        <h4 class="pl-5">ハンギョドン<br><br></h4>
                    </div>
                </div>
            </div>
        </div>
        <youtube />
        <main-footer />
    </div>
</template>
<script>
    import MainHeader from '../components//header.vue';
    import Youtube from '../components/youtube.vue';
    import MainFooter from '../components/footer.vue'
    export default{
        components:{
            MainHeader,
            Youtube,
            MainFooter,
            
        }
    }
</script>
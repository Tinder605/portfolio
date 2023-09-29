<template>
    <div class="w-4/5 mx-auto text-center mt-10">
        <div class="underline text-xl sm:text-2xl lg:text-3xl font-bold">
          <span>過去のプロジェクト</span>
        </div>
        <div class="w-full mt-5">
            <ul class="text-center">
                <li v-for="(val,idx) in projects" :key="idx" class="inline-block text-center w-3/4 sm:w-2/4 lg:w-1/3 m-4">
                    <div>
                        <img :src="val.src" alt="" class="w-full">
                        <h3 class="font-mono font-semibold">{{ val.title }}</h3>
                        <h3 class="text-right text-sm">
                            {{ val.date }}
                        </h3>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            projects:[],
        };
    },
    mounted() {
        const pass_projects =[
            {'title': 'MobileNetによる物体認識','src': "mobilenet",'date': '2023/06/29'},
            {'title': 'ECSによるインフラの移行','src': "english-summary-arch", 'date': '2023/08/29'},
            
            
        ]
        this.projects = pass_projects.filter(function(val){
            return val.src = new URL("/" + val.src + ".png", import.meta.url).href;
        })
        
    },
    methods:{
        imgSrc(link){
            console.log(link);
            return new URL("/" + "top-page" + ".png", import.meta.url).href;
        }
    }
}
</script>
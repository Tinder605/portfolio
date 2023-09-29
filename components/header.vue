<template>
    <header class= "mb-auto bg-header h-24 sm:h-28 lg:h-32">
        <nav class= "navbar h-full">
            <div class="h-4/6 my-auto ml-5 pt-5">
                <span class= "navbar-brand mb-auto h-3 text-2xl sm:text-2xl lg:text-3xl font-mono">{{ title }}</span>
            </div>
            <div class="h-2/6 mt-auto  mb-2 mr-10">
                <ul class="flex w-full justify-end text-lg sm:text-xl lg:text-2xl font-extrabold ">
                    <li class="mr-10" event="" @click="$router.push('/')"><span :class=tab_color.works >Works</span></li>
                    <li class="mr-10" @click="$router.push('/about')"><span :class=tab_color.about >About</span></li>
                    <li  class="" @click="$router.push('/contact')"><span :class=tab_color.contact >Contact</span></li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<style>
    .amber-400{
        color: rgb(191, 144, 0);
    }
</style>
<script>
export default {
    name: "TheHeader",
    data() {
        return {
        title: "SAKAI TAKASHI",
        selected_color: 'amber-400',
        tab_color:{
            'works':'black',
            'about':'black',
            'contact':'black'
        }
        }
    },
    mounted() {
        this.check_path(this.$route.path);
    },
    methods:{
        check_path(path){
            if(path === '/' || path === 'works'){
                this.tab_color.works = this.selected_color
                console.log(this.tab_color.works)
            }
            else if(path === '/about'){
                this.tab_color.about = this.selected_color
            }
            else if(path === '/contact'){
                this.tab_color.contact = this.selected_color
            }
        },

        //クリック時の挙動
        Chage_Tab(){
            console.log("ボタンを押してます")
        }
    }
}
</script>

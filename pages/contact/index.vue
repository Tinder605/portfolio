<template>
    <div class="h-full bg-haikei text-xl">
        <main-header/>
        <div class="mt-10 w-3/5 mx-auto">
            <h2 class="text-base">お仕事に関することから，質問やアドバイスなどお待ちしております．</h2>
        </div>
        
        <div class="mt-10 w-3/5 mx-auto">
            <h2>Name</h2>
            <input type="text" class="w-full" v-model="name">
        </div>
        <div class="mt-10 w-3/5 mx-auto">
            <h2>Mail Adress</h2>
            <input type="text" class="w-full" v-model="address">
        </div>
        <div class="mt-10 w-3/5 mx-auto">
            <h2>Message</h2>
            <textarea name="" id="" cols="30" rows="10" class="w-full" v-model="message"></textarea>
        </div>
        <div class="w-1/6 h-16 pb-5 mt-10 text-center mx-auto text-center flex justify-center">
            <button @click="Submit_Message" :class="isSubmited">
                送信
            </button>
        </div>
    </div>
</template>
<style>
.sumited{
    border:  black;
    border-radius: 10%;
    width: 100%;
    background-color: rgb(191, 144, 0);
}
.presubmit{
    border:  black;
    border-radius: 10%;
    width: 100%;
    background-color: chartreuse;
}
</style>

<script>
import MainHeader from '../components//header.vue';
import axios from "axios";
export default{
    components:{
        MainHeader
    },
    data(){
        return{
            name:'',
            address:'',
            message:'',
            isSubmited: 'presubmit'
        }
    },
    methods: {
        Submit_Message(){
            //バリデーション
            if(this.name === '' && this.name.length <3 && this.name.length <11 ){
                alert('名前を3文字以上，10文字以内で入力していください．')
                return
            }
            if(this.address === ''){
                alert('メールアドレスを入れてください．')
                return
            }
            if(this.message === ''){
                alert('メッセージを入れてください．')
                return
            }
            //firebaseとの連携
            axios.post('https://firestore.googleapis.com/v1/projects/portfolio-mail-b2eaf/databases/(default)/documents/comments',{
                fields:{
                    name:{
                        stringValue:this.name
                    },
                    address:{
                        stringValue:this.address
                    },
                    message:{
                        stringValue:this.message
                    },
                }
            }).then((res)=>{
                this.isSubmited = 'sumited'
                this.name = ''
                this.address = ''
                this.message = ''
            }).catch((err)=>{
                alert('メッセージの送信に失敗しました')
                window.reload()
            })
        }
    },
}
</script>
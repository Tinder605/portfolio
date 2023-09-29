<template>
    <div class="h-2/6 w-11/12 border-t-2 pt-5 mt-5 mb-2 mx-auto">
        <ul class="flex w-full justify-end pb-10 ">
            <li class="mr-10 w-10" @click="Push_Application('github')"><img src="/github-mark.png" alt=""></li>
            <li class="mr-10 w-10" @click="Push_Application('insta')"><img src="/Instagram_Glyph_Black.png" alt=""></li>
            <li  class="mr-10 w-10" @click="Push_Application('twitter')"><img src="/twitter.png" alt=""></li>
        </ul>
    </div>
</template>
<script>
export default{
    methods:{
            Push_Application(val){
                var url = ''
                switch(val){
                    case 'github':
                        url = 'https://github.com/Tinder605';
                        window.open(url)
                    case 'insta':
                        url = 'https://instagram.com/takash222?igshid=YTQwZjQ0NmI0OA==';
                        window.open(url)
                    case 'twitter':
                        url = 'https://twitter.com/TKC79727627'
                        window.open(url)
                }
            }
        }
}
</script>
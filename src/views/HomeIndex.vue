<template>
    <div class="homeindex">
        <headbar v-bind:display="display" v-bind:height="winHeight" @returnbegin="eject"></headbar>
        <div class="eject" @click="eject">
            <img :src="imageUrl" alt="down">
        </div>
        <HomeHeadImage @winHeight="getHeight"></HomeHeadImage>
        <div class="posts" v-for="item in arr">
            <post></post>
        </div>
    </div>
</template>

<script>
    import HomeHeadImage from "../components/HomeHeadImage";
    import Headbar from "../components/headbar";
    import Post from "../components/Post";
    export default {
        name: "HomeIndex",
        components: {Post, Headbar, HomeHeadImage},
        data(){
            return {
                display : false,
                arr: [1,2,3,4],
                winHeight : window.innerHeight,
                imageUrl : require("@/assets/menu.svg")
            }
        },
        methods : {
            eject(){
                var top = $(document).scrollTop();
                if(this.display === true){ //解除限制（true -> false）
                    $("body").css("overflow","auto");
                    this.imageUrl = require("@/assets/menu.svg")
                }else{   //设置限制 (false -> true)
                    $("body").css("overflow","hidden");
                    this.imageUrl = require("@/assets/close.svg")
                }
                this.display = !this.display;
                console.log(this.winHeight)
            },
            getHeight(height){
                this.winHeight = height;
            }
        }
    }
</script>

<style scoped>
    .homeindex{
        position: relative;

    }

    .eject{
        box-sizing: content-box;
        background-color: rgba(255,255,255,0.9);
        z-index: 10;
        width : 30px ;
        height : 30px ;
        position: absolute;
        top: 50px;
        right: 40px;
        transform: translateX(-50%);
        cursor: pointer;
        transition: height 0.3s ease-in;
        border-radius: 5px;
    }



    .eject > img{
        width: 100%;
        height: 100%;
    }

    .posts{

    }

    .posts > * {
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
    }

    .posts > :last-child{
        margin-bottom: 200px;
    }
</style>
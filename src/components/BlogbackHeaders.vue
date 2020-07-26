<template>
    <div class="header">
        <audio ref="audio">
            <source src="@/assets/music/Junk - Life is PIANO (Club Extend).mp3" type="audio/mp3">
        </audio>
        <div class="line" v-bind:style="{width: width + 'px'}"></div>
        <div class="home imgbox" @click="back">
            <img src="@/assets/home.svg" alt="home">
        </div>
        <div class="radio imgbox" @click="play">
            <img :src="imgUrl" alt="radio">
        </div>

        <transition name="title">
            <div class="title" v-if="titleDis">
                {{title}}
            </div>
        </transition>
        <div class="audioLen" :style="{width : audioWidth + 'px'}"></div>
    </div>
</template>

<script>
    export default {
        name: "BlogbackHeaders",
        props : ["title"],
        data(){
            return {
                titleDis : false,
                width : 0,
                DomAudio : "",
                audioLength : 0,
                audioWidth : "", //audio的显示长度
                imgUrl : require("@/assets/radio.svg")
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            scrollFun(){
                if(window.pageYOffset > 60){
                    this.titleDis = true;
                }else{
                    this.titleDis = false;
                }
                console.log(document.body.clientHeight);
                this.width = window.pageYOffset / (document.body.clientHeight - window.innerHeight) * window.innerWidth;
            },
            play(){
                if(this.DomAudio.paused)
                {
                    this.DomAudio.play();
                    this.imgUrl = require("@/assets/pause.svg")
                }else{
                    this.DomAudio.pause();
                    this.imgUrl = require("@/assets/radio.svg")
                }
            },
            mp3Init(){
                this.DomAudio = this.$refs.audio;
                this.DomAudio.load();
                setTimeout(() => {
                    this.audioLength = this.DomAudio.duration;
                },500)
            },
            watchAudio(){
                console.log(this.DomAudio.currentTime)
                this.audioWidth = this.DomAudio.currentTime / this.audioLength * window.innerWidth;
                if(this.DomAudio.currentTime / this.audioLength >= 0.98){
                    this.audioWidth = 0;
                    this.imgUrl = require("@/assets/radio.svg")
                }
            }
        },
        created() {

        },
        mounted() {
            window.addEventListener("scroll",this.scrollFun,true);
            this.mp3Init();
            this.DomAudio.addEventListener("timeupdate",this.watchAudio)
        }
    }
</script>

<style scoped>
.header{
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    height: 60px;
    border-bottom: 1px solid rgb(244,244,244);
    display: flex;
}

.line{
    height: 1px;
    position: absolute;
    top: 1px;
    border-bottom: 2px solid #0081ff;
}




    .imgbox{
        z-index: 2;
        position: absolute;
        width: 40px;
        height: 40px;
        cursor: pointer;
        top: 10px;
    }

    .home{
        left: 20px;
    }

    .radio{
        left: 80px;

    }

    .imgbox > img{
        width: 100%;
        height: 100%;
    }

    .title{
        margin: 0 auto;
        height: 100%;
        display: flex;
        align-items: center;
        z-index: 3;
    }
    .audioLen{
        height: 60px;
        position: absolute;
        background-color: rgba(240,240,240,0.5);
    }

/*    动画*/
    .title-enter-to,.title-leave{
        opacity: 1;
    }

    .title-enter-active,.title-leave-active{
        transition: opacity 0.2s ease-in-out;
    }

    .title-enter,.title-leave-to{
        opacity: 0;
    }







</style>
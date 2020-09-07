<template>
    <div class="homeImage" v-bind:style="{height : winHeight + 'px' , width : winWidth + 'px'}">
        <div class="imageBox" v-bind:style="{height : winHeight*1.1 + 'px' , width : winWidth*1.1 + 'px'}" id="image">
            <img data-depth="0.5"  :src="requestInf.imgUrl" alt="背景图片" >
        </div>
        <div class="background" v-bind:style="{height : winHeight + 'px' , width : winWidth + 'px'}"></div>
        <p class="name">Runtu</p>
        <div class="intro">
            <h2>{{requestInf.title}}</h2> <!--标题-->
            <p>{{requestInf.intro}}</p> <!--intro-->
        </div>
    </div>
</template>

<script>
    import Parallax from "parallax-js"
    export default {
        name: "HomeHeadImage",
        props : ["requestInf"],
        data(){
            return {
                winWidth : "",
                winHeight : ""
            }
        },
        methods:{
          initBackground(){
              var scene = document.getElementById('image');
              var parallaxInstance = new Parallax(scene,{
                  limitX: 50,
                  limitY : 50,
                  hoverOnly: true
              });
          }

        },
        created(){
          this.winWidth = window.innerWidth;
          this.winHeight = window.innerHeight;
        },
        mounted() {
            let that = this;
            window.onresize = () => {
                if(window.innerWidth > 1100)
                {
                    that.winWidth = window.innerWidth;
                    that.winHeight = window.innerHeight;
                    this.$emit("winHeight",window.innerHeight);
                }


            }
            this.initBackground();

            //
            //
            // console.log(parallaxInstance)

        }
    }
</script>

<style scoped>
    .homeImage{
        overflow: hidden;
    }

    .imageBox{

        margin-left: -50px;
        margin-top: -50px;
    }
    .imageBox > img{

        width: 100%;
        height: 100%;
    }
    
    @media screen and (min-width: 1100px) {
        .background {
            background: linear-gradient(45deg,rgba(145,152,299,0.6) 50% , rgba(255,255,255,0) 50%);
            position: absolute;
            top: 0;
            left: -10%;
        }
    }
    @media screen and (max-width: 1100px){
        .background {
            background: linear-gradient(45deg,rgba(145,152,299,0.6) 50% , rgba(255,255,255,0) 50%);
            position: absolute;
            top: 0;
        }
    }

    .intro{
        text-align: left;
        position: absolute;
        top: 300px;
        left: 5%;
        width: 300px;
        color: white;
    }

    .name{
        font-size: 30px;
        font-family:Arial,Helvetica,sans-serif;
        font-weight: 500;
        position: absolute;
        top: 50px;
        color: white;
        left: 5%;

    }


    .intro > h2{
        font-size: 45px;
        margin-top: 10px;
        margin-bottom: 40px;
    }

    .intro > p{
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 30px;
    }
</style>
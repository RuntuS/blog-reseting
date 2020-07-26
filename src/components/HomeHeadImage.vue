<template>
    <div class="homeImage" v-bind:style="{height : winHeight + 'px' , width : winWidth + 'px'}">
        <div class="imageBox" v-bind:style="{height : winHeight*1.1 + 'px' , width : winWidth*1.1 + 'px'}" id="image">
            <img data-depth="0.5"  src="https://lao-lan-go.oss-cn-beijing.aliyuncs.com/p26.jpg" alt="背景图片" >
        </div>
        <div class="background" v-bind:style="{height : winHeight + 'px' , width : winWidth + 'px'}"></div>
        <p class="name">Runtu</p>
        <div class="intro">
            <p>八月 9 ，2020</p>  <!--时间-->
            <h2>JavaScript高级程序设计</h2> <!--标题-->
            <p>这是关于JavaScript的高级程序设计的笔记，里面记载了许多我们需要用的东西</p> <!--intro-->
        </div>
    </div>
</template>

<script>
    import Parallax from "parallax-js"
    export default {
        name: "HomeHeadImage",
        data(){
            return {
                winWidth : "",
                winHeight : ""
            }
        },
        created(){
          this.winWidth = window.innerWidth;
          this.winHeight = window.innerHeight;
        },
        mounted() {
            let that = this;
            window.onresize = () => {
                that.winWidth = window.innerWidth;
                that.winHeight = window.innerHeight;
                this.$emit("winHeight",window.innerHeight);
                console.log(that.winHeight)
            }
            var scene = document.getElementById('image');
            var parallaxInstance = new Parallax(scene,{
                limitX: 50,
                limitY : 50,
                hoverOnly: true
            });
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
    
    @media screen and (min-width: 1200px) {
        .background {
            background: linear-gradient(45deg,rgba(145,152,299,0.6) 50% , rgba(255,255,255,0) 50%);
            position: absolute;
            top: 0;
            left: -10%;
        }
    }
    @media screen and (max-width: 1200px){
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
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .intro > p{
        font-size: 14px;
    }
</style>
<template>
        <div class="About">
            <back-headers></back-headers>
            <div class="card" v-bind:style="{height : winHeight * 0.5 + 'px'}" v-if="display">
                <div class="self-intro">
                    <h2>闰土(Runtu)</h2>
                    <p class="c1">在读高校生/软件工程</p>
                    <p class="c c2">热爱前端,喜欢二次元,希望能够通过自己的学习和努力，去做许多自己想做的事情,欢迎随时与我交流</p>
                    <p class="c c3">mail : 893119806@qq.com</p>
                    <div class="connect">
                        <div class="wechat"><img src="@/assets/wechat.svg"></div>
                        <div class="github"><img src="@/assets/githubblue.svg"></div>
                    </div>
                </div>
                <div class="imageBox">
                    <img src="https://lao-lan-go.oss-cn-beijing.aliyuncs.com/96F51AD8-EBEB-41B2-85EB-E565D8236926.png" alt="一张图片">
                </div>
            </div>
        </div>
</template>

<script>
    import BackHeaders from "../components/backHeaders";
    export default {
        name: "About",
        data(){
          return {
              winHeight : window.innerHeight,
              display : false
          }
        },
        components: {BackHeaders},
        mounted() {
            //防止页面跳转时 崩坏
            setTimeout(() => {
                this.display = true;
            },500)
            window.onresize = (() => {
                this.winHeight = innerHeight;
            })
        }
    }
</script>

<style scoped>

    .card{
        min-height: 450px;
        display: flex;
        position: relative;
        box-shadow: 1px 1px 10px rgb(200,200,200);
        width: 40%;
        height: 50%;
        margin: 10% auto;
        padding: 50px;
        justify-content: space-around;
        min-width: 800px;
    }

    .self-intro{
        text-align: left;
        width: 50%;
    }
    .self-intro > h2{
        font-size: 25px;
        margin-bottom: 30px;
    }

    .c1{
        margin-bottom: 30px;
        font-size: 20px;
        color: rgb(150,150,140);
        letter-spacing: 1px;
    }

    .c{
        font-size: 18px;
        margin-bottom: 18px;
        letter-spacing: 0.5px;
        color: rgb(120,120,120);
        line-height: 35px;
    }


    .connect{
        bottom: 50px;
        position: absolute;
        display: flex;
        width: 20%;
        justify-content: space-around;

    }
    .connect > div{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .connect > div > img{
        width: 100%;
        height: 100%;
    }
    .imageBox{
        height: 100%;
        width: 40%;
    }

    .imageBox > img{
        width: 100%;
        height: 100%;
    }
    /*    跳转*/
    .homeToAbout-enter,.homeToAbout-leave-to{
        transform: translateX(100%);
    }
    .homeToAbout-enter-active,.homeToAbout-leave-active{
        transition: transform 0.3s ease-in;
    }

    .homeToAbout-enter-to,.homeToAbout-leave{
        transform: translateX(0);
    }
</style>
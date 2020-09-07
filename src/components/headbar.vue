<template>
    <transition name="tool">
        <div class="headBar"  v-if="display" v-bind:style="{height : height + 'px'}">
<!--            <div class="router">-->
<!--                <div class="routerdiv HomeIndex" @click="turn('/homeindex')">-->
<!--                    首页-->
<!--                </div>-->
<!--                <div class="routerdiv guidang" @click="turn('/guidang')">-->
<!--                    归档-->
<!--                </div>-->
<!--                <div class="routerdiv About" @click="turn('/about')">-->
<!--                    关于-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="search">-->

<!--            </div>-->
            <div class="searchBar" >

            </div>
            <div class="router">
                <div class="routerdiv Homeindex"  @click="turn('/homeindex')">首页</div>
                <div class="routerdiv guidang" @click="turn('/guidang')">归档</div>
                <div class="routerdiv friends" @click="turn('/friends')">朋友</div>
                <div class="routerdiv About" @click="turn('/about')">关于</div>
            </div>
            <div class="link">
                <div class="icon github" @click="goWeb('github')"><img src="@/assets/github.svg" alt="github"></div>
                <div class="icon mail" @click="goWeb('mail')"><img src="@/assets/mail.svg" alt="mail"></div>
                <div class="icon qq" @click="goWeb('qq')"><img src="@/assets/qq.svg" alt="qq"></div>
            </div>
            <div class="beian">
                <span>© 2020 Runtus.| Designed by Laolan | <a href="http://www.beian.miit.gov.cn/">蜀ICP备 20004793号</a></span>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "headbar",
        props : ["display","height"],
        data(){
            return {

            }
        },
        methods:{
            turn(path){
                this.$emit("returnbegin"); //回到首页，触发父组件函数，取消body无法滚动的样式，否则会导致bug
                setTimeout(() => {
                    this.$router.push({path : path})
                },1000)
            },
            goWeb(keyword){
                if(keyword === 'github'){
                    window.open("https://github.com/RuntuS");
                }else if(keyword === 'mail'){

                }else if(keyword === 'QQ'){

                }

            }

        }
    }
</script>

<style scoped>
.headBar{
    overflow-y: hidden;
    z-index: 2;
    width:100%;
    background-color: rgba(255,255,255,0.9);
    border: 1px solid black;
    position: absolute;
    transition: top 0.5s ease;
}

.router{
    display: flex;
    width: 40%;
    margin: 200px auto;
    justify-content: space-around;

}

.router > .routerdiv{
    color: rgb(144,144,144);
    cursor: pointer;
    font-size: 20px;
    transition: color,font-size 0.2s ease-in;
}

.routerdiv:hover{
    font-size: 24px;
    color: black;
    animation: swing;
    animation-duration: 0.5s;
}

.link {
    align-items: center;
    width: 150px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    position: absolute;
    bottom: 100px;
    justify-content: space-around;
}

.icon{
    cursor: pointer;
    width: 40px;
    height: 40px;
}

.icon:hover{
    animation: tada;
    animation-duration: 1s;

}

.icon > img{
    width: 100%;
    height: 100%;
}

.qq{
    width: 35px;
    height: 35px;
}

/*tool过渡动画设置*/
    .tool-enter,.tool-leave-to{
        top: -900px;
    }

    .tool-enter-active, .tool-leave-active{
        transition:top 0.2s ease-in-out;
    }

    .tool-enter-to,.tool-leave{
        top: 0;
    }

    .beian{
        font-size: 12px;
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        color: rgb(180,180,180);
    }


</style>
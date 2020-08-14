<template>
    <div class="classBox" v-bind:class="'classBox' + indexSrc" v-if="display">
        <div class="image">
            <img v-bind:src="classInf.imgUrl" alt="photo">
            <div class="intro">
                {{classInf.title}}
            </div>
        </div>
        <div class="second">
            <div class="main-inf">
                {{classInf.titleIntro}}
            </div>
            <div class="button" @click="turnToClassifi">
                进入<span>[{{classInf.blognum}}]</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ClassificationBox",
        props: ["classInf","indexSrc"],
        data(){
            return {
                display : false
            }
        },
       mounted() {
           this.display = true
            var that = this;
           setTimeout(() => {
               const selector =  document.querySelector(".classBox"+this.indexSrc);
               selector.classList.add("magictime","tinRightIn")
           },this.indexSrc*200)
       },
        methods:{
            turnToClassifi(){
                this.$router.push(`/homeindex/${this.classInf.title}`);
            }
        }
    }
</script>

<style scoped>
    .classBox{
        position: relative;
        width: 100%;
        height: 350px;
        box-shadow: 1px 1px 10px rgb(200,200,200);
    }

    .image{
        height:66.6%;
        overflow: hidden;
        position: relative;
    }

    .image > img{
        width: 120%;
        height: 120%;
    }

    .intro{
        position: absolute;
        height: 40%;
        width: 100%;
        border: 1px solid black;
        bottom: 0;
        background-color: rgba(50,50,50,0.6);
        text-align: left;
        padding: 10px;
        color: white;
        font-size: 30px;
    }

    .second{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 33.4%;
    }

    .main-inf{

        text-align: left;
        width: 60%;
        line-height: 30px;
        color: rgb(100,100,100);
    }

    .button{
        width: 100px;
        height: 40px;
        color: white;
        background: linear-gradient(45deg,#0081ff , #1cbbb4);
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        transition: box-shadow 0.2s ease-in;
    }

    .button:hover{
        box-shadow: 1px 1px 10px rgb(150,150,150);
    }

    span{
        font-size: 12px;
        display: inline-block;
        padding-top: 7px;
    }

</style>
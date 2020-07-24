<template>
    <div class="post">
        <div class="imageBox">
            <img alt="图片插图" src="https://lao-lan-go.oss-cn-beijing.aliyuncs.com/pixiv14.jpg">
        </div>
        <div class="inf-box">
            <p class="date">八月 19 ， 2020</p><!--date-->
            <h2 class="title">关于Javascript的细节</h2><!--title-->
            <p class="intro">这是Javascript的读书笔记，里面涉及了许许多多的细节知识点，对面试有很多的帮助</p> <!--intro-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        data(){
            return {
                winHeight : ""
            }
        },
        created(){
          this.winHeight = window.innerHeight;
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style scoped>
.post{
    min-width: 900px;
    width: 60%;
    height: 300px;
    border: 1px solid rgb(200,200,200);
    display: flex;
    align-items: center;
}
    .imageBox{
        min-width: 500px;
        width: 50%;
        height: 110%;
        margin-left: -20px;
    }

    .imageBox > img{
        width: 100%;
        height: 100%;
    }

    .inf-box{
        min-width: 300px;
        text-align: left;
        width: 30%;
        margin-left: 5%;
    }

    .inf-box > p{
        font-size: 14px;
    }

    .inf-box > h2{
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .date{
        font-size: 13px;
        color: rgb(140,140,140);
    }
</style>
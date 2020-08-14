<template>
    <div class="post">
        <div class="imageBox" @click="turnBlog">
            <figure class="imghvr-shutter-in-out-diag-2 imgfi">
                <img alt="图片插图" :src="post.imgUrl">
                <figcaption style="text-align: left; line-height: 30px">
                    {{post.blogIntro}}
                </figcaption>
            </figure>
        </div>
        <div class="inf-box">
            <p class="date">{{newDate}}</p><!--date-->
            <h2 class="title" @click="turnBlog">{{post.blogName}}</h2><!--title-->
            <p class="intro">{{post.blogIntro}}</p> <!--intro-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props : ['post'],
        data(){
            return {
                winHeight : "",
                newDate : ""
            }
        },
        created(){
          this.winHeight = window.innerHeight;
        },
        mounted(){
            this.formatDate(this.post.date);
        },
        methods:{
            turnBlog(){
                this.$router.push({path : `/blog/${this.post.blogId}/${this.post.blogName}?time=${this.post.date}`})
            },
            formatDate(time){
                let arr = time.split("-");
                this.newDate = `${arr[1]} 月 ${arr[2]} , ${arr[0]} `;
            }
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
        cursor: pointer;
        min-width: 500px;
        width: 50%;
        height: 110%;
        margin-left: -20px;
    }

    .imgfi{
        width: 100%;
        height: 100%;
    }

    .imageBox >.imgfi > img{
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

    .title{
        cursor: pointer;
    }
    .title:hover{
        animation: tada;
        animation-duration: 1s;

    }
</style>
<template>
    <div class="blog">
        <BlogbackHeaders  v-bind:title="title"></BlogbackHeaders>
        <div class="head">
            <div class="title">
                Javascript高级程序设计
            </div>
            <div class="time">
                八月 29，2019
            </div>
            <div class="author">
                by Runtu
            </div>
        </div>
        <div class="mainContent">
            <MarkdownContent></MarkdownContent>
        </div>
    </div>
</template>

<script>
    import BackHeaders from "../components/backHeaders";
    import MarkdownContent from "../components/MarkdownContent";
    import BlogbackHeaders from "../components/BlogbackHeaders";

    export default {
        name: "blog",
        components: {BlogbackHeaders, MarkdownContent, BackHeaders},
        data(){
            return {
                title : "JavaScript高级程序设计"
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>



    .mainContent{
        display: flex;
        justify-content: center;
        margin-top: 100px;
        margin-bottom: 200px;

    }

    .head{
        position: relative;
        height: 120px;
        width: 40%;
        min-width: 400px;
        margin: 100px auto 10px;

    }

    .title{
        font-size: 30px;
        font-weight: bold;
        font-family: 'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
        color: #333;
    }

    .time{
        text-align: left;
        font-family: 'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
        font-size: 14px;
        color: rgb(180,180,180);
        position: absolute;
        bottom: 60px;

    }
    .author{
        font-family: 'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
        position: absolute;
        bottom: 20px;
        font-size: 20px;
        color: rgb(150,150,150);
    }


</style>
<template>
    <div class="blog">
        <BlogbackHeaders  v-bind:title="title"></BlogbackHeaders>
        <div class="head">
            <div class="title">
                {{title}}
            </div>
            <div class="time">
                {{date}}
            </div>
            <div class="author">
                by Runtu
            </div>
        </div>
        <div class="mainContent">
            <MarkdownContent :content = "content"></MarkdownContent>
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
                title : "",
                content : "",
                date : ""
            }
        },
        methods:{
          requestContent(param){
              this.$request.get(`/blogcontent?title=${param}`)
                  .then(res => {
                      console.log(res)
                      this.content = res.data.content;
                      this.title = param;
                  })
                  .catch(err => {
                      console.log(err)
                  })
          },
            formatDate(time){
                let arr = time.split("-");
                this.date = `${arr[1]} 月 ${arr[2]} , ${arr[0]} `;
            }
        },
        created(){
            console.log(this.$route.query)
            this.formatDate(this.$route.query.time);
            this.requestContent(this.$route.params.title);

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
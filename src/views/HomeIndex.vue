<template>
    <div class="homeindex">
        <headbar v-bind:display="display" v-bind:height="winHeight" @returnbegin="eject"></headbar>
        <div class="eject" @click="eject">
            <img :src="imageUrl" alt="down">
        </div>
        <HomeHeadImage @winHeight="getHeight" :request-inf="HomeHeadImageInf"></HomeHeadImage>
        <div class="posts" v-for="item in HomePostsInf" >
            <post :post="item"></post>
        </div>
        <div v-if="!hasPosts" class="noData">
            该专栏下暂时还没有文章，敬请期待。
        </div>
    </div>
</template>

<script>
    import HomeHeadImage from "../components/HomeHeadImage";
    import Headbar from "../components/headbar";
    import Post from "../components/Post";
    export default {
        name: "HomeIndex",
        components: {Post, Headbar, HomeHeadImage},
        data(){
            return {
                display : false,
                arr: [1,2,3,4],
                winHeight : window.innerHeight,
                imageUrl : require("@/assets/menu.svg"),
                HomeHeadImageInf: {},
                HomePostsInf : [],
                requestPage : 1,
                isFinished : false, //用来防止懒加载时过多请求使用
                pageParam:  "",
                hasPosts : false
            }
        },
        methods : {
            eject(){
                var top = $(document).scrollTop();
                if(this.display === true){ //解除限制（true -> false）
                    $("body").css("overflow","auto");
                    this.imageUrl = require("@/assets/menu.svg")
                }else{   //设置限制 (false -> true)
                    $("body").css("overflow","hidden");
                    this.imageUrl = require("@/assets/close.svg")
                }
                this.display = !this.display;
                console.log(this.winHeight)
            },
            getHeight(height){
                this.winHeight = height;
            },
            requestCover(name){
                this.$request.get(`/homeindex?name=${name}`)
                    .then(data => {
                        this.HomeHeadImageInf = data.data.result.result[0]
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            requestPosts(page,name){
                if(!this.isFinished)
                {
                    this.$request.get(`/homeindex/posts?page=${page}&pageNum=3&name=${name}`)
                        .then(res => {
                            if(page === 1)
                            {
                                this.HomePostsInf = res.data.result.result;
                                if(this.HomePostsInf.length !== 0) { this.hasPosts = true;  }  // 是否有文章标识符更新
                            }else{
                                console.log(res.data.result.result);
                                if(res.data.result.result.length !== 0)
                                {
                                    this.HomePostsInf = this.HomePostsInf.concat(res.data.result.result);
                                }else{
                                    this.isFinished = true;
                                }
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            }

        },
        created() {
            if(this.$route.params.name === "home")
            {
                this.requestCover("home");
                this.requestPosts(this.requestPage || 1,"home");
                this.pageParam = "home";
            }else{
                this.requestCover(this.$route.params.name);
                this.requestPosts(this.requestPage || 1,this.$route.params.name);
                this.pageParam = this.$route.params.name;
            }



        },
        mounted() {
            window.addEventListener("scroll",() => {
                if(window.pageYOffset + window.innerHeight === document.body.scrollHeight) {
                    console.log("到达底部")
                    this.requestPage++;
                    this.requestPosts(this.requestPage,this.pageParam);
                }
            })
        },
        watch : {
            '$route'(to,from){
                if(to.params.name !== from.params.name){
                    this.$router.go(0);
                }
            }
        }
    }
</script>

<style scoped>
    .homeindex{
        position: relative;
        font-family: 'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
    }

    .eject{
        box-sizing: content-box;
        background-color: rgba(255,255,255,0.9);
        z-index: 10;
        width : 30px ;
        height : 30px ;
        position: absolute;
        top: 50px;
        right: 40px;
        transform: translateX(-50%);
        cursor: pointer;
        transition: height 0.3s ease-in;
        border-radius: 5px;
    }



    .eject > img{
        width: 100%;
        height: 100%;
    }

    .posts{

    }

    .posts > * {
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
    }

    .posts > :last-child{
        margin-bottom: 200px;
    }

    .noData{
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-family: 'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
        font-size: 20px;
        color: rgb(100,100,100);
    }
</style>
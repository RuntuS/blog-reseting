<template>
    <div class="guidang">
        <back-headers></back-headers>
        <div class="fenlei">
            分类
        </div>
        <div class="box">
            <div class="classif" v-for="( item,index) in classInf">
                <ClassificationBox v-bind:class-inf="item" v-bind:index-src="index+1"></ClassificationBox>
            </div>
        </div>

    </div>
</template>

<script>
    import BackHeaders from "../components/backHeaders";
    import ClassificationBox from "../components/ClassificationBox";
    export default {
        name: "guidang",
        components: {ClassificationBox, BackHeaders},
        data(){
            return {
                classInf : [
                    {
                        title : "Nodejs",
                        intro : "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型。",
                        url : "http://www.niemingzhao.top/images/random/material-1.png",
                        remains: 10
                    },
                    {
                        title : "Nodejs",
                        intro : "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型。",
                        url : "http://www.niemingzhao.top/images/random/material-1.png",
                        remains: 10
                    },
                    {
                        title : "Nodejs",
                        intro : "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型。",
                        url : "http://www.niemingzhao.top/images/random/material-1.png",
                        remains: 10
                    },
                    {
                        title : "Nodejs",
                        intro : "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型。",
                        url : "http://www.niemingzhao.top/images/random/material-1.png",
                        remains: 10
                    }]
            }
        }
    }
</script>

<style scoped>
    .guidang{
        position: relative;
    }

    .fenlei{
        position: absolute;
        color: rgb(120,120,120);
        top: 10px;
        left: 200px;
        font-size: 30px;
        font-weight: 400;
    }
    .box{
        padding-bottom: 200px;
    }

    .classif{
        margin: 100px auto;
        width: 50%;
    }
</style>
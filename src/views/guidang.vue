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
                classInf : []
            }
        },
        methods:{
            requestClassificationInf(){
                this.$request.get("/classification")
                    .then(res => {
                        this.classInf = res.data.result;
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        created() {
            this.requestClassificationInf();
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
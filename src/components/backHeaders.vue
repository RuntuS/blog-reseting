<template>
        <div class="headers">
            <div class="imgbox" @click="back">
                <img src="@/assets/back.svg" alt="back">
            </div>
        </div>
</template>

<script>
    export default {
        name: "backHeaders",
        data(){
            return {

            }
        },
        methods : {
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .headers{
        border-bottom: 1px solid rgb(180,190,190);
        height: 60px;
        display: flex;
        align-items: center;
    }
    .imgbox{
        cursor: pointer;
        margin-left: 20px;
        width: 40px;
        height: 40px;
    }
    .imgbox > img{
        width: 100%;
        height: 100%;
    }

</style>
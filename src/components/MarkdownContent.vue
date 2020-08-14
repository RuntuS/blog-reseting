<template>
    <div class="markdown" v-html="htm" v-highlight>

    </div>
</template>

<script>

    export default {
        name: "MarkdownContent",
        props : ["content"],
        data(){
            return {
                htm : "",
                md : ""
            }
        },
        mounted() {
            var that = this;
            setTimeout(() => {
                var converter = new showdown.Converter();
                this.htm = converter.makeHtml(this.content)
            },1000)

        }
    }
</script>

<style scoped>
.markdown{
    width: 40%;
    line-height: 50px;
    min-width: 400px;
}


</style>
<template>
  <div id="app">
      <transition :name="transitionName">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>

  export default {
    data(){
        return {
            transitionName : ""
        }
    },
     watch : {
        $route(to,from){
            if(to.meta.index > from.meta.index){
                this.transitionName = "slide-left" //向左滑动
            }else {
                this.transitionName = 'slide-right' //向右滑动
            }
        }
     }
  }
</script>

<style>
  #app {
    font-family:  Consolas,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  code{
      font-family: Consolas, Menlo, Courier, monospace;
  }

  #nav{

  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
      will-change: transform;
      transition: all 500ms;
      position: absolute;
  }

  .slide-right-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
  }

</style>
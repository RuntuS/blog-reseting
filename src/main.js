import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./axios/index"
import hljs from "highlight.js"
import "highlight.js/styles/default.css"

Vue.config.productionTip = false;
Vue.prototype.$request = axios;
Vue.directive("highlight",(el => {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block,"black")
  })
}))



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

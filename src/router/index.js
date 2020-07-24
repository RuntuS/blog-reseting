import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
// 重写router，router新特性不允许跳转相同页面
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

const HomeIndex = () => import("../views/HomeIndex");
const about = () => import("../views/About");
const guidang = () => import("../views/guidang");
const friend  = () => import("../views/Friend");

  const routes = [
        {
          path: '/homeindex',
          name: 'HomeIndex',
          meta : {index : 0},
          component: HomeIndex
        },
        {
          path : "/about",
          name : "About",
          meta : {index : 1},
          component : about
        },
        {
          path : "/guidang",
          name : "Guidang",
          meta : {index : 2},
          component : guidang
        },
       {
          path : "/friends",
          name : "Friends",
          meta : {index : 3},
          component : friend
       },
       {
          path : "*",
          redirect : to => {
              return "/guidang"
          }
         }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})


export default router

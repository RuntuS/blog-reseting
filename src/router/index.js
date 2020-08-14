import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);


const HomeIndex = () => import("../views/HomeIndex");
const about = () => import("../views/About");
const guidang = () => import("../views/guidang");
const friend  = () => import("../views/Friend");
const blog = () => import("../views/blog")
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

  const routes = [
        {
          path: '/homeindex/:name',
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
          path : "/blog/:id/:title",
          name : "blog",
          meta : {index : 4},
          component : blog
       },
       {
          path : "*",
          redirect : to => {
              return "/homeindex/home"
          }
         }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})


export default router

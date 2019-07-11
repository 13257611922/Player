import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入样式
// 导入element样式
import 'element-ui/lib/theme-chalk/index.css'
// 首页样式
import './assets/css/index.css'
import './assets/css/iconfont.css'
// 搜索样式
import './assets/css/results.css'
// 播放样式
import './assets/css/player.css'
// mv样式
import './assets/css/video.css'
// 评论样式
import './assets/css/comment.css'


// 导入路由
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'

// 导入slideshow组件
// import slideshow from './components/slideshow.vue'
// 导入results组件
import result from './components/results.vue'
// 导入player组件
import player from './components/player.vue'
// 导入mv组件
import mv from './components/mv.vue'
// 导入comment组件
import comment from './components/comment.vue'

// 设置use
Vue.use(VueRouter)
Vue.use(ElementUI)

// axios基地址设置
axios.defaults.baseURL = 'https://autumnfish.cn'
// 将axios添入Vue原型
Vue.prototype.$axios = axios


// 路由规则2
const routes = [
  // {path:'/slideshow',component:slideshow},
  {path:'/results/:search',component:result},
  {path:'/player/:player',component:player},
  {path:'/mv/:mv',component:mv},
  {path:'/comment/:comment',component:comment}
]

// 路由对象
const router = new VueRouter({
  routes
})

// 设置给vue实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

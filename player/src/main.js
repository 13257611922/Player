import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入样式
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

// 路由规则
const routes = [
  {path:'/results',component:result},
  {path:'/player',component:player},
  {path:'/mv',component:mv},
  {path:'/comment',component:comment}

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

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入样式
// 首页样式
import './assets/css/index.css'
import './assets/css/iconfont.css'
// 搜索样式
import './assets/css/results.css'

// 导入路由
import VueRouter from 'vue-router'

// 导入results组件
import result from './components/results.vue'

// 设置use
Vue.use(VueRouter)

// 路由规则
const routes = [
  {path:'/results',component:result}
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

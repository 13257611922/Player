import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入路由
import VueRouter from 'vue-router'
// 设置use
vue.use(VueRouter)
// 路由规则
const routes = [
  
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

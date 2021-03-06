import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    // 只要用户访问了根路径 就自动重定向到Login地址中
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/main', component: Main }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //  to代表将要访问的路径
  //  from代表从哪里路径跳转而来
  //  next是一个函数，表示放行
  //    next() 放行      next(‘/login') 强制跳转
  // if (to.path === '/login') return next()
  // 获取token
  // const tokenstr = sessionStorage.getItem('token')
  // if (!tokenstr) return next('/login')
  next()
})

export default router

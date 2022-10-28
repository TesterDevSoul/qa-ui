import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '../views/LayOut.vue'
import TestCase from '../views/TestCase.vue'
import TestTask from '../views/TestTask.vue'
import TestReport from '../views/TestReport.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/case'
  
  }, 
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/layout',
    name: 'layout',
    component: LayOut,
    children: [
      {
        path: 'case',
        name: 'case',
        component: TestCase
      },
      {
        path: 'task',
        name: 'task',
        component: TestTask
      },
      {
        path: 'report',
        name: 'report',
        component: TestReport
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})
//前置守卫
//如果登录成功则继续，如果未登录则跳转登录页面
//to:即将要进入到的路由页面
//from:当前页面的路由
//next:下一步 next()直接原路由，next('/login')先跳转到登录页面
router.beforeEach((to,from,next) =>{
  //1.如果是登录的路由，直接next()
  if('/login' == to.path){
    next();
  }else{
    //2.非登录页面，其他所有页面，需要验证是否登录
    let token = localStorage.getItem('token');
    if(null == token | '' == token){
      //3.未登录成功,跳转到登录页面
      next('/login');
    }else{
      //登录成功
      next();
    }
  }
})

export default router

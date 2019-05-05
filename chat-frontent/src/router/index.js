import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Chatroom from '@/components/Chatroom'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chatroom',
      component: Chatroom,
      props:true,
      beforeEnter:(to,from,next)=>{
        if(to.params.name){
          next()
        }else{
          next({name:'Login'})
        }
      }
    }
  ]
})

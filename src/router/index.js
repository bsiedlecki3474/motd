import Vue from 'vue'
import Router from 'vue-router'

import index from '@/sites/index'
import ranking from '@/sites/ranking'
import speedrunTv from '@/sites/speedrunTv'
import vip from '@/sites/vip'
import login from '@/sites/login'
import dashboard from '@/sites/dashboard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      meta: { layout: "main" }
    },
    {
      path: '/ranking',
      component: ranking,
      meta: { layout: "default" }
    },
    {
      path: '/speedrunTV',
      component: speedrunTv,
      meta: { layout: "default" }
    },
    {
      path: '/vip',
      component: vip,
      meta: { layout: "default" }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { layout: "default" }
      
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      meta: { layout: "admin" }
    }
  ]
})

export default router;

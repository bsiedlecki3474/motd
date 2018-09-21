import Vue from 'vue'
import Router from 'vue-router'

import mainLayout from '@/layouts/mainLayout'
import rankingLayout from '@/layouts/rankingLayout'
import adminLayout from '@/layouts/adminLayout'
import dashboardLayout from '@/layouts/dashboardLayout'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: mainLayout
    },
    {
      path: '/ranking',
      component: rankingLayout
    },
    {
      path: '/admin',
      name: 'admin',
      component: adminLayout
      
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: dashboardLayout
    }
  ]
})

export default router;

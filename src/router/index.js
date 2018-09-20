import Vue from 'vue'
import Router from 'vue-router'
import mainLayout from '@/layouts/mainLayout'
import rankingLayout from '@/layouts/rankingLayout'
import adminLayout from '@/layouts/adminLayout'

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
      component: adminLayout
    }
  ]
})

export default router;

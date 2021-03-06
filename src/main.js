// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue'
import App from './App'
import router from './router'
//import vueSmoothScroll from 'vue2-smooth-scroll'
import ElementUI from 'element-ui';

import Default from './layouts/Default'
import Main from './layouts/Main'
import Admin from './layouts/admin'

//Vue.use(vueSmoothScroll)
Vue.use(ElementUI);

const EventBus = new Vue();
export default EventBus;

Vue.component("default-layout", Default);
Vue.component("main-layout", Main);
Vue.component("admin-layout", Admin);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = window.axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

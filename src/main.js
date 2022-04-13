import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import {requestPost} from './request/api'
import {requestGet} from './request/api'

Vue.config.productionTip = false
Vue.prototype.requestPost=requestPost
Vue.prototype.requestGet=requestGet

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

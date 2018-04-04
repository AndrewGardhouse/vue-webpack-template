import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import './assets/app.scss'

Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h(App)
})

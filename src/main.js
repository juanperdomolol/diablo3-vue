import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Traer la librería
import BootstrapVue from 'bootstrap-vue'
// Traer el css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    this.init()
  },
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },

  render: h => h(App)
}).$mount('#app')

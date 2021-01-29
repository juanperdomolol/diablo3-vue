import Vue from 'vue'
import Vuex from 'vuex'
import oauth from './modules/oauth'

Vue.use(Vuex)
export default new Vuex.Store({
  // aqui registramos todos los modulos
  modules: {
    oauth
  }
})

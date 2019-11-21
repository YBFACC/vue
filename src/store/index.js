import Vue from 'vue'
import VueX from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(VueX)

export default new VueX.Store({
  state: state,
  mutations: mutations
})

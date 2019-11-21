import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)
export default new VueX.Store({
  state: {
    city: '上海'
  },

  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})

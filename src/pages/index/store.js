// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
   bannerdata:[],
   prolist:[]
  },
  mutations: {
    changebannerdata: (state,data) => {
      state.bannerdata = data
    },
    changeprolist: (state,data) => {
      state.prolist = data
    }
  }
})

export default store

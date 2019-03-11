import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import Vuex from 'vuex'
import 'normalize.css'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    ls: {}
  },
  actions: {
    SOCKET_gzhs_list_data(state, data) {
      state.state.ls = data;
    }
  }
})
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000',
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  },
}))
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import Vuex from 'vuex'
import Axios from 'axios'
import 'normalize.css'

Vue.use(Vuex)
Vue.prototype.$axios = Axios
const store = new Vuex.Store({
  state: {
    count: 0,
    ls: {},
    allArticles: {}
  },
  actions: {
    SOCKET_gzhs_list_data(state, data) {
      state.state.ls = data;
    },
    SOCKET_gzhs_all_articles_data(state, data) {
      state.state.allArticles = data;
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

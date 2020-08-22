import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSimpleAlert from 'vue-simple-alert'
import VueSignaturePad from 'vue-signature-pad'
Vue.use(VueSimpleAlert)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueSignaturePad)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  render: h => h(App)
}).$mount('#app')

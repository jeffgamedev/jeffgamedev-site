import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueGtag from "vue-gtag";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueGtag, { config: { id: "G-R511G7BSGN" } }, router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

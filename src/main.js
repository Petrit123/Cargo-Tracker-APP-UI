import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueAxios from './plugins/axios'


Vue.config.productionTip = false

Vue.use(BootstrapVue);

Vue.use(VueAxios);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
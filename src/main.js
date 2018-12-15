import Vue from 'vue';
import App from './App';
import router from './router';

// bootstrap
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

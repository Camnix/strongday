import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';
import './assets/sass/main.scss';

// global components
import './plugins/commonComponents';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';
import './assets/sass/main.scss';

// global components
import { Button, Heading } from './components/common';

Vue.component('VBtn', Button);
Vue.component('Heading', Heading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

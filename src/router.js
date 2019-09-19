import Vue from 'vue';
import Router from 'vue-router';

import NewWorkout from './views/NewWorkout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: NewWorkout
    }
  ]
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { EventBus } from './common/event-bus';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  EventBus.initial = to;
  EventBus.$emit('route-changed', to);
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});


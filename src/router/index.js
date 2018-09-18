import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Books from '@/components/Books';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    /* {
      path: '/vesi',
      name: 'Vesi',
      component: Vesi,
    },
    {
      path: '/yo',
      name: 'Yo',
      component: Yo,
    }, */
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
  ],
});

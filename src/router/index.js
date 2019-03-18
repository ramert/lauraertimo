import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Books from '@/components/Books';
import Yo from '@/components/Yo';
import Vesi from '@/components/Vesi';

Vue.use(Router);

const routes = [
  //
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: 'Laura Ertimo',
  },
  {
    path: '/Me',
    name: 'Me',
    component: Vesi,
    meta: 'Laura',
  },
  {
    path: '/yo',
    name: 'Yo',
    component: Yo,
    meta: 'Yo-kirja',
  },
  {
    path: '/vesi',
    name: 'Vesi',
    component: Vesi,
    meta: 'Vesi-kirja',
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: 'Kirjat',
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;

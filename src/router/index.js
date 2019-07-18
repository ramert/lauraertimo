import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Books from '@/components/Books';
import Yo from '@/views/Yo';
import Vesi from '@/views/Vesi';
import Author from '@/views/Author';

Vue.use(Router);

const routes = [
  //
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Laura Ertimo',
      background: '#1c1c1c',
    },
  },
  {
    path: '/author',
    name: 'Author',
    component: Author,
    meta: {
      title: 'Tietokirjailija',
      background: '#cf1945',
    },
  },
  {
    path: '/yo',
    name: 'Yo',
    component: Yo,
    meta: {
      title: 'Yö',
      background: 'black',
    },
  },
  {
    path: '/vesi',
    name: 'Vesi',
    component: Vesi,
    meta: {
      title: 'Vesi',
      background: '#244f7d',
    },
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: {
      title: 'Kirjat',
      background: '#339900',
    },
  },
];

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0 });
  },
});

export default router;

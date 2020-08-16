import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Books from '@/views/Books';
import Author from '@/views/Author';
import Foreign from '@/views/Foreign';

// Books
import Yo from '@/books/Yo';
import Vesi from '@/books/Vesi';
import IhmeIlmat from '@/books/IhmeIlmat';
import Lumotun from '@/books/LumotunMaanKartasto';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/author',
    name: 'Author',
    component: Author,
    meta: {
      title: 'Tietokirjailija',
      background: '#111e6c',
    },
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: {
      title: 'Kirjat',
      background: '#111e6c',
    },
  },
  {
    path: '/foreign',
    name: 'Foreign rights',
    component: Foreign,
    meta: {
      title: 'Foreign rights',
      background: '#111e6c',
    },
  },
  // Books
  {
    path: '/yo',
    name: 'Yo',
    component: Yo,
    meta: {
      title: 'Yö',
      background: '#111e6c',
    },
  },
  {
    path: '/vesi',
    name: 'Vesi',
    component: Vesi,
    meta: {
      title: 'Vesi',
      background: '#111e6c',
    },
  },
  {
    path: '/ihmeIlmat',
    name: 'Ihme ilmat',
    component: IhmeIlmat,
    meta: {
      title: 'Ihme ilmat!',
      background: '#111e6c',
    },
  },
  {
    path: '/lumotunMaanKartasto',
    name: 'Lumotun maan kartasto',
    component: Lumotun,
    meta: {
      title: 'Lumotun maan kartasto',
      background: '#111e6c',
    },
  },

];

const router = new Router({
  mode: 'history',
  routes,
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;

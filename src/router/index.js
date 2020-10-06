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
import Maaapallo from '@/books/SelkoMaapallo';

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
      parent: '/'
    },
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: {
      title: 'Kirjat',
      parent: '/'
    },
  },
  {
    path: '/foreign',
    name: 'Foreign rights',
    component: Foreign,
    meta: {
      title: 'Foreign rights',
      parent: '/'
    },
  },
  // Books
  {
    path: '/yo',
    name: 'Yo',
    component: Yo,
    meta: {
      title: 'Yö',
      parent: '/books'
    },
  },
  {
    path: '/vesi',
    name: 'Vesi',
    component: Vesi,
    meta: {
      title: 'Vesi',
      subTitle: 'Kirja maailman tärkeimmästä aineesta',
      parent: '/books'
    },
  },
  {
    path: '/ihmeIlmat',
    name: 'Ihme ilmat',
    component: IhmeIlmat,
    meta: {
      title: 'Ihme ilmat!',
      subTitle: 'Miksi ilmasto muuttuu',
      parent: '/books'
    },
  },
  {
    path: '/lumotunMaanKartasto',
    name: 'Lumotun maan kartasto',
    component: Lumotun,
    meta: {
      title: 'Lumotun maan kartasto',
      parent: '/books'
    },
  },
  {
    path: '/maapallotieto',
    name: 'Maapallo. Planeettamme selkokielellä',
    component: Maaapallo,
    meta: {
      title: 'Maapallo. Planeettamme selkokielellä',
            parent: '/books'
    },
  },
  

];

const router = new Router({
  mode: 'history',
  routes,
});


router.afterEach((to, from, next) => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
    });
  }, 200);
});
export default router;

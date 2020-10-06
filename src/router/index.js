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
      title: 'Tietokirjailija'
    },
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: {
      title: 'Kirjat'
    },
  },
  {
    path: '/foreign',
    name: 'Foreign rights',
    component: Foreign,
    meta: {
      title: 'Foreign rights'
    },
  },
  // Books
  {
    path: '/yo',
    name: 'Yo',
    component: Yo,
    meta: {
      title: 'Yö'
    },
  },
  {
    path: '/vesi',
    name: 'Vesi',
    component: Vesi,
    meta: {
      title: 'Vesi',
      subTitle: 'Kirja maailman tärkeimmästä aineesta'
    },
  },
  {
    path: '/ihmeIlmat',
    name: 'Ihme ilmat',
    component: IhmeIlmat,
    meta: {
      title: 'Ihme ilmat!',
      subTitle: 'Miksi ilmasto muuttuu'
    },
  },
  {
    path: '/lumotunMaanKartasto',
    name: 'Lumotun maan kartasto',
    component: Lumotun,
    meta: {
      title: 'Lumotun maan kartasto'
    },
  },
  {
    path: '/maapallotieto',
    name: 'Maapallo. Planeettamme selkokielellä',
    component: Maaapallo,
    meta: {
      title: 'Maapallo. Planeettamme selkokielellä'
    },
  },
  

];

const router = new Router({
  mode: 'history',
  routes,
});

router.afterEach((to, from, next) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

export default router;

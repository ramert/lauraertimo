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
import IhmeIlmatPuuha from '@/books/IhmeIlmatPuuha';
import Lumotun from '@/books/LumotunMaanKartasto';
import Maapallo from '@/books/SelkoMaapallo';
import SelkoIlmastonMuutos from '@/books/SelkoIlmastonMuutos';
import AikaMatka from '@/books/AikaMatka';
import PikkuTietoMissaOlet from '@/books/PikkuTietoMissaOlet';
import PikkuTietoMennaanPiiloon from '@/books/PikkuTietoMennaanPiiloon';


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
      subTitle: 'Kirja unesta ja pimeän salaisuuksista',
    },
  },
  {
    path: '/vesi',
    name: 'Vesi',
    component: Vesi,
    meta: {
      title: 'Vesi',
    },
  },
  {
    path: '/ihmeIlmat',
    name: 'Ihme ilmat',
    component: IhmeIlmat,
    meta: {
      title: 'Ihme ilmat!',
    },
  },
  {
    path: '/lumotunMaanKartasto',
    name: 'Lumotun maan kartasto',
    component: Lumotun,
    meta: {
      title: 'Lumotun maan kartasto',
    },
  },
  {
    path: '/maapallotieto',
    name: 'Maapallo Planeettamme selkokielellä',
    component: Maapallo,
    meta: {
      title: 'Maapallo',
      subTitle: 'Planeettamme selkokielellä',
    },
  },
  {
    path: '/ihmeIlmatPuuha',
    name: 'Ihme ilmat! Koko perheen puuhakirja',
    component: IhmeIlmatPuuha,
    meta: {
      title: 'Ihme ilmat!',
      subTitle: 'Koko perheen puuhakirja',
    },
  },
  {
    path: '/aikaMatka',
    name: 'Aika matka',
    component: AikaMatka,
    meta: {
      title: 'Aika matka',
    },
  },
  {
    path: '/pikkuTietoMissaOlet',
    name: 'Pikkutieto: Missa sina olet',
    component: PikkuTietoMissaOlet,
    meta: {
      title: 'Pikkutieto: Missä sinä olet?',
    },
  },
  {
    path: '/pikkuTietoMennaanPiiloon',
    name: 'Pikkutieto: Mennaan piiloon',
    component: PikkuTietoMennaanPiiloon,
    meta: {
      title: 'Pikkutieto: Mennään piiloon',
    },
  },
  {
    path: '/ilmastonMuutosSelko',
    name: 'Ilmastonmuutos selkokielella',
    component: SelkoIlmastonMuutos,
    meta: {
      title: 'Ilmastonmuutos selkokielellä',
    },
  }
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

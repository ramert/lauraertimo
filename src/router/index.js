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
    name: 'Maapallo Planeettamme selkokielellä',
    component: Maapallo,
    meta: {
      title: 'Maapallo',
      subTitle: 'Planeettamme selkokielellä',
      parent: '/books'
    },
  },
  {
    path: '/ihmeIlmatPuuha',
    name: 'Ihme ilmat! Koko perheen puuhakirja',
    component: IhmeIlmatPuuha,
    meta: {
      title: 'Ihme ilmat!',
      subTitle: 'Koko perheen puuhakirja',
      parent: '/books'
    },
  },
  {
    path: '/aikaMatka',
    name: 'Aika matka',
    component: AikaMatka,
    meta: {
      title: 'Aika matka',
      parent: '/books'
    },
  },
  {
    path: '/pikkuTietoMissaOlet',
    name: 'Pikkutieto: Missa sina olet',
    component: PikkuTietoMissaOlet,
    meta: {
      title: 'Pikkutieto: Missä sinä olet?',
      parent: '/books'
    },
  },
  {
    path: '/pikkuTietoMennaanPiiloon',
    name: 'Pikkutieto: Mennaan piiloon',
    component: PikkuTietoMennaanPiiloon,
    meta: {
      title: 'Pikkutieto: Mennään piiloon',
      parent: '/books'
    },
  },
  {
    path: '/ilmastonMuutosSelko',
    name: 'Ilmastonmuutos selkokielella',
    component: SelkoIlmastonMuutos,
    meta: {
      title: 'Ilmastonmuutos selkokielellä',
      parent: '/books'
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

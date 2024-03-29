import Vue from 'vue';

import Router from 'vue-router';
import Home from '@/views/Home';
import Books from '@/views/Books';
import Author from '@/views/Author';
import Media from '@/views/Media';
import Foreign from '@/views/Foreign';

import Tietopollo from '@/views/TietoPollo';

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
import MikaMahti from '@/books/Mikamahti';


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
  {
    path: '/media',
    name: 'Mediassa',
    component: Media,
    meta: {
      title: 'Mediassa',
      parent: '/'
    },
  },
  {
    path: '/tietopollo',
    name: 'Tietopöllö palkinto',
    component: Tietopollo,
    meta: {
      title: 'Tietopöllö-palkinto',
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
  },
  {
    path: '/mikamahti',
    name: 'Mikä Mahti!',
    component: MikaMahti,
    meta: {
      title: 'Mikä Mahti!',
    },
  }
];

const router = new Router({
  mode: 'history',
  routes,
});

router.afterEach((to, from, next) => {
  setTimeout(() => {
    if ( to.hash ) {
      const elementToScrollTo = document.getElementById(to.hash.slice(1));
      if ( elementToScrollTo) {
        window.scrollTo({
          top: 0,
        });
        const y = elementToScrollTo.getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: y,
          behavior: 'smooth'
        })
      }
    } else {
      window.scrollTo({
        top: 0,
      });
    }
  }, 250);
});
export default router;

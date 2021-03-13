<template>
  <vPage>
    <div class="book-section" v-for="bookList in AllBooks" :key="bookList.title">
      <h2>{{bookList.title}}</h2>
      <ul>
        <book v-for="book in bookList.books" :key="book.name"
          :name="book.name"
          :image="book.image"
          :toLink="book.toLink"
          :extLink="book.extLink"
          :illustrator="book.illustrator"
          :publisher="book.publisher"
          :publisherLink="book.publisherLink"
          :description="book.description"
          :flag="book.flag"
        />
      </ul>
    </div>
    <div>
      <h2>Aiempaa tuotantoa</h2>
      <ul>
        <li v-for="book in EarlierBooks" :key="book.name" class="link">
          <h3>{{book.name}}</h3>
          <div>{{book.publisher}}</div>
          <div v-if="book.info">{{book.info}}</div>
        </li>
      </ul>  
    </div>
  </vPage>
</template>

<script>
import Vue from "vue";
import Book from "@/components/BookLink";

import VesiImage from '@/assets/vesi/kansi.jpg';
import YoImage from '@/assets/yo/kansi.jpg';
import IhmeIlmatImage from '@/assets/ihmeilmat/ihme-ilmat-miksi-ilmasto-muuttuu.jpg';
import IhmeIlmatPuuhaImage from '@/assets/ihme-ilmat-puuha.jpeg';
import LumottuImage from '@/assets/lumotunmaankartasto/lumotun-maan-kartasto.jpg';
import PikkuTietoMissa from '@/assets/missa-sina-olet.jpg';
import PikkuTietoMennaan from '@/assets/mennaan-piiloon.jpeg';
import Maapallotieto from '@/assets/Maapallo_etukansi.jpg';
import IlmastonMuutosSelko from '@/assets/IlmastonMuutosSelko.jpeg';
 
const ComicBooks = [
  {
    name: "Ihme ilmat! Miksi ilmasto muuttuu",
    image:IhmeIlmatImage,
    toLink:"/ihmeIlmat",
    illustrator: "Mari Ahokoivu",
    publisher: "Into Kustannus 2019",
    publisherLink: "https://kauppa.intokustannus.fi/",
    description: "Sarjakuvatietokirja ilmastonmuutoksesta, sen mekanismeista ja hillitsemisestä."
  },
  {
    name: "Ihme ilmat! Koko perheen puuhakirja",
    image:  IhmeIlmatPuuhaImage,
    illustrator: "Mari Ahokoivu",
    extLink:"https://kauppa.intokustannus.fi/kirja/ihme-ilmat-puuhakirja-ilmaston-pelastajille/",
    publisher: "Into Kustannus 2021",
    publisherLink: "https://kauppa.intokustannus.fi/",
    description: "Tehtäviä, jotka auttavat ymmärtämään maailman muutosta ja muuttamaan maailmaa."
  },
    {
    name: "Aika matka!",
    illustrator: "Mari Ahokoivu",
    //toLink:"/aikaMatka",
    flag: "Tulossa",
    publisher: "Into Kustannus 2021",
    publisherLink: "https://kauppa.intokustannus.fi/",
    description: "Suuri seikkailu avaa ympäristökriisin peruja."
  }
];

const FamilyBooks = [
  {
    name:"Lumotun Maan kartasto",
    image:LumottuImage,
    toLink:"/lumotunMaanKartasto",
    illustrator:"Satu Kontinen",
    publisher:"S&S 2020",
    publisherLink: "https://kustantamo.sets.fi/",
    description:"Kymmenen lumoavaa tositarinaa ja kymmenen satumaista karttaa."
  },
  {
    name:"Vesi - kirja maailman tärkeimmästä aineesta",
    image:VesiImage,
    toLink:"/vesi",
    illustrator:"Satu Kontinen",
    publisher:"Myllylahti 2017",
    publisherLink: "https://www.myllylahti.fi/",
    description:"Arkipäiväisen aineen lumottu todellisuus."
  },
  {
    name:"Yö - kirja unesta ja pimeän salaisuuksista",
    image:YoImage,
    toLink:"/yo",
    illustrator:"Satu Kontinen",
    publisher:"Myllylahti 2016",
    publisherLink: "https://www.myllylahti.fi/",
    description:"Turvallinen hämärä ja onnellinen uni, tietoa joka pehmittää pelot."
  }
];

const SmallChildrenBooks = [  
  {
    name:"Pikkutieto: Missä sinä olet?",
    image: PikkuTietoMissa,
    toLink:"/pikkuTietoMissaOlet",
    illustrator:"Sanna Pelliccioni",
    publisher:"Minerva Kustannus 2020",
    publisherLink: "https://www.minervakustannus.fi/",
    description:"Seikkailijahahmo Plop kuljettaa perheen pienimmät ensimmäiseen suureen seikkailuun."
  },
  {
    name:"Pikkutieto: Mennään piiloon!",
    image: PikkuTietoMennaan,
    extLink:"https://www.karisto.fi/sivu/tuote/mennaan-piiloon/2756682",
    illustrator:"Sanna Pelliccioni",
    publisher:"Karisto 2021",
    publisherLink: "https://www.karisto.fi/",
    description:"Plop tutkii, mitä kaikkea näkymätöntä ympärillämme häärii. On monta tapaa mennä piiloon."
  }
];

const WorldClearText = [  
  {
    name:"Maapallo Planeettamme selkokielellä",
    image: Maapallotieto,
    toLink:"/maapallotieto",
    illustrator:"Markus Hotakainen",
    publisher:"Oppimateriaalikeskus Opike 2020",
    publisherLink: "https://opike.fi/",
    description:"Selkokielinen maapallokirja selvittää planeettamme toimintaa kaasupallon tiivistymisestä tulevaisuuden kynnykselle."
  },
  {
    name:"Ilmastonmuutos selkokielellä",
    image: IlmastonMuutosSelko,
    extLink:"https://www.opike.fi/?mod=products&pid=504",
    publisher:"Oppimateriaalikeskus Opike 2020",
    publisherLink: "https://opike.fi/",
    description:"Kirja selvittää ilmastonmuutoksen syitä ja hillintää selkokielisesti."
  }
];

const AllBooks = [
  {
    title: 'Sarjakuva-tietokirjat',
    books: ComicBooks
  },
  {
    title: 'Koko perheen kuvitetut tietokirjat',
    books: FamilyBooks
  },
  {
    title: 'Tietoseikkailut perheen pienimmille',
    books: SmallChildrenBooks
  },
  { 
    title: 'Maapallotieto selkokielellä',
    books: WorldClearText
  }
];

const EarlierBooks = [
  {
    name:"Indiefood lähiruokaopas Suomeen",
    publisher:"Myllylahti 2016"
  },
  {
    name:"Sudenpentujen karttakirja",   
    publisher:"Sanoma Magazines Finland 2012"
  },
  {
    name:"Suomen 100 Lähiruokakohteet",    
    publisher:"Karttakeskus 2011"
  },
  {
    name:"Muumit ja maailmankartasto",    
    publisher:"Egmont Kustannus 2009",
    info: "Tekijänä tietoteksteissä"
  },
  {
    name:"Kurvisen perheen liikennekirja",    
    publisher:"Karttakeskus 2009"
  },
  {
    name:"Karttakirppu maailmalla",    
    publisher:"Karttakeskus 2008"
  },
  {
    name:"Tutkimusmatka maailmaan",    
    publisher:"Karttakeskus 2007"
  },
  {
    name:"Matkan varrella: lasten matkailukartasto",    
    publisher:"Genimap 2006"
  }
]

Vue.component("book", Book);
export default {
  name: "Books",
  data() {
    return {
      AllBooks,
      EarlierBooks
    }
  }
};
</script>

<style lang="scss" scoped>
.book-section {
  padding-bottom: calc(5 * var(--spacing-unit));
}
.link {
  padding: var(--spacing-unit);
}
</style>

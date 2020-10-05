<template>
  <vPage>
    <section>
        <div class="re-content-block__paragraph re-content-block__paragraph--center">
          <h2 class="ingress ingress--center">Non-fiction for children and the whole family</h2>
        </div>
      </section>
      <section class="row row-8-4">
        <div>
        <vParagraph>
            <div>
                I am a geographer and full time author specialising in children’s non fiction. <a href="http://www.ahlbackagency.com/author/laura-ertimo/">Elina Ahlbeck Literary Agency</a> represents my work outside Finland.
            </div>
            <div>
                Feel free to contact the <a href="http://www.ahlbackagency.com/author/laura-ertimo/">agency</a> for more information and reading material:
            </div>
        </vParagraph>
        <vParagraph>
            <h2>News</h2>
            <p>Weather activity book will be published in the beginning of 2021! And there’s next book in the making too.</p>
        </vParagraph>
        <vParagraph>
        <h2>Sold Foreign rights</h2>
            <ul>
              <vForeignItem v-for="right in rights" :cover="right.cover" :title="right.title" :orig="right.orig" :rights="right.rights" :key="right.title"/> 
          </ul>
        </vParagraph>
        </div>
      <vImage :image="Laura" class="first-on-mobile"/>
    </section>
  </vPage>
</template>

<script>
  import Vue from 'vue';
  import Laura from '@/assets/author/LauraPortrait.jpg';
  import VesiImage from '@/assets/vesi/kansi.jpg';
  import YoImage from '@/assets/yo/kansi.jpg';
  import IhmeIlmatImage from '@/assets/ihmeilmat/ihme-ilmat-miksi-ilmasto-muuttuu.jpg';
  import LumottuImage from '@/assets/lumotunmaankartasto/lumotun-maan-kartasto.jpg';
  import PikkuTietoMissaImage from '@/assets/missa-sina-olet.jpg';
  import ForeignItem from '@/components/book/RightBookItem';


  /*import Facebook from '@/components/Facebook';
  import Instrram from '@/components/Instagram';
  Vue.component("facebook", Facebook);
  Vue.component("instagram", Instrram);*/

  Vue.component("vForeignItem", ForeignItem);

  const rights = [
    {
      cover: IhmeIlmatImage,
      title:"Weird Weather!",
      orig:"Ihme ilmat! 2019",
      rights: [
        "FINLAND: Into Kustannus (orig.)",
        "ESTONIA: Avita",
        "HUNGARY: Ciceró Könyvstúdió",
        "ITALY: Mondadori/Edizioni Piemme",
        "LITHUANIA: Obuolys",
        "MEXICO: (Latin American Spanish rights): Ordinal Books",
        "NORWAY: Aschehoug",
        "POLAND: Amber",
        "SERBIA: Odiseja",
        "SLOVAKIA: Ikar",
        "SPAIN: Astronave",
        "SWEDEN: Rabén & Sjögren",
        "TURKEY: Kolektif",
        "UNITED STATES (North America) Skyhorse Publishing/Sky Pony Press"
      ]
    },
    {
      cover: PikkuTietoMissaImage,
      title:"Where are you?",
      orig:"Missä sinä olet? 2020",
      rights: [
        "FINLAND: Minerva (orig.)",
        "ESTONIA: Avita",
        "GREECE: Klidarithmos",
        "TURKEY: Yapi Kredi Publishing",
      ]
    },
    {
      title:"Invisible World",
      orig:"Mennään piiloon! 2021",
      rights: [
        "FINLAND: Karisto (orig.)",
        "TURKEY: Yapi Kredi Publishing",
      ]
    },
    {
      cover: LumottuImage,
      title:"Enchanted Planet Earth",
      orig:"Lumotun Maan kartasto 2020",
      rights: [
        "FINLAND: Kustantamo S&S (orig.)",
        "RUSSIA: AST",
      ]
    },
    {
      cover: VesiImage,
      title:"What is Water?",
      orig:"Vesi - kirja maailman tärkeimmästä aineesta 1997",
      rights: [
        "FINLAND, Myllylahti (orig.)",
        "RUSSIA, KompasGuide",
      ]
    },
        {
      cover: YoImage,
      title:"What is the night?",
      orig:"Yö - kirja unesta ja pimeän salaisuuksista 1996",
      rights: [
        "FINLAND, Myllylahti (orig.)",
        "CHINA, CITIC Press",  
        "RUSSIA, KompasGuide"
      ]
    }
  ];

  export default {
    name: 'Author',
    data() {
      return {
        Laura,
        rights
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-item {
    margin: calc(var(--spacing-unit) * 8) 0;
    display: grid;
    gap: 12px;
    grid-template-columns: 70px 1fr;
    
    &__sold {
      grid-column: 1 / span 2;
    }
  }
  .rights-sold::before {
    content: '\2767';
    color: var(--color-blue);
    padding-right: 0.2em;
  }

</style>

<template>
  <vPage>
    <section>
        <div class="re-content-block__paragraph re-content-block__paragraph--center">
          <h2 class="ingress ingress--center">Non-fiction for children and the whole family</h2>
        </div>
      </section>
      <section class="row row-8-4">
        <div>
        <vParagraph noMarginTop="true">
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
              <vForeignItem v-for="right in rights" :cover="right.cover" :title="right.title" :link="right.link" :orig="right.orig" :rights="right.rights" :key="right.title"/> 
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
  import ForeignItem from '@/components/book/ForeignBookItem';

  Vue.component("vForeignItem", ForeignItem);

  const rights = [
    {
      cover: IhmeIlmatImage,
      title:"Weird Weather!",
      orig:"Ihme ilmat! 2019",
      link:"http://www.ahlbackagency.com/book/weird-weather-why-does-climate-change/",
      rights: [
        { 
          label:"FINLAND: Into Kustannus (orig.)",
          link: "https://kauppa.intokustannus.fi/kirja/ihme-ilmat-miksi-ilmasto-muuttuu/"
        },
        {
          label: "ESTONIA: Avita",
          link: "https://www.avita.ee/32413"
        },
        {
          label: "HUNGARY: Ciceró Könyvstúdió",
          link: "http://www.cicerokonyvstudio.hu/?Konyv=Micsoda_ido!"
        },
        {
          label: "ITALY: Mondadori/Edizioni Piemme",
          link: "https://www.battelloavapore.it/libri/cose-successo-al-clima-i-cambiamenti-del-nostro-pianeta-spiegati-ai-bambini"
        },
        {
          label: "LITHUANIA: Obuolys",
          link: "https://obuolys.lt/produktas/isproteje-orai/"
        },
        {
          label: "MEXICO: (Latin American Spanish rights): Ordinal Books",
          link: ""
        },
        {
          label: "NORWAY: Aschehoug",
          link: "https://aschehoug.no/hva-skjer-med-vaeret"
        },
        {
          label: "POLAND: Amber",
          link: ""
        },
        {
          label: "SERBIA: Odiseja",
          link: "https://odiseja.co.rs/knjige/knjige-za-decu/knjiga-cudno-vreme-zasto-se-klima-menja-autor-laura-ertimo-1170"
        },
        {
          label: "SLOVAKIA: Ikar",
          link: ""
        },
        {
          label: "SPAIN: Astronave",
          link: "https://www.editorialastronave.com/item/es/437-que-clima-tan-raro/"
        },
        {
          label: "SWEDEN: Rabén & Sjögren",
          link: "http://www.rabensjogren.se/bocker/193648-virrigt-vader"
        },
        {
          label: "TURKEY: Kolektif",
          link: ""
        },
        {
          label: "UNITED STATES (North America) Skyhorse Publishing/Sky Pony Press",
          link: "https://www.skyhorsepublishing.com/sky-pony-press/9781510763623/why-does-climate-change/"
        }
      ]
    },
    {
      cover: PikkuTietoMissaImage,
      link:"http://www.ahlbackagency.com/book/mini-science-where-are-you/",
      title:"Where are you?",
      orig:"Missä sinä olet? 2020",
      rights: [
        {
          label: "FINLAND: Minerva (orig.)",
          link: "https://www.minervakustannus.fi/kirjat/kirja.php?kirja=1618"
        },
        {
          label: "ESTONIA: Avita",
          link: "https://www.avita.ee/33461"
        },
        {
          label: "GREECE: Klidarithmos",
          link: ""
        },
        {
          label: "TURKEY: Yapi Kredi Publishing",
          link: ""
        }
      ]
    },
    {
      title:"Invisible World",
      orig:"Mennään piiloon! 2021",
      link:"http://www.ahlbackagency.com/book/mini-science-invisible-world/",
      rights: [
        {
          label: "FINLAND: Karisto (orig.)"
        },
        {
          label: "TURKEY: Yapi Kredi Publishing"
        }
      ]
    },
    {
      cover: LumottuImage,
      title:"Enchanted Planet Earth",
      link: "http://www.ahlbackagency.com/book/the-enchanted-planet-earth/",
      orig:"Lumotun Maan kartasto 2020",
      rights: [
        {
          label: "FINLAND: Kustantamo S&S (orig.)"
        },
        {
          label: "RUSSIA: AST"
        }
      ]
    },
    {
      cover: VesiImage,
      title:"What is Water?",
      link: "http://www.ahlbackagency.com/book/what-is-water/",
      orig:"Vesi - kirja maailman tärkeimmästä aineesta 1997",
      rights: [
        {
          label: "FINLAND, Myllylahti (orig.)",
        },
        {
          label: "RUSSIA, KompasGuide",
          link: 'https://www.kompasgid.ru/ru/knigi/voda-kniga-o-samom-vazhnom-veshchestve-v-mire'
        }
      ]
    },
        {
      cover: YoImage,
      title:"What is the night?",
      link: "http://www.ahlbackagency.com/book/what-is-the-night/",
      orig:"Yö - kirja unesta ja pimeän salaisuuksista 1996",
      rights: [
        {
          label: "FINLAND, Myllylahti (orig.)"
        },
        {
          label:  "CHINA, CITIC Press"
        },
        {
          label:  "RUSSIA, KompasGuide"
        }
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

</style>

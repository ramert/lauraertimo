<template>
  <vPage>
      <section class="foreign row row-3-9">
        <vImage :image="Laura" class="first-on-mobile"/>
        <div>
            <vParagraph>
            <h2 class="h3">Non-fiction for children and the whole family</h2>
            </vParagraph>
            <vParagraph>
                I am a geographer and full-time author with special interest in children’s nonfiction. 
                For me children’s nonfiction books are not so much about education as they are a way to explore the world from a children's viewpoint. 
                I wish to share moments of understanding whether it is about mechanics of climate change or wonders of the deep sea. 
                My books are written for the whole family and at their best read together.
            </vParagraph>
            <vParagraph>
              <a href="http://www.ahlbackagency.com/author/laura-ertimo/">Elina Ahlback Literary Agency</a> represents my work outside Finland. Feel free to contact the agency for more information and reading material!
            </vParagraph>
        </div>
      </section>

    <vNews :newsData="news" color="brown" bookPage="true" /> 
    <vParagraph noMargin="true">
      <h2>Sold Foreign rights</h2>
      <ul>
          <vForeignItem v-for="right in rights" :cover="right.cover" :title="right.title" :link="right.link" :orig="right.orig" :rights="right.rights" :key="right.title"/> 
      </ul>
    </vParagraph>
  </vPage>
</template>

<script>
  import Vue from 'vue';
  import Laura from '@/assets/foreign/Laura-foreign.jpg';
  import VesiImage from '@/assets/vesi/kansi.jpg';
  import YoImage from '@/assets/yo/kansi.jpg';
  import IhmeIlmatImage from '@/assets/ihmeilmat/ihme-ilmat-miksi-ilmasto-muuttuu.jpg';
  import LumottuImage from '@/assets/lumotunmaankartasto/lumotun-maan-kartasto.jpg';
  import PikkuTietoMissaImage from '@/assets/missa-sina-olet.jpg';
  import ForeignItem from '@/components/book/ForeignBookItem';

  Vue.component("vForeignItem", ForeignItem);

  const news = [
    {
        category: 'New book',
        title: "Weird Weather Activity book",
        text: "Weird Weather activity book will be published in the beginning of 2021! And there's the next book in the making too… Stay tuned for more information",
    },
    {
        category: 'New Territory',
        title: "Weird Weather travels across the Atlantic",
        text: "Weird Weather will be published in the United States on Earth Day 2021. North American rights were acquired by Sky Pony Press, a children’s imprint of Skyhorse Publishing.",
        link: "http://www.ahlbackagency.com/2020/04/weird-weather-will-be-published-in-the-united-states-on-earth-day-2021/"
    },
    {
        category: 'In Media',
        title: "Weird Weather in Spain",
        text: "¡Qué clima tan raro!” el libro ilustrado de Laura Ertimo y Mari Ahokoivu que ayuda a entender y combatir el cambio climático por fin se publica en España.",
        link: "https://vandal.elespanol.com/saladepeligro/5627/que-clima-tan-raro-el-libro-ilustrado-de-laura-ertimo-y-mari-ahokoivu-que-ayuda-a-entender-y-combatir-el-cambio-climatico-por-fin-se-publica-en-espana/"
    },
    {
        category: 'New book',
        title: "Mini Science and Plop explores invisible world",
        text: "Mini Science series continues with a new title “Invisible world” in January 2021.",
        link: "http://www.ahlbackagency.com/book/mini-science-invisible-world/"
    }
  ];

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
        news,
        rights
      }
    }
  }
</script>

<style lang="scss" scoped>
  .foreign {
    background: var(--color-light-brown);
  }
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

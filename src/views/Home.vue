<template>  
    <div class="home">
      <div class="hero"> 
        <h1 class="hero__title">
            <span>Laura Ertimo</span>
            <span class="hero__subtitle">Tietokirjailija ja maantieteilijä</span>
        </h1>
        <span class="hero__text">
          Kirjallisia matkoja ympäröivään maailmaan ja saavuttamattomiin todellisuuksiin
        </span>
        <vImage :image="Laura" alt="Laura Ertimo" isHero="true"/>
      </div>
      <vNaviBar/> 
      <div class="navi-spacing">
        <vNews :newsData="news" />  
      </div>
      <vFooter />
    </div>
</template>

<script>
import Vue from "vue";
import Navibar from "@/components/Navibar";
import News from "@/components/News";
import Laura from '@/assets/Laura-home.jpg';

Vue.component("vNaviBar", Navibar);
Vue.component('vNews', News);

const news = [  
   {
        category: 'Kirjat',
        title: 'Mikä Mahti!',
        text: 'Mikä Mahti! - Lotta ja Kasper luonnon puolella jatkaa ihmisen ja ympäristön suhdetta käsittelevää kirjasarjaa. Nyt pureudutaan vallankäytön kiemuroihin niin koulussa, metsässä kuin maailmallakin.',
        link: '/books#mikaMahti'
    },
       {
        category: 'Kirjat',
        title: 'Tietopalat: Kaikenkirjavat linnut',
        text: 'Kaikenkirjavat linnut on Laura Ertimon kirjoittama ja Kaisu Sandbergin kuvittama helppolukuinen ja jännä tietokirja lintujen värikkäästä maailmasta.',
        link: '/books#linnut'
    },
    {
        category: 'Mediassa',
        title: 'Luontokato, ylikulutus ja lastentietokirjallisuus puhututtavat.',
        text: 'Kurkkaa mediassa-linkistä viime aikojen haastatteluja ja keskusteluja, joihin olen osallistunut. Muun muassa Taideyliopiston ylikulutuskeskustelu ja Aamu-tv-vierailuni löytyvät tallenteina eri nettilähteistä.', 
        link: "/media"
    },
    {
        category: 'Vierailut',
        title: 'Teen kirjailijavierailuja ja ohjaan työpajoja kouluissa ja tapahtumissa.',
        text: 'Lumotun Maan kartastoon perustuva Lumotun paikan kartta on hauska kaikenikäisille sopiva työpaja, joka kannustaa pohtimaan lähiympäristöä sana- ja kuvataiteen keinoin. Kouluille suunnattu tietokirjoittamisen työpaja on kaksiosainen Lukukeskuksen kautta tilattava kokonaisuus.', 
        link: "/author"
    },
    {
        category: 'Palkinto',
        title: 'Tieto-Lauri-palkinto Laura Ertimolle ja Mari Ahokoivulle.',
        text: '"Laura Ertimon ja Mari Ahokoivun kirja Aika matka! Lotta, Kasper ja luontokadon arvoitus (Into Kustannus) on kerronnaltaan lempeä ja tietopohjaltaan järkälemäinen teos luonnon monimuotoisuuden merkityksestä ja pelastamisesta."', 
        link: "https://www.laurijantinsaatio.fi/palkitut/tieto-lauri-palkinto-laura-ertimolle-ja-mari-ahokoivulle"
    },
 /*   {
        category: 'Mediassa',
        title: 'Teatteri Ilmi Ö. ja tietokirjailija Ihme ilmat -kiertueella',
        text: '"Vaati monen monta puoli-improvisoitua kierrosta ja simultaani-käsikirjoittamista, jotta Ihme ilmat -kirjan sisällöstä kuoriutuivat esiin ilmastonmuutoksen kokonaisuutta kuvaavat Ihme ilmat -kohtaukset."  Lue Lauran raportti tietokirjan teatterillistamisesta ja lavakokemuksista Assitej lasten- ja nuortenteatterijärjestön jäsenlehdestä sivulta 8. ',
        link: 'http://files.yg.fi/f6/71/f6716327-c5b0-42d3-a46a-ed8afde2e221.pdf'
    },
   {
        category: 'Kirjat',
        title: 'Mikä on robotti WSOY:n Tietopalat-sarjassa',
        text: 'Mitä robotit oikein ovat ja mitä kaikkea ne pystyvät tekemään? Hauskasti kuvitetussa Tietopalat-kirjassa kaverukset Ro ja Botti pohtivat, missä kaikkialla robotteihin voi törmätä nyt ja tulevaisuudessa.',
        link: '/books'
    },
    {    
        category: 'Ehdokkuus',
        title: 'Aika matka! Finlandia-palkintoehdokkaana',
        text: 'Laura Ertimon ja Mari Ahokoivun Aika matka! Lotta, Kasper ja luontokadon arvoitus oli ehdolla 2021 Lasten- ja nuortenkirjallisuuden Finlandia-palkinnon saajaksi. "Kokonaisuus on eloisa runsaudensarvi, joka houkuttelee tutkimaan, palaamaan ja vaikuttamaan."',
        link: 'https://kirjasaatio.fi/finlandia/lasten-ja-nuortenkirjallisuuden-finlandia'
    },
    {
        category: 'Palkinto',
        title: 'Tietopöllö-palkinto 2020',
        text: "Laura Ertimon kirjat avaavat polkuja tärkeiden ja ajankohtaisten aiheiden äärelle. Suomen tietokirjailijoiden yhdistys myönsi Lauralle vuoden 2020 Tietopöllö-palkinnon.",
        link: 'https://www.suomentietokirjailijat.fi/ajankohtaista/vuoden-2020-tietopollo-palkinto-laura-ertimolle.html'
    } */
]

export default {
  name: "Home",
  data() {
    return {
      Laura,
      news
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  width: 100%;
  margin: 0 auto;
}

.hero {
  position: relative;
  max-height: calc(100vh - 200px);
  min-height: 320px;
  overflow: hidden;
  background: var(--color-lightblue);
  max-width: 100%;

  &__title {
    position: absolute;
    color: white;
    top: 10%;
    right: 5%;
    width: 50%;
    text-align: right;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    font-weight: 600;

    @media screen and (min-width: 640px) {
      top: 10%;
      width: 60%;
      font-size: 1.8rem;
    }

    @media screen and (min-width: 1024px) {
      top: 15%;
      font-size: 2.5rem;
    }
  }
  &__subtitle {
    font-size: 1.2rem;
    font-weight: 400;

    @media screen and (min-width: 640px) {
      font-size: 1.5rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1.75rem;
    }
  }


  &__text {
    font-family: var(--font-family);
    font-size: 1.1rem;
    font-weight: 600;
    text-align: right;
    position: absolute;
    width: 50%;
    transform: translateY(-50%);
    color: white;
    right: 5%;
    top: 75%;

    @media screen and (min-width: 640px) {
      width: 45%;
      top: 70%;
      font-size: 1.3rem;
    }

    @media screen and (min-width: 1024px) {
      width: 45%;
      top: 70%;
      font-size: 1.6rem;
    }
  }
}

.navi-spacing {
    margin: calc(10 * var(--spacing-unit)) 5vw;
    @media screen and (min-width: 640px) {
        margin: 0 calc(6 * var(--spacing-unit));
        padding: 0 calc(16.5vw - 110px);
    }

    @media screen and (min-width: 1400px) {
        padding-left: 160px;
    }
}
</style>

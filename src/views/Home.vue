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
        category: 'Palkinto',
        title: 'Tietopöllö-palkinto 2020',
        text: "Laura Ertimon kirjat avaavat polkuja tärkeiden ja ajankohtaisten aiheiden äärelle. Suomen tietokirjailijoiden yhdistys myönsi Lauralle vuoden 2020 Tietopöllö-palkinnon.",
        link: 'https://www.suomentietokirjailijat.fi/ajankohtaista/vuoden-2020-tietopollo-palkinto-laura-ertimolle.html'
    },
    {
        category: 'Kirjat',
        title: "Lumotun Maan kartasto",
        text: "Kymmenen lumoavaa tositarinaa ja kymmenen satumaista karttaa.",
        link: "/lumotunMaanKartasto"
    },
    {
        category: 'Mediassa',
        title: "Sirpaletiedon ajassa kirja on anarkistinen esine",
        text: "Lue haastatteluni Sanan arvo -sarjassa.",
        link: "https://www.sanasto.fi/sanan-arvo-sirpaletiedon-ajassa-kirja-on-anarkistinen-esine/"
    },
    {
        category: 'Uutta',
        title: "Yhteistyötä Teatteri Ilmi Ö:n kanssa",
        text: "Teatteri Ilmi Ö tarttuu haasteeseen ja luo tietokirjan pohjalta osallistavan esityksen koululaisille. Laura on mukana sekä esityksen rakentamisessa että lavalla.",
        link: "https://www.teatteri-ilmio.fi/nosto/ihme-ilmat-forumteatteriesitys-2/"
    },
    {
        category: 'Mediassa',
        title: "Lumotun maan kartastossa Irvikissa törmää galaksiin",
        text: "Kai Vaijärvi esittelee ja arvioi laajasti tuotantoani Lastenkulttuurin vinkkarissa.",
        link: "http://karivaijarvi.blogspot.com/2020/09/lumotun-maan-kartastossa-irvikissa.html"
    }
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
    margin: 5vw;
    @media screen and (min-width: 640px) {
        margin: 0 calc(6 * var(--spacing-unit));
        padding: 0 calc(16.5vw - 110px);
    }

    @media screen and (min-width: 1400px) {
        padding-left: 160px;
    }
}
</style>

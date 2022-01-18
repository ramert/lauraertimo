<template>
  <vPage>
    <vNews :newsData="content" color="blue" bookPage="true" /> 
  </vPage>
</template>

<script>
const content = [
  {
        category: 'Kirja-arvostelu',
        title: 'Miten kertoa lapsille luonnon tuhosta? ',
        text: '"Laura Ertimon ja Mari Ahokoivun kirja vastaa vaikeaan kysymykseen erinomaisesti (...) Edeltäjänsä tavoin Aika matka! on onnistunut valitsemaan oikeat esimerkit, jotka sopivat monenikäisille lukijoille."',
        link: 'https://www.hs.fi/kulttuuri/art-2000008430170.html'
    },
    {
        category: 'Mediassa',
        title: 'Teatteri Ilmi Ö. ja tietokirjailija Ihme ilmat -kiertueella',
        text: '"Vaati monen monta puoli-improvisoitua kierrosta ja simultaani-käsikirjoittamista, jotta Ihme ilmat -kirjan sisällöstä kuoriutuivat esiin ilmastonmuutoksen kokonaisuutta kuvaavat Ihme ilmat -kohtaukset."  Lue Lauran raportti tietokirjan teatterillistamisesta ja lavakokemuksista Assitej lasten- ja nuortenteatterijärjestön jäsenlehdestä sivulta 8. ',
        link: 'http://files.yg.fi/f6/71/f6716327-c5b0-42d3-a46a-ed8afde2e221.pdf'
    },
    {    
        category: 'Ehdokkuus',
        title: 'Aika matka! Finlandia-palkintoehdokkaana',
        text: 'Laura Ertimon ja Mari Ahokoivun Aika matka! Lotta, Kasper ja luontokadon arvoitus on ehdolla Lasten- ja nuortenkirjallisuuden Finlandia-palkinnon saajaksi. "Kokonaisuus on eloisa runsaudensarvi, joka houkuttelee tutkimaan, palaamaan ja vaikuttamaan."',
        link: 'https://kirjasaatio.fi/finlandia/lasten-ja-nuortenkirjallisuuden-finlandia'
   },
    {
        category: 'Haastattelu',
        title: "Sirpaletiedon ajassa kirja on anarkistinen esine",
        text: "Lue haastatteluni Sanan arvo -sarjassa.",
        link: "https://www.sanasto.fi/sanan-arvo-sirpaletiedon-ajassa-kirja-on-anarkistinen-esine/"
    },
    {
        category: 'Palkinto',
        title: "Ihme ilmat on mielestäni edelleen yksi käyttökelpoisimmista ja todella monen ikäisille lapsille ja nuorille sopiva perusteos ilmastonmuutoksesta." ,
        text: "Päivi Heikkilä-Halttunen onnittelee Tietopöllö-palkinnosta Lastenkirjahyllyssä.",
        link: "https://lastenkirjahylly.blogspot.com/2020/12/tietopollo-palkinto-laura-ertimolle.html"
    },
       {
        category: 'Palkinto',
        title: 'Tietopöllö-palkinto 2020',
        text: "Laura Ertimon kirjat avaavat polkuja tärkeiden ja ajankohtaisten aiheiden äärelle. Suomen tietokirjailijoiden yhdistys myönsi Lauralle vuoden 2020 Tietopöllö-palkinnon.",
        link: '/tietopollo'
    },
    {
        category: 'Joulukalenteri',
        title: "Kukapa ei toivoisi valkoista joulua.",
        text: "Lue Lauran Lumi-tarina Lastenkirjainstituutin joulukalenterin luukusta 7.",
        link: "https://lukemo.fi/joulukalenteri-2020-luukku-7/"
    },
    {
        category: 'Blogi',
        title: "Lumotun maan kartastossa Irvikissa törmää galaksiin",
        text: "Kai Vaijärvi esittelee ja arvioi laajasti tuotantoani Lastenkulttuurin vinkkarissa.",
        link: "http://karivaijarvi.blogspot.com/2020/09/lumotun-maan-kartastossa-irvikissa.html"
    },
    {
        category: 'Yhteystietoja',
        title: "Kirjailijasivut sosiaalisessa mediassa",
        text: "Löydät ajankohtaisia asioita ja kirja-arvosteluja Facebook-sivultani ja kuvitettuja hetkiä kirjailija-arjesta Instagramista. Some-tilien kautta saat minuun suoran yhteyden.",
        link: [
          {
            name: 'Facebook',
            link: "https://www.facebook.com/lauraertimokirjailija"
          },
          {
            name: "Instagram",
            link: "https://www.instagram.com/lauraertimo/"
          }
        ]
    },
];
export default {
  name: 'Media',
  data() {
    return {
      content
    }
  }
}
</script>

<style lang="scss" scoped>
.author {
  margin-top: calc(4* var(--spacing-unit));
  background: var(--color-light-brown);
}
.some-list-element {
  display: grid;
  grid-template-columns: 50px 2fr;
  gap: var(--spacing-unit);
}
</style>



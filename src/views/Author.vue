<template>
 <vPage>
    <section class="author row row-3-9">
        <vImage :image="Laura" class="first-on-mobile" alt="Laura Ertimo"/>
        <div>
            <vParagraph>
              Lasten tietokirjallisuudessa on kyse tulevaisuuden demokratiasta.<br/>
              Olen erityisesti lapsille ja koko perheelle tietokirjaileva maantieteilijä. 
              Kuljen lukijan rinnalla kohti luonnonilmiöitä ja maailman ihmeellistä monimuotoisuutta. 
              Innostun nuorten mielien notkeudesta ja halusta kohdella ympäröivää luontoa tasavertaisena kumppanina.<br/>
              Kirjojeni ytimessä on ajatus lapsista ja nuorista tiedolle avoimina olentoina, joilla on tarve rakentaa kokonaista maailmankuvaa. Kirjani tarjoavat näkymiä ja haastavat ajattelemaan, hankkimaan lisää tietoa. 
            </vParagraph>
            <vParagraph> 
              Työskentelen useiden suomalaisten kuvittajien kanssa. 
              Kirjoitusprosessini kulkee käsi kädessä kuvitustyön kanssa, 
              ja ajattelen kirjojani yhteistyön synnyttäminä kokonaisteoksina. 
              Tutustu kirjoihini lähemmin 
              <router-link to="/books" tag="a">KIRJAT-osiossa</router-link>,
              josta löytyy myös linkkejä arvioihin ja kustantajien kirjasivuille.
            </vParagraph>
        </div>
    </section>
    <vNews :newsData="news" color="brown" bookPage="true" /> 
  </vPage>
</template>

<script>
import Vue from 'vue';
import Laura from '@/assets/author/LauraPortrait.jpg';

const news = [
    {
        category: 'Vierailut',
        title: "Kirjailijavierailut Lukukeskuksen kautta",
        text: "Kirjoitustyön ohella teen kirjailijavierailuja. Vierailuni suuntautuvat kouluille ja kirja-alan tapahtumiin. Myös virtuaalivierailun ovat mahdollisia.",
        link: "https://kirjailijavierailut.lukukeskus.fi/kirjailijat/ertimo-laura/"
    },
    {
        category: 'Mediassa',
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
    {
        category: 'Yhteydenotot',
        title: "Arvostelukappaleita ja lisätietoja kustantamoiden kautta",
        text: "On upeaa kuulla lukijoiden kommentteja, kirjabloggaajien tunnelmia ja kirja-arvosteluja. Ota näissä asioissa yhteyttä kustantajaan. Uusimpien kirjojeni kustantajia ovat:",
        link: [
          {
            name: "Into Kustannus",
            link: "https://kauppa.intokustannus.fi/yhteystiedot/"
          },
          {
            name: "Kustantamo S&S",
            link: "https://kustantamo.sets.fi/media/"
          },
         {
            name: "Oppimateriaalikeskus Opike",
            link: "https://opike.fi/"
          }
        ]
    },
    {
        category: 'Yhteistyötä',
        title: "Lasten tietokirjat saavat kansainvälistä huomiota",
        text: "Elina Ahlbäck Literary Agency edustaa kirjojani kansainvälisillä kirjamarkkinoilla. Agentuuri hoitaa myös esitysoikeuksiin liittyvät asiat.",
        link: "https://www.ahlbackagency.com/contact-us/"
    },
    {
        category: 'Yhteistyötä',
        title: "Työskentelen tiiviissä yhteistyössä kuvittajien kanssa",
        text: "Kumppaneitani kuvitettujen tietokirjojen maailmassa ovat:",
        link: [
          {
            name: "Mari Ahokoivu",
            link: "https://mariahokoivu.com/"
          },
          {
            name: "Satu Kontinen",
            link: "http://www.satukala.com/"
          },
          {
            name: "Sanna Pelliccioni",
            link: "https://www.illustratorsannapelliccioni.com/"
          },
          {
            name: "Sole Lätti",
            link: "https://www.tiedekuvitus.fi/"
          }
        ]
    }
];
export default {
  name: 'Author',
  data() {
    return {
      Laura,
      news
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



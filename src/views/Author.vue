<template>
  <div>
    <section class="author row row-8-4">
        <div>
                  <vParagraph>
              Olen tietokirjaileva maantieteilijä.
              Kirjoitan maailmasta ja luonnon ja ihmisen ajoittain hankalasta suhteesta. 
              Tavoitteenani on kirjoittaa kirjoja, joita koko perhe lukee yhdessä. 
              Työskentelen tiiviisti yhteistyössä useiden suomalaisten kuvittajien kanssa. 
              Kirjoitusprosessini kulkee käsi kädessä kuvitustyön kanssa, 
              ja ajattelen kirjojani yhteistyön synnyttäminä kokonaisteoksina. 
              Tutustu kirjoihini lähemmin KIRJAT-osiossa, 
              josta löytyy myös linkkejä arvioihin ja kustantajien kirjasivuille.<br/>

        </vParagraph>
        <vParagraph> 
          Työskentelen täysiaikaisesti kirjailijana. Kirjoitustyön ohella teen kirjailijavierailuja. Vierailuni suuntautuvat kouluille ja kirja-alan tapahtumiin. Myös virtuaalivierailun ovat mahdollisia.
        </vParagraph>
        <vParagraph>
        <h3>Yhteydenotot kustantamon tai sosiaalisen median kautta</h3>
            <ul>
              <div>
                Kirjailijavierailut <a href="https://kirjailijavierailut.lukukeskus.fi/kirjailijat/ertimo-laura/"> Lukukeskuksen</a> kautta
              </div>
               <li>
                <!--<a class="some-list-element" href="https://www.facebook.com/lauraertimokirjailija">
                  <facebook /> <div>Facebook Laura Ertimo</div>
                </a>-->
                <a href="https://www.facebook.com/lauraertimokirjailija" >
                  Facebook
                </a>
              </li>
              <li>
                <!--<a class="some-list-element" href="https://www.instagram.com/lauraertimo/" >
                  <instagram /> <div>Instagram Laura Ertimo</div>
                </a>-->
                <a href="https://www.instagram.com/lauraertimo/" >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://kauppa.intokustannus.fi/yhteystiedot/">Into Kustannus </a>
              </li>
              <li>
                <a href="https://kustantamo.sets.fi/media/">Kustantamo S&S </a>
              </li>
              <li>
                <a href="https://opike.fi/">Oppimateriaalikeskus Opike </a>
              </li>
            </ul>
          <a href="https://www.ahlbackagency.com/contact-us/">Elina Ahlbäck Literary Agency</a> edustaa kirjani kansainvälisillä markkinoilla. Agentuuri hoitaa myös esitysoikeuksiin liittyvät asiat.
          
        </vParagraph>
          <vParagraph>
            <h3>Kumppaneitani kuvitettujen tietokirjojen maailmassa</h3>
            <ul>
              <li>
                <a href="https://mariahokoivu.com/" >Mari Ahokoivu </a>
              </li>
              <li>
                <a href="http://www.satukala.com/" >Satu Kontinen</a>
              </li>
              <li>
                <a href="https://www.illustratorsannapelliccioni.com/">Sanna Pelliccioni </a>
              </li>
              <li>
                <a href="https://www.tiedekuvitus.fi/">Sole Lätti  </a>
              </li>
            </ul>
        </vParagraph>
      </div>
      <vImage :image="Laura" class="first-on-mobile"/>
      </section>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Laura from '@/assets/author/LauraPortrait.jpg';
  import Facebook from '@/components/Facebook';
  import Instrram from '@/components/Instagram';
  Vue.component("facebook", Facebook);
  Vue.component("instagram", Instrram);


  export default {
    name: 'Author',
    data() {
      return {
        Laura
      }
    }
  }
</script>

<style lang="scss" scoped>
.author {
  margin-top: calc(4* var(--spacing-unit));
}
.some-list-element {
  display: grid;
  grid-template-columns: 50px 2fr;
  gap: var(--spacing-unit);
}
</style>



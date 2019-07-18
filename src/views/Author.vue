<template>
    <div class="re-page re-content-block">
      <section class="row-6-6" id="miksi">
       <div class="re-content-block__paragraph">
          <p class="ingress">Anna jokin aihe, niin kurkistan sitä kaleidoskoopin läpi ja vastaus voi yllättää. Siinä missä monien asiantuntijoiden on helppo
syventyä yhden kokonaisuuden syövereihin, minun mieleni tekee kääntää aihetta kuin aihetta ja vähän ravistaa, jos eteen tulisi
vielä jotain uutta. Viime aikoina olen ollut onnekas, kun olen saanut sovitella nenälleni niin yökiikareita kuin
sukellusmaskiakin.</p>
      </div>
          
        <vImage :image="Laura" />
        </section>

        <!-- TODO: this could be done with ::before -->
        <div class="re-content-block__separator re-red"></div>

        <section>
          <vParagraph>
            Olen koulutukseltani maantietelijä, vaikka karsastin koulumaantietoa (siis muiden muassa niitä tuotantokarttoja, joissa
kerrotaan montako lammasta Uudessa-Seelannissa on). Yliopistolla valkeni, että maantiede antaa mahdollisuuden ajatella
kaikkea, mitä ympärillämme on. Sivuaineitakin saattoi ainakin kultaisella viime vuosituhannella keräillä mistä tahansa
tiedekunnasta.
          </vParagraph>
          <vParagraph>
            Lasten tietokirjojen pariin päädyin alunperin pyynnöstä. Sittemmin olen kirjoittanut pyytämättäkin. Työskentelyn
tietokirjallisuuden parissa ovat mahdollistaneet sekä mahtavat työtoverit - heistä erityisesti Satu Kontinen, joka löytyy jo
toisen kirjoittamani kirjan graafisen suunnittelijan jakkaralta ja on erottamaton osa Yötä ja Vettä - että mm. Suomen
Kulttuurirahasto, Suomen Tietokirjailijat ja Tiedonjulkistamisen neuvottelukunta sekä Taiteen edistämissäätiö.
          </vParagraph>
          <vParagraph>
            Olen myös kahden lapsen äiti. Lapsille voi kirjoittaa ilman lapsiakin, mutta omien lasten kanssa saa tuntuman siihen
riemastuttavaan avoimuuteen, jolla he ympäristöä tutkivat - ennen kuin aikuisuus kalkitsee ajattelun urat aivoissa. Lapset
ovat kyllä opettavaisinta, mitä aikuisuus on minulle tarjonnut. Pikkuisten perspektiivi lähiympäristöön (“Hei katso tuolla on
käpytikka / Etelä-Amerikan muotoinen pilvi / pikkukiviä / ISOJA KIVIÄ!”) ja mykistyttävä miksi-kysymysten määrä avaa
silmät ja kannustaa selvittämään asian kuin asian ytimen. Ajatus Yöstä syntyi, kun huomasin, kuinka yö (onko nyt yö?), pimeä
(siis se pelottava) ja nukkuminen (onko pakko? ja koska äiti saisi nukkua?) ovat jatkuvasti läsnä niin monen lapsiperheen elämässä. Minun tapani lähestyä ongelmaa on kerätä tietoa ja kirjoittaa se auki. Vahvemman ympäristönäkökulman Vesi taas
kumpusi halusta kiinnittää lasten huomio aineeseen, joka liian usein jää meiltä aikuisiltakin huomaamatta.
          </vParagraph>

          
        </section>

        <!-- TODO: this could be done with ::before -->
        <div class="re-content-block__separator re-red"></div>

        <section>
          <vParagraph>
            Toivon, että maailma muuttuisi lukemalla hieman ymmärrettävämmäksi. Parhaat lukuhetket lasten kanssa avaavat uusia
näkymiä sekä isolle että pienelle kirjan ääressä. Myös tietokirjoja - jos ne vain niin kirjoitetaan - on nautinto lukea ääneen!
          <h3 class="right">Laura Ertimo os. Niiranen</h3>
          </vParagraph>
          
        </section>
    </div>
</template>

<script>
  import Laura from '@/assets/author/Laura-small.jpg';

  export default {
    name: 'Author',
    data() {
      return {
        Laura,
      }
    }
  }
</script>



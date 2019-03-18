<template>
  <div class="container-fluid re-page re-page--black">
    <section class="row re-content-block">
      <div class="col-sm-8 re-content-block__paragraph">
        <p class="re-quote">Yö on yksi vuoden 2016
          <a href="http://www.kauneimmatkirjat.fi/lapsetjanuoret/">kauneimmista kirjoista!</a>
        </p>
        <br>
        <p class="re-quote">Yö on mukana Oulusta alkavassa ja Suomea kiertämään lähtevässä
          <a href="http://www.unikudelmia.fi/">Unikudelmia-näyttelyssä</a>. Unikudelmia on näyttely suomalaisen kirjallisuuden unista ja unelmista.
        </p>
      </div>
      <div class="col-sm-4 re-content-block__image">
        <img :src="EsittelyImage">
      </div>

      <blockquote class="col-sm-12 re-content-block__block-quote">
        <q>
          Yö on suoraan sanottuna niin kiehtova ja upea kirja,
          että sitä lukiessa vaipuu miltei liikutuksen tilaan.
          Että tällaisiakin tehdään: taiteellisesti korkeatasoisia kotimaisia
          ihan koko perheelle sopivia kirjoja.
        </q>
        <a
          class="re-content-block__qouter"
          href="http://luminenomena.blogspot.fi/2016/04/laura-ertimo-ja-satu-kontinen-yo-kirja.html"
        >
          <small>Lumiomena</small>
        </a>
      </blockquote>
    </section>

    <section class="row re-content-block" id="mikayo">
      <div class="col-sm-12 re-content-block__separator"></div>
      <div class="col-sm-4 re-content-block__image">
        <img :src="SisallysImage">
      </div>
      <div class="col-sm-8 re-content-block__paragraph">
        <h2>Sisällys</h2>
        <p>Yössä on viisi lukua ja 47 yhden aukeaman tositarinaa.</p>
        <ol>
          <li>
            Ensin selvitetään, mistä yö johtuu ja kurkistetaan öisen
            taivaan ilmiöihin: mitä kujeita Kuulla on, mikä on iltatähden
            valhe ja kuinka Pohjantähti löytyy.
          </li>
          <li>
            Pimeässä luonnossa ollaan erilaisten aistien varassa ja
            tutustutaan yöllä aktiivisten eläinten ja kasvien maailmaan.
          </li>
          <li>
            Nukkumista käsittelevässä luvussa pohditaan, miksi nukkuminen
            on hyvä juttu kaikille ja miten joillain eläimillä on kummallisia
            tapoja nukkua tosi paljon tai vain puolittain.
          </li>
          <li>
            Uni-luku porautuu edelleen auki olevaan kysymykseen siitä,
            mitä unet oikeastaan ovat (tiesitkö, että opossumit näkevät
            enemmän unia kuin ihmiset?).
          </li>
          <li>
            Lopuksi annetaan tilaa Uniajalle ja toivotetaan tosi monella
            tapaa hyvää yötä.
          </li>
        </ol>
        <p>
          Aiheet ja käsittelytavat vaihtelevat aukeamalta toiselle.
          Yö kannattaa ehdottomasti selailla kokonaisuutena läpi,
          sillä kuvitus virtaa läpi kirjan. Sen sijaan tarinat ovat aukeaman
          pituisia itsenäisiä kokonaisuuksia. Ääneen lukijalle on ehkä
          helpottava tieto, että kaikkia 128 sivua ei tarvitse lukea kerralla.
          Ehkäpä nuori lukija valitsee ensin luettavaksi kaikista kiinnostavimmat
          aiheet ja hairahtuu sitten tutustumaan johonkin ihan uuteen erikoisuuteen.
          Osa sivuista on luokiteltu painavammaksi asiaksi, ne ovat yöllisen
          muistikirjan sivuja, joissa kuvittajalla on ollut vähemmän vapauksia.
        </p>
        <p>
          <sup>
            .. ja jos kuvat herättävät kutsuvat kaivamaan puuvärit esiin,
            voi toki hankkia Yön värit -värityskirjan ja valaista värit näkyviin
            omin kätösin.
          </sup>
        </p>
      </div>
    </section>//
    <quotes :image="quotesImage" jsonUrl="/static/yoQuotes.json"></quotes>

    <section class="row re-content-block" id="miksiyo">
      <div class="col-sm-12 re-content-block__separator"></div>
      <div class="col-sm-8 re-content-block__paragraph">
        <h2>Miksi yö?</h2>
        <p class="re-quote">
          Me emme halunneet tehdä kirjaa erilailla –
          me halusimme tehdä kirjan omalla lailla. Ja erilainenhan siitä tuli,
          mutta poikkeavuus ei ole itsetarkoitus. Tässä kirjassa nivoutuvat
          yhteen työkokemuksemme kustannusalalta ja omat kokemukset vanhemmuudesta
          sekä tarjolla olevasta lastenkirjallisuudesta. Me halusimme selittää
          järkiperäisesti yöllisiä ilmiöitä, raottaa tähtitaivaan lumoa, ihmetellä
          luonnon moninaisia keinoja pimeillä poluilla ja pohtia unen merkitystä.
          Saako lapsille kirjoittaa sanan planetaarinen? Voiko lastenkirjojen
          värikylläiseen maailmaan maalata vain mustavalkoisia kiemuroita?
          Yössä kustantajamme antoi meille vapauden toteuttaa näkemystämme –
          ja nyt Yö saa jatkaa matkaansa lukijoiden käsissä.
        </p>
        <p>-Laura & Satu</p>
      </div>
      <div class="col-sm-4 re-content-block__image">
        <img :src="MiksiYoImage">
      </div>
    </section>

    <section class="row re-content-block" id="ostayo">
      <div class="col-sm-12 re-content-block__separator"></div>
      <div class="col-sm-12 re-content-block__paragraph">
        <h2>Yö-ostoksille</h2>
        <p>Yö on saatavilla kirjakaupoista kautta maan.</p>
        <p>
          Saat sen suoraan kotiin Myllylahden verkkokaupasta:
          <a
            class="btn btn-primary"
            href="http://www.myllylahti.fi/kirjat/uutuusteokset-kevaet-2016/yoe-kirja-unesta-ja-pimeaen-salaisuuksista-detail"
            target="_blank"
          >Osta Yö</a>
        </p>
      </div>
    </section>

    <div class="row re-footer">
      <div class="col-sm-12">
        <img :src="FooterImage">
      </div>
    </div>
    <global-footer></global-footer>
  </div>
</template>

<script>
import EsittelyImage from "@/assets/yo/kansi.png";
import FooterImage from "@/assets/yo/footer.png";
import MiksiYoImage from "@/assets/yo/miksiyo.png";
import SisallysImage from "@/assets/yo/sisallys.png";
import Hero from "@/assets/yo/yo-title.jpg";
import MobileHero from "@/assets/yo/yo-title-mobile.jpg";
import QuotesImage from "@/assets/yo/arvostelut.png";

export default {
  name: "yo",
  data() {
    /* this.$http.get('/assets/yoQuotes.json').then(response => {
        this.quotes = response.body.quotes;
      }, response => {
        this.quotes = undefined;
      }); */

    return {
      hero: Hero,
      mobileHero: MobileHero,
      quotesImage: QuotesImage,
      EsittelyImage,
      SisallysImage,
      FooterImage,
      MiksiYoImage
    };
  }
};
</script>

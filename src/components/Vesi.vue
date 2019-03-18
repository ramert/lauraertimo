<template>
    <div class="container-fluid re-page re-page--blue">
        <!--<div class="row re-hero">
            <hero :image="hero" :mobileImage="mobileHero" altText="Yo-kirjan kansi"></hero>
            <nav class="re-main-nav">
                <a class="re-main-nav__nav" href="#" v-scroll-to="'#mika'">Mikä on Vesi?</a>
                <a class="re-main-nav__nav" href="#" v-scroll-to="'#kirjasta'">Kirjasta sanottua</a>
                <a class="re-main-nav__nav" href="#" v-scroll-to="'#miksi'">Miksi Vesi?</a>
                <a class="re-main-nav__nav" href="#" v-scroll-to="'#osta'">Osta kirja</a>
            </nav>
        </div>-->

        <section class="row re-content-block">
            <div class="col-sm-8 re-content-block__paragraph">
                <p class="re-quote">Mitä tässä pitäisi olla?</p>
                <p>Tai tässä?</p>
            </div>
            <div class="col-sm-4 re-content-block__image">
                <img :src="Kansi"/>
            </div>
        </section>

        <section class="row re-content-block" id="mika">
            <!-- TODO: this could be done with ::before -->
            <div class="col-sm-12 re-content-block__separator"></div>
            <div class="col-sm-4 re-content-block__image">
                <img :src="Sisallys"/>
            </div>
            <div class="col-sm-8 re-content-block__paragraph">
                <h2>Sisällys</h2>
                <p>
                    Vedessä on neljä lukua ja 160 sivua tietoa, tarinaa, kuvia:</p>
                <ol>
                    <li>Ensin tutustutaan veteen aineena ja työssään sääilmiöiden näkyvimpänä osana,
                      maastonmuotojen muokkaajana ja planeetan värjääjänä. Mitä reittejä vesi
                      Maassa kulkee ja mitä matkallaan tekee?
                      </li>
                    <li>Sitten pulahdetaan vesielämän pariin: tunnetko
                      Maan vähäsateisimman mantereen? Millaista on elää
                      liian vähän tai liian paljon veden kanssa? Ja mitä ihmettä
                      löytyykään pinnan alta? Luontoa käsittelevän luvun keskiössä
                      on ping-pong-peli, jonta kasvit ja eläimet pelaavat –
                      ja jossa vesi on välttämätön aine.
                      </li>
                    <li>Entä ihminen, osa luontoa ja joskus muun luonnon suurin vihollinen?
                      Kehossamme vedellä on monta roolia, mutta oletko ajatellut,
                      että me myös tuotamme vettä sisällämme? Vesi on muokannut ihmisen
                      historiaa ja tarjonnut varhaisimman mahdollisuuden maailmanmatkailuun
                      jo kauan ennen ensimmäistäkään löytöretkeä. Nyt elämme aikaa,
                      jolloin vesi toimii tärkeän viestin sanansaattajana: jos ihminen
                      ei huomioi luonnonvoimia ja luonnon perusmekanismeja, muutamme
                      planeetan itsellemme sopimattomaksi asuinpaikaksi.
                      </li>
                    <li>Lopuksi teemme suuren sukelluksen: peruutamme evoluutiossa taakse päin.
                      Mitä kauemmas ajassa matkaamme, sitä suurempi osa elämästä löytyy vedestä.
                      Ihan lopuksi on viimeisen kysymyksen aika: vesi, mistä tulit luoksemme?
                      </li>
                </ol>
                <p>Aiheet ja käsittelytavat vaihtelevat aukeamalta toiselle.
                  Vesi kannattaa selailla kokonaisuutena läpi, sillä kuvitus virtaa
                  läpi kirjan. Sen sijaan tarinat ovat aukeaman pituisia itsenäisiä
                  kokonaisuuksia. Ääneen lukijalle on ehkä helpottava tieto, että
                  kaikkia 160 sivua ei tarvitse lukea läpi kerralla. Ehkäpä nuori
                  lukija valitsee ensin luettavaksi kaikista kiinnostavimmat aiheet
                  ja hairahtuu sitten tutustumaan johonkin ihan uuteen erikoisuuteen.
                  </p>
            </div>
        </section>

        <quotes :image="QuotesImage" jsonUrl="/static/vesiQuotes.json"></quotes>

        <!--<section class="row re-content-block" id="kirjasta">
            <div class="col-sm-12 re-content-block__separator"></div>
            <div class="col-sm-8 re-content-block__paragraph">
                <h2>Kirjasta sanottua</h2>
                <p class="re-quote--small"></p>
                <div class="re-content-block__reference">
                    <a class="re-content-block__link" href=""></a>
                </div>
            </div>
            <div class="col-sm-4 re-content-block__image">
                <img src="../static/img/vesi/vesi_sanottua.png"/>
            </div>
        </section>-->

        <section class="row re-content-block" id="miksi">
            <div class="col-sm-12 re-content-block__separator"></div>
            <div class="col-sm-8 re-content-block__paragraph">
                <h2>Miksi vesi?</h2>
                <p>Vesi on rakas, pelottava, tylsä ja ihmeellinen aine – aina läsnä,
                  välttämätön, huomaamaton. Vesi – kirja maailman tärkeimmästä aineesta
                  on monitahoinen tutkimusmatka, joka ei rajoitu yhden tieteenalan
                  katsantokantaan. Vaikka luonnonvesien pilaantuminen nousee Suomessakin
                  ajoittain otsikoihin, on puhdas vesi meille niin itsestäänselvä hanatuote,
                  että tuntui tarpeelliselta tarttua aiheeseen. Veden lukemattomat roolit
                  maapallolla tuottavat jutunjuurta ja lukemattomia visuaalisia mahdollisuuksia.
                  Kun ymmärtää hieman enemmän pikkuruisesta molekyylistä ja sen kavereineen
                  tekemistä loputtomista retkistä, loksahtavat monet ympäröivän maailman
                  ilmiöt paikalleen ja kokonaisuus hahmottuu ymmärrettävänä kokonaisuutena.
                  Vai mitä mieltä olet, voiko – kannattako – Olomuotoprinsessalle väittää
                  vastaan?
                  </p>
            </div>
            <div class="col-sm-4 re-content-block__image">
                <img :src="Miksi"/>
            </div>
        </section>

        <section class="row re-content-block" id="osta">
            <div class="col-sm-12 re-content-block__separator"></div>
            <div class="col-sm-12 re-content-block__paragraph">
                <h2>Vesi-ostoksille</h2>
                <p>Vesi on saatavilla kirjakaupoista kautta maan.</p>
                <p>Saat sen suoraan kotiin Myllylahden verkkokaupasta:
                    <a class="btn btn-primary btn-blue" href="#" target="_blank">Osta Vesi</a>
                </p>
            </div>
        </section>

        <!--<div class="row re-footer">
            <div class="col-sm-12">
                <img src="../static/img/yo/footer.png">
            </div>
            <div class="col-sm-12">
                <h1>Yö - kirja unesta ja pimeän salaisuuksista </h1>
                <p>Teksti: Laura Ertimo | Kuvitus: Satu Kontinen</p>
                <p>Kustantaja: <a class="re-footer__anchor" href="http://myllylahti.fi">Myllylahti</a></p>
                <a class="re-footer__anchor" href="https://www.facebook.com/Yokirja/">Seuraa Yö-kirjaa Facebookissa!</a>
            </div>
        </div>-->
        <global-footer></global-footer>
    </div>
</template>

<script>
import QuotesImage from '@/assets/vesi/vesi_sanottua.png';
import Hero from '@/assets/vesi/vesi_title.png';
import Kansi from '@/assets/vesi/vesi_kansi.png';
import Miksi from '@/assets/vesi/vesi_miksi1.png';
import Sisallys from '@/assets/vesi/vesi_sisallys2.png';

export default {
  name: 'vesi',
  data() {
    return {
      Hero,
      QuotesImage,
      Kansi,
      Miksi,
      Sisallys,
    };
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

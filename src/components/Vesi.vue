<template>
    <div class="re-page re-page--blue">
        <section class="row-8-4">
            <div class="re-content-block__paragraph">
                <h2>Kirja maailman tärkeimmästä aineesta</h2>
                <p class="ingress">Vesi on koko perheen tietokirja maailman tärkeimmästä aineesta. Läpinäkyvä ja mauton neste saattaa huljahtaa viemäriin huomaamatta, mutta ilman sitä ei maapallolla olisi elämää. Arkipäiväisyydestään huolimatta vedellä on todella outoja ominaisuuksia, joiden tunteminen auttaa ymmärtämään muun muassa ilmastonmuutosta. Vesi - kirja maailman tärkeimmästä aineesta on koko perheen tietokirja, jonka luettuaan ympäristön näkee uusin silmin.</p>
            </div>
            <div class="re-content-block__image">
                <img :src="Kansi"/>
            </div>
        </section>

        <!-- TODO: this could be done with ::before -->
        <div class="re-content-block__separator re-blue"></div>

        <section class="row re-content-block">
            <div class="re-content-block__image">
                <img :src="Sisallys"/>
            </div>
            <div class="re-content-block__paragraph">
                <p class="ingress">
                    Vesi koostuu neljästä pääluvusta, joissa elämän eliksiiriin
                    sukelletaan eri näkökulmista. Fysiikan, kemian, maantieteen,
                    kansanperinteen ja historian sekä biologian ja
                    ympäristötutkimuksen keinoin, reippaasti popularisoiden,
                    tutustutaan yli 60 tapaan, joilla vesi kytkeytyy elämään
                    maapallolla. Kutakin aihetta käsitellään yhdellä aukeaman
                    mittaisella artikkelilla. Intensiivinen tieto on koottu
                    tutkimusasema-sivuille. Vesi-kirjan sivuilla seikkailevat
                    myös kaksi supersankaritarta sarjakuva-sivuilla.
                    Kuinkahan fysiikkaan nojaavan Olomuotoprinsessan ja luontoa
                    varjelevan Aallottaren jännitteinen suhde kehittyy kirjan
                    edetessä..? Selvärajaisten, aukeamakohtaisten tietotekstien
                    rinnalla sininen kuvitus kulkee katkeamattomana läpi kirjan.
                    Kuvituksessa on runsaasti sisäisiä viitteitä -
                    seuraamalla vesijohtoa käy ilmi, kuka kuvitusta pyörittää.</p>
            </div>
        </section>

        <!-- TODO: this could be done with ::before -->
        <div class="re-content-block__separator re-blue"></div>

        <section class="row-4-8">
          <div class="re-content-block__image re-content-block__image--top">
              <img :src="Sisallys2"/>
          </div>
          <div class="re-content-block__paragraph">
            <p>
              Ensimmäinen pääluku on nimeltään Planeetta ja se käsittelee veden ominaisuuksia, olomuotoja ja paikkaa planeetallamme. Kaikki alkaa intialaisesta kansantarinasta, jossa suuri käärme on padonnut maailman vedet ja aiheuttanut suuren kuivuuden. Kun Indra vapauttaa veden virtaamaan, kirja pääsee matkaan. Perinteisen pallo-mallin sijaan Vesi-kirjassa molekyylitason ilmiöitä käsitellään Lego-palikoin. Aluksi tutkitaan aivan perusteita eli vesimolekyyliä ominiasuuksineen. Sitten tutustutaan sankarittariimme ja olomuotopeliin, jonka säännöt löytyvät termodynamiikasta. Kolikkoa heittämällä vaihdetaan olomuotoa ja sidotaan tai vapautetaan energiaa. Olomuodon muutoksiin perustuvat myös sääilmiöt, joita valotetaan pilvioppaan ja sateen syntyä käsittelevän sääsirkuksen keinoin. Sademääriä taas hahmotellaan maitopurkkien ja eri puolilla maapalloa sijaitsevien paikkojen avulla. Hirmumyrskyt saavat oman aukemansa ja sääilmiöiden lopuksi tutustutaan vielä Indran jousipyssyyn, jolla on tutumpikin nimi eli sateenkaari. Hopikansan tarina käärmeen klaanin synnystä johdattaa veden reittejä käsittelevään osaan, jossa tutustutaan veden karttakuvaan ja suolaisen- ja makeanveden jakautumiseen maapalolla. Omat alalukunsa saavat niin vesiputoukset, suolajärvet, jäätiköt kuin niiden maastoon jättämät jäljetkin. Maanalaiset vesivarat ovat kautta aikojen herättäneet sekalaisia tunteita: pohjavesistä kannetaan huolta ja jostainhan tarina Tuonelan virrastakin on saanut alkunsa. Maailman meriä ja ilmastonmuutoksenkin kannalta keskeistä ilmiötä, merivirtoja, käsitellään viiden aukeaman kokonaisuudessa, joka päättyy vuorovetten loputtomaan liikkeeseen. Niin vesimolekyylin matka on täynnä, ja matkaa voi vielä pysähtyä miettimään 6. tutkimusasemalle. Luvun päättää kyynel, joka vierii astronautin poskelle.
            </p>
          </div>
        </section>

        <div class="re-content-block__separator re-blue"></div>

        <section class="row-8-4">
          <div class="re-content-block__paragraph">
            <p>
              Luontoa käsittelevässä toisessa luvussa tutustutaan erilaisiin elinympäristöihin. Luku alkaa arvoituksella: "Seison maailman kuivimmalla mantereella valtavan vesivaraston päällä. Täällä maalla ei asu juuri ketään. Lempiruokaani ovat äyriäiset ja kala, muuta en syökään. Missä olen, kuka olen?" ja vastaus löytyy seuraavan aukeman kuvasta. Pakastimen kaltaisen Antarktiksen jälkeen siirrytään Saharan polttavan auringon alle. Mutta miksi maaelämä ilman nestemäistä makeaa vettä on niin vaikeaa? Tutkimusasemilla 7 ja 8 hahmotellaan Lego-palikoiden avulla, mitä kasvien yhteyttämisessä ja energian vapauttavassa soluhengityksessä tapahtuu. Sitten voidaankin loikata vetisempiin maisemiin suolle, sademetsään ja mangrovetiheikköön. Nyt ei ole vedestä pulaa, mutta tiesitkö, että kihokit napsivat hyönteisiä samasta syystä kuin me vitamiinilisiä ja että mangrovemetsiköiden olosuhteet heittelevät hypersuolaisuudesta makean veden tulviin ja päivänpaisteesta hirmumyrskyihin yhden päivän sisällä? Ääriolosuhteista on mukava pulahtaa vakaampaan meriympäristöön: ensin kelppien vedenalaiseen labyrinttiin ja sitten syvemmälle, aina syvänmerenhautojen pohjalle asti. Jossain epämääräisessä syvyydessä tapaamme myös tosiasioita jättiläiskalmareista ja tarun Krakenista. Ennen elinympäristöjen luvun päättymistä tapaamme vielä pimeydessä elävät hauraat pitsirakennelmat eli syvänmerenkorallit ja hyvin iäkkään nilviäisen. Lopulta saamelaistaruston kalakansa ja erikoinen cubbomaddu johdattavat meidät ihmisten ilmoille.
            </p>
          </div>
          <div class="re-content-block__image re-content-block__image--top">
              <img :src="Miksi2"/>
          </div>
        </section>

        <div class="re-content-block__separator re-blue"></div>

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

        <div class="re-content-block__separator re-blue"></div>
        <section class="row-8-4" id="miksi">
            <div class="re-content-block__paragraph">
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
            <div class="re-content-block__image">
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
    </div>
</template>

<script>
import QuotesImage from '@/assets/vesi/vesi_sanottua.png';
import Hero from '@/assets/vesi/vesi_title.png';
import Kansi from '@/assets/vesi/vesi_kansi.png';
import Miksi from '@/assets/vesi/vesi_miksi1.png';
import Miksi2 from '@/assets/vesi/vesi_miksi2.png';
import Sisallys2 from '@/assets/vesi/vesi_sisallys1.png';
import Sisallys from '@/assets/vesi/vesi_sisallys2.png';

export default {
  name: 'vesi',
  data() {
    return {
      Hero,
      QuotesImage,
      Kansi,
      Miksi,
      Miksi2,
      Sisallys,
      Sisallys2
    };
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

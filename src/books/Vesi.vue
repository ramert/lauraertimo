<template>
    <vPage>
        <vBookHeader 
            title="Kirja maailman tärkeimmästä aineesta"
            :cover="Kansi"
            ingress="Koko perheen tietokirja maailman tärkeimmästä aineesta. Läpinäkyvä ja mauton neste saattaa huljahtaa viemäriin huomaamatta, mutta ilman sitä ei maapallolla olisi elämää. "
            coAuthor="Kuvittaja Satu Kontinen"
            publisher="Myllylahti"
            published="2017"
            buyLink="http://www.myllylahti.fi/kirjat/lasten-ja-nuortenkirjat/vesi-kirja-maailman-taerkeimmaestae-aineesta-detail"
        />

        <!--<section class="row row-8-4">
          <vParagraph noMargin="true">
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
            seuraamalla vesijohtoa käy ilmi, kuka kuvitusta pyörittää.
          </vParagraph>
          <div>
            <vImage :image="Sisallys" isBorder="true" />
          </div>
        </section>

        <div class="re-content-block__separator"></div>

        <section class="row row-4-8">
          <div>
            <vImage :image="Sisallys2" isBorder="true"/>
          </div>  
          <vParagraph noMargin="true">
            Ensimmäinen pääluku on nimeltään Planeetta ja se käsittelee veden ominaisuuksia, olomuotoja ja paikkaa planeetallamme. Kaikki alkaa intialaisesta kansantarinasta, jossa suuri käärme on padonnut maailman vedet ja aiheuttanut suuren kuivuuden. Kun Indra vapauttaa veden virtaamaan, kirja pääsee matkaan. Perinteisen pallo-mallin sijaan Vesi-kirjassa molekyylitason ilmiöitä käsitellään Lego-palikoin. Aluksi tutkitaan aivan perusteita eli vesimolekyyliä ominiasuuksineen. Sitten tutustutaan sankarittariimme ja olomuotopeliin, jonka säännöt löytyvät termodynamiikasta. Kolikkoa heittämällä vaihdetaan olomuotoa ja sidotaan tai vapautetaan energiaa. Olomuodon muutoksiin perustuvat myös sääilmiöt, joita valotetaan pilvioppaan ja sateen syntyä käsittelevän sääsirkuksen keinoin. Sademääriä taas hahmotellaan maitopurkkien ja eri puolilla maapalloa sijaitsevien paikkojen avulla. Hirmumyrskyt saavat oman aukemansa ja sääilmiöiden lopuksi tutustutaan vielä Indran jousipyssyyn, jolla on tutumpikin nimi eli sateenkaari. Hopikansan tarina käärmeen klaanin synnystä johdattaa veden reittejä käsittelevään osaan, jossa tutustutaan veden karttakuvaan ja suolaisen- ja makeanveden jakautumiseen maapalolla. Omat alalukunsa saavat niin vesiputoukset, suolajärvet, jäätiköt kuin niiden maastoon jättämät jäljetkin. Maanalaiset vesivarat ovat kautta aikojen herättäneet sekalaisia tunteita: pohjavesistä kannetaan huolta ja jostainhan tarina Tuonelan virrastakin on saanut alkunsa. Maailman meriä ja ilmastonmuutoksenkin kannalta keskeistä ilmiötä, merivirtoja, käsitellään viiden aukeaman kokonaisuudessa, joka päättyy vuorovetten loputtomaan liikkeeseen. Niin vesimolekyylin matka on täynnä, ja matkaa voi vielä pysähtyä miettimään 6. tutkimusasemalle. Luvun päättää kyynel, joka vierii astronautin poskelle.
          </vParagraph>
        </section>

        <div class="re-content-block__separator"></div>

        <section class="row row-8-4">
          <vParagraph>
              Luontoa käsittelevässä toisessa luvussa tutustutaan erilaisiin elinympäristöihin. Luku alkaa arvoituksella: "Seison maailman kuivimmalla mantereella valtavan vesivaraston päällä. Täällä maalla ei asu juuri ketään. Lempiruokaani ovat äyriäiset ja kala, muuta en syökään. Missä olen, kuka olen?" ja vastaus löytyy seuraavan aukeman kuvasta. Pakastimen kaltaisen Antarktiksen jälkeen siirrytään Saharan polttavan auringon alle. Mutta miksi maaelämä ilman nestemäistä makeaa vettä on niin vaikeaa? Tutkimusasemilla 7 ja 8 hahmotellaan Lego-palikoiden avulla, mitä kasvien yhteyttämisessä ja energian vapauttavassa soluhengityksessä tapahtuu. Sitten voidaankin loikata vetisempiin maisemiin suolle, sademetsään ja mangrovetiheikköön. Nyt ei ole vedestä pulaa, mutta tiesitkö, että kihokit napsivat hyönteisiä samasta syystä kuin me vitamiinilisiä ja että mangrovemetsiköiden olosuhteet heittelevät hypersuolaisuudesta makean veden tulviin ja päivänpaisteesta hirmumyrskyihin yhden päivän sisällä? Ääriolosuhteista on mukava pulahtaa vakaampaan meriympäristöön: ensin kelppien vedenalaiseen labyrinttiin ja sitten syvemmälle, aina syvänmerenhautojen pohjalle asti. Jossain epämääräisessä syvyydessä tapaamme myös tosiasioita jättiläiskalmareista ja tarun Krakenista. Ennen elinympäristöjen luvun päättymistä tapaamme vielä pimeydessä elävät hauraat pitsirakennelmat eli syvänmerenkorallit ja hyvin iäkkään nilviäisen. Lopulta saamelaistaruston kalakansa ja erikoinen cubbomaddu johdattavat meidät ihmisten ilmoille.
          </vParagraph>
          <vImage :image="Miksi2"/>
        </section>
        

        <div class="re-content-block__separator"></div>

        <h2 class="center">Miksi vesi?</h2>
        <section class="row row-8-4" id="miksi">    
            <vParagraph>
                Vesi on rakas, pelottava, tylsä ja ihmeellinen aine – aina läsnä,
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
            </vParagraph>
            <vImage :image="Miksi"/>
        </section>
  -->
        <vQuotes :quotes="quotes" />

        <!--<section id="osta">
          <h2>Vesi-ostoksille</h2>
          <p>Vesi on saatavilla kirjakaupoista kautta maan.</p>
          <p>Saat sen suoraan kotiin Myllylahden verkkokaupasta:
              <a class="btn btn-primary btn-blue" href="http://www.myllylahti.fi/kirjat/lasten-ja-nuortenkirjat/vesi-kirja-maailman-taerkeimmaestae-aineesta-detail" target="_blank">Osta Vesi</a>
          </p>
        </section>-->
    </vPage>
</template>

<script>
import QuotesImage from '@/assets/vesi/vesi_sanottua.png';
import Hero from '@/assets/vesi/vesi_title.png';
import Kansi from '@/assets/vesi/kansi.jpg';
import Miksi from '@/assets/vesi/vesi_miksi1.png';
import Miksi2 from '@/assets/vesi/vesi_miksi2.png';
import Sisallys2 from '@/assets/vesi/vesi_sisallys1.png';
import Sisallys from '@/assets/vesi/vesi_sisallys2.png';

const quotes = [
  {
    "text": "Ertimon tapa suhtautua tietoon on kiinni lasten ja nuorten ajassa: kovan faktan rinnalla pohditaan mytologioiden merkitystä, sitä mistä ne saavat alkunsa ja miten kulkevat historiasta nykypäivään.",
    "url": "https://www.aamulehti.fi/kulttuuri/jos-aiti-ei-halua-olla-kanssani-en-minakaan-halua-kuvakirja-kuvaa-milta-aidin-uupumus-lapsesta-tuntuu-200177758/",
    "urlText": "Marjaana Ropponen, Aamulehti"
  },
  {
    "text": "Pätevä tietokirja vedestä on samalla kaunis taidekirja.",
    "url": "Taika Dahlbom, Helsingin Sanomat",
    "urlText": "https://www.hs.fi/kulttuuri/art-2000005283210.html"
  },
  {
    "text": "Ertimo kumppaneineen on todella tehnyt melkoisen urakan kirjan rakenteen, tietojen, graafisen sujuvuuden,kiinnostavuuden ja houkuttelevuuden puolesta.",
    "url": "http://karivaijarvi.blogspot.com/2017/05/vesi-tuonelan-virralta-atlantikseen.html",
    "urlText": "Kari Vaijärvi, Lastenkulttuurin vinkkari"
  },
  {
    "text": "Tekijät kyllä onnistuvat havainnollistamaan molekyylitasonkin tietoa kuvailemaa atomit toisiinsa yhdistyviksi legopalikoiksi, jaesimerkiksi kasvien yhteyttämisestä kertovassa luvussa verrataan viherhiukkasia superhienoihin keittiöihin. (...) Vesi - Kirjamaailman tärkeimmästä aineesta on kaunis tietokirja, joka yhdistelee uudella tavalla faktaa, fiktiota ja sarjakuvaa.",
    "url": "http://luetaankotama.blogspot.com/2017/04/vesi-kirja-maailman-tarkeimmasta.html",
    "urlText": "Kia, Luetaanko tämä"
  },
  {
    "text": "Mukavasti sai sivistyä itsekin, kun 11-vuotias kirjan luki ja esitteli kaikkea uutta oppimaansa. Sen jälkeen minun pitilukea kirjan ihan itsekin.",
    "url": "https://www.kirjavinkit.fi/arvostelut/vesi-kirja-maailman-tarkeimmasta-aineesta/",
    "urlText": "Mikko, Kirjavinkki"
  },
  {
    "text": "Vesi on hyvin tuhti pakkaus, eikä sitä ei hetkessä lueta, mutta siinä on hyvin tärkeää asiaa, jota olisi hyvä pysähtyä aina välillä miettimään. Mikään ei kestä ikuisesti, mutta omalla toiminnalla voimme pidentää käyttöikää.",
    "url": "http://hh-lukija.blogspot.com/2017/07/vesi-kirja-maailman-tarkeimmasta.html",
    "urlText": "Jassu, Hassu Hurja Lukija"
  },
    {
    "text": "VIISI TÄHTEÄ",
    "url": "http://kirjasahkokayra.blogspot.com/2017/06/laura-ertimo-satu-kontinen-vesi-kirja.html",
    "urlText": "Mai Laakso, Kirjasähkökäyrä"
  },
];

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
      Sisallys2,
      quotes,
    };
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

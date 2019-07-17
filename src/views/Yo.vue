<template>
  <div class="re-page re-page--black re-content-block">
    <h2 class="center">Kirja unesta ja pimeän salaisuuksista</h2>
    <vIngress :image="Kansi">Yö on iltasatukirja, joka on totta. Se kirjoitettiin lasten ja aikuisten yhteisiä lukuhetkiä varten, mutta on
      sittemmin valloittanut sekä itse lukevan alakoululaisyleisön että aikuisia esteetikkoja ainakin 80-
      täyttäneisiin saakka. Tummanpuhuva, salaperäinen kirja kätkee sisäänsä lempeää tietoa pimeydestä ja
      nukkumisesta. Siinä missä fiktio usein herkuttelee painajaisilla ja pimeänpelolla, Yön kuvaamien
      tosiasioiden avulla voi päästä peloista yli ja ymmärtää unten parhaat puolet.
    </vIngress>

    <vQuote :link="quotePromote.url" :linkText="quotePromote.urlText" color="black">
      {{ quotePromote.text}}
    </vQuote>
    
    <section class="row-4-8">
      <vImage :image="SisallysImage" />
      <vParagraph>
        Yö kirja unesta ja pimeän salaisuuksista jakautuu neljään osaan ja päättyy epilogin omaiseen
        loppukaneettiin monikielisine hyvänyöntoivotuksineen. Lukujen sisällä kutakin aihetta käsitellään yhdellä
        aukeamalla niin, että aiheista voi poimia omat suosikkinsa ja iltalukuhetken voi sopia vaikkapa kolmen
        tarinan pituiseksi. Ilmiökeskeisen kirjan sivut kutsuvat tutustumaan aiheeseen monien eri tieteenalojen
        näkökulmasta. Osa aukeamista on intensiivisen tiedon "Yöllisiä muistiinpanoja"; niiden tiiviin sisällön
        Satu Kontinen kirjoitti käsin kuvituksen oheen. Tarinallisempien aukeamien kuvitus jatkuu
        katkeamattomana kudelmana läpi kirjan. Kuvituksesta voi löytää viitteitä eri kulttuuripiireihin ja myös
        kirjan sisäisiä viitteitä aihepiiristä toiseen. Kaikki kirjan kuvat liittyvät ajoittaisesta
        mielikuvituksellisuudestaan huolimatta tekstisisältöön, ja kuvituksen ohessa on mm. tieteellisiä lajinimiä
        lisätietoa kaipaaville.
      </vParagraph>
    </section>

    <div class="re-content-block__separator re-black"></div>

    <section>
      <vParagraph>
      Ensimmäinen pääluku on nimeltään Planeetta ja se käsittelee veden ominaisuuksia, olomuotoja ja paikkaa
planeetallamme. Kaikki alkaa intialaisesta kansantarinasta, jossa suuri käärme on padonnut maailman
vedet ja aiheuttanut suuren kuivuuden. Kun Indra vapauttaa veden virtaamaan, kirja pääsee matkaan.
Perinteisen pallo-mallin sijaan Vesi-kirjassa molekyylitason ilmiöitä käsitellään Lego-palikoin. Aluksi
tutkitaan aivan perusteita eli vesimolekyyliä ominiasuuksineen. Sitten tutustutaan sankarittariimme ja
olomuotopeliin, jonka säännöt löytyvät termodynamiikasta. Kolikkoa heittämällä vaihdetaan olomuotoa
ja sidotaan tai vapautetaan energiaa. Olomuodon muutoksiin perustuvat myös sääilmiöt, joita valotetaan
pilvioppaan ja sateen syntyä käsittelevän sääsirkuksen keinoin. Sademääriä taas hahmotellaan
maitopurkkien ja eri puolilla maapalloa sijaitsevien paikkojen avulla. Hirmumyrskyt saavat oman
aukemansa ja sääilmiöiden lopuksi tutustutaan vielä Indran jousipyssyyn, jolla on tutumpikin nimi eli
sateenkaari. Hopikansan tarina käärmeen klaanin synnystä johdattaa veden reittejä käsittelevään osaan,
jossa tutustutaan veden karttakuvaan ja suolaisen- ja makeanveden jakautumiseen maapalolla. Omat
alalukunsa saavat niin vesiputoukset, suolajärvet, jäätiköt kuin niiden maastoon jättämät jäljetkin.
Maanalaiset vesivarat ovat kautta aikojen herättäneet sekalaisia tunteita: pohjavesistä kannetaan huolta ja
jostainhan tarina Tuonelan virrastakin on saanut alkunsa. Maailman meriä ja ilmastonmuutoksenkin
kannalta keskeistä ilmiötä, merivirtoja, käsitellään viiden aukeaman kokonaisuudessa, joka päättyy
vuorovetten loputtomaan liikkeeseen. Niin vesimolekyylin matka on täynnä, ja matkaa voi vielä pysähtyä
miettimään 6. tutkimusasemalle. Luvun päättää kyynel, joka vierii astronautin poskelle.
      </vParagraph>
    </section>
    
    <div class="re-content-block__separator re-black"></div>

    <section>
      <vParagraph>
        Luontoa käsittelevässä toisessa luvussa tutustutaan erilaisiin elinympäristöihin. Luku alkaa arvoituksella:
        "Seison maailman kuivimmalla mantereella valtavan vesivaraston päällä. Täällä maalla ei asu juuri
        ketään. Lempiruokaani ovat äyriäiset ja kala, muuta en syökään. Missä olen, kuka olen?" ja vastaus
        löytyy seuraavan aukeman kuvasta. Pakastimen kaltaisen Antarktiksen jälkeen siirrytään Saharan
        polttavan auringon alle. Mutta miksi maaelämä ilman nestemäistä makeaa vettä on niin vaikeaa?
        Tutkimusasemilla 7 ja 8 hahmotellaan Lego-palikoiden avulla, mitä kasvien yhteyttämisessä ja energian
        vapauttavassa soluhengityksessä tapahtuu. Sitten voidaankin loikata vetisempiin maisemiin suolle,
        sademetsään ja mangrovetiheikköön. Nyt ei ole vedestä pulaa, mutta tiesitkö, että kihokit napsivat
        hyönteisiä samasta syystä kuin me vitamiinilisiä ja että mangrovemetsiköiden olosuhteet heittelevät
        hypersuolaisuudesta makean veden tulviin ja päivänpaisteesta hirmumyrskyihin yhden päivän sisällä?
        Ääriolosuhteista on mukava pulahtaa vakaampaan meriympäristöön: ensin kelppien vedenalaiseen
        labyrinttiin ja sitten syvemmälle, aina syvänmerenhautojen pohjalle asti. Jossain epämääräisessä
        syvyydessä tapaamme myös tosiasioita jättiläiskalmareista ja tarun Krakenista. Ennen elinympäristöjen
        luvun päättymistä tapaamme vielä pimeydessä elävät hauraat pitsirakennelmat eli syvänmerenkorallit ja
        hyvin iäkkään nilviäisen. Lopulta saamelaistaruston kalakansa ja erikoinen cubbomaddu johdattavat
        meidät ihmisten ilmoille.
     </vParagraph>
    </section>

    <div class="re-content-block__separator re-black"></div>

    <section>
      <vParagraph>
      Ihmisen ja veden suhde ei ole lainkaan yksinkertainen. Siitä kertoo Vesi-kirjan kolmas luku, joka alkaa
hyvin kauan sitten tehdyllä merimatkalla. Itse matkasta tai edes sen tarkasta ajankohdasta, tekijöistä tai
purjehdusvälineestä ei ole säilynyt mitään tietoa. Jollain keinoin aboriginaalien esivanhemmat kuitenkin
taittoivat hurjan matkan yli horisontin Australiaan yli 50 000 vuotta sitten. Merimatkoja on tehty
sittemmin monenlaisilla aluksilla, joista yksi vajosi Itämeren aaltoihin vuonna 1771. Tarina Vrouw
Marian haaksirikosta valottaa edelleen vesireittien merkitystä ihmisten liikkumisessa. Joet ovat olleet sekä
kulku- ja kuljetusreittejä että varhaisimpien korkeakulttuurien elämänlankoja. Egyptissä Niili tulvineen
kannusti kalenterin kehittämiseen. Niilillä voimme myös pysähtyä miettimään nykyaikaista vedenkäyttöä
ja sen lieveilmiöitä. Ihmisluvussa on toki tärkeää myös katsoa ihmisen sisälle: minkälaisia tehtäviä vesi
hoitaakaan osana elimistömme nesteitä. Tunnetusti vettä poistuu sisältämme muun muassa virtsana, joka
esimerkiksi keskiajan Pariisissa johdettiin surutta Seine-jokeen. Pariisia käsittelevällä aukeamalla
jatketaan jokien äärellä ja annetaan myös mahdoton tehtävä: Etsi kartalta eurooppalainen pääkaupunki,
jossa ei olisi jokea. Hanamysteeri-sarjakuvassa nykyaikaista vesihuoltoa, jonka jälkeen siirrytään
keskeisiin vesiaiheisiin ympäristökysymyksiin. Esimerkkinä toimii Aral-järven kohtalo ja puuvillan sekä
ruokatuotannon vesijalanjälkien tutkiminen. Itse asiassa ihmiset ovat törttöilleet veden kanssa niin
pahasti, että ympäristötuhoja käsittelevä sarjakuva on nimetty seitsemän kuolemansynnin mukaan. Lisäksi
pohditaan, kuinka Olomuotoprinsessa joutuu raivon valtaan, kun ilmastonmuutos lämmittää ilmakehän
lisäksi meriä ja saa vedet jylläämään. Platonilla olisi voinut olla sanansa sanottavana hillitömästä
elämäntavastamme, ainakin hän keksi Atlantiksen varoittavaksi esimerkiksi. Myyttien kevyempää sarjaa
edustavat merenneidot ja heidän rotevat esikuvansa todellisuudesta eli manaatit ja dugongit. Ihmisluvun
päättää sarjakuva niistä ihmisten tekemän yhteistyön hedelmistä, jotka edesauttavat vesistöjen ja sitä
kautta kaikkien elävien olentojen hyvinvointia.
     </vParagraph>
    </section>

    <div class="re-content-block__separator re-black"></div>

    <section class="row-4-8">
      <vImage :image="MiksiYoImage" />
      <vParagraph>
      Vesi-kirjan viimeinen luku tarjoaa haasteen aikuisille, mutta uppoaa helpommin lasten plastiseen
maailmankuvaan. Sukellus on peruutusmatka maapallon kehityshistoriaan. Puhutaan evoluution
suunnittelemattomista käänteistä (ja täältä löytyy eräs elävä fossiili, joka pitää kuvituksen liikkeessä).
Aloitamme sukelluksen nykyajasta, antroposeenista. Aukeama kerrallaan katsahdamme aina vain
kaukaisempaan maailmankauteen: jääkaudenaikaiseen maailmaan pleistoseenille, dinosaurusten aikaan
liitukaudelle, kivihiilikaudelle, kalojen kulta-aikaan devonikaudelle, kambrikaudelle, (vieläkö happi
riittää?) ja vielä kauemmas, yhteensä yhdeksän aikakauden halki, aina maapallon syntyyn saakka.
Jokaisen kauden yhteydessä käy ilmi jokin tapa, jolla elämä on sidoksissa veteen ja mitä kauemmas
maailmanhistoriaan sukelletaan, sitä välittömämmin kaikki elämä on riippuvaisia vedestä. Aivan lopuksi
on syytä kysyä viimeinen kysymys: mistä vesi on peräisin? Ja tarjota kysymykseen paras saatavilla oleva
vastaus.
     </vParagraph>
    </section>

    <vQuotes :quotes="quotes" color="black"/>


    <section id="osta">
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
    </section>

    <vImage :image="FooterImage" />
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

const quotes = [
  {
    "text": "Tästä kirjasta voin rehellisesti sanoa, että se on mielestäni ihana!",
    "url": "http://luetaankotama.blogspot.fi/2016/04/kiehtova-kirja-yosta.html",
    "urlText": "Kirjallisuusblogi Luetaanko tämä? /Kia"
  },
  {
    "text": "Näin lapsellisen ilahtunut en hetkeen ole ollut nippelitiedosta! Taitossa on paljon ilmavuutta ja näin ollen tilaa omille ajatuksille ja ällistykselle. Paras lisä on kuitenkin taidolla ja hartaudella tehdyt kuvat, jotka tukevat älyttömän upealla visuaalisuudellaan faktoja. ... Voisi täälläkin blogissa lähteä tietokirjojen lukeminen hurjaan kasvuun, jos enemmän tämänkaltaisia kirjoja tehtäisiin. Ja kirjaahan voi lukea kaikki naperosta vaariin.",
    "url": "http://hh-lukija.blogspot.fi/2016/11/yo-kirja-unesta-ja-pimean-salaisuuksista.html",
    "urlText": "Kirjallisuusblogi Hurja Hassu Lukija / Jassu"
  },
  {
    "text": "Kirja tuo hämärän ajan mukavan läheiseksi lapselle, niin, ettei pimeää tarvitse ainakaan pelätä. Lämpimät suosittelut kelle hyvänsä, jota kiinnostavat pimeän salaisuudet. Ja ketäpä eivät kiinnostaisi.",
    "url": "https://ntikirjastotati.wordpress.com/2016/08/18/laura-ertimo-ja-satu-kontinen-yo-kirja-unesta-ja-pimean-salaisuuksista/",
    "urlText": "Kirjallisuusblogi Nti Kirjastotäti"
  },
  {
    "text": "Laura Ertimon kirjoittama ja Satu Kontisen kuvittama Yö sisältää paljon hauskaa tietoa ja on kaunis, aiheensa näköinen kirja. ",
    "url": "http://www.hs.fi/arviot/kirja/a1463540220399",
    "urlText": "Helsingin Sanomat / Arja Kivipelto"
  },
  {
    "text": "Ertimo ja Kontinen ovat siis saaneet tiukan otteen yöstä. Ainakin minä uskon, että teos tekee tehtävänsä: tämän jälkeen yötä ei tarvitse pelätä, vaan se on tarpeellinen ja kiinnostava jakso elämässä. Ja hienointa on, ettei tieteellinen katsontakanta yhtään vähättele yön salaisuuksia – päinvastoin.",
    "url": "http://www.ts.fi/kulttuuri/kirjat/866867/Mustavalkoisen+tyylikkaasti+yosta",
    "urlText": "Turun Sanomat / Mari Viertola"
  },
  {
    "text": "Ertimo kirjoittaa lapsenkokoisesti ja avaa kummallisuuksia käteen mahtuviksi ilmiöiksi. ... Satu Kontinen on tehnyt huikean kuvitustyön lasten tietokirjaan Yö − kirja unesta ja pimeän salaisuuksista.",
    "url": "http://www.aamulehti.fi/kulttuuri/lastenkirjamakasiini-graafikko-ja-maantieteilija-loihtivat-kansien-valiin-yon-lumoa/",
    "urlText": "Aamulehti / Marjaana Ropponen"
  }
];

const quotePromote = quotes[0];

export default {
  name: "yo",
  data() {
    return {
      hero: Hero,
      mobileHero: MobileHero,
      quotesImage: QuotesImage,
      Kansi: EsittelyImage,
      SisallysImage,
      FooterImage,
      MiksiYoImage,
      quotes,
      quotePromote
    };
  }
};
</script>


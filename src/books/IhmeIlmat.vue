<template>
    <vPage>
        <vBookHeader 
            title="Miksi ilmasto muuttuu"
            :cover="IhmeIlmatImage"
            ingress="Sarjakuvaa, tarinaa ja perinteistä tietotekstiä yhdistelevä kirja kertoo ilmastonmuutoksesta, sen mekanismeista ja hillitsemisestä."
            coAuthor="kuvittaja Mari Ahokoivu"
            publisher="Into Kustannus"
            published="2019"
            buyLink="https://kauppa.intokustannus.fi/kirja/ihme-ilmat-miksi-ilmasto-muuttuu/"
        />
        <h2>Uutisia</h2>
        <h3>Ihme ilmat! saa jatkoa</h3>
        <vParagraph noMargin="true">
            Vuoden 2021 alussa ilmestyy puuhakirja, josta löytyy tekemistä koko perheelle, parille sukulaiselle ja mahdollisesti myös presidentille. Syksyllä 2021 Lotan ja Kasperin seikkailut jatkuvat, kun mehiläinen pistää Lottaa jalkaan ja onnettomuudesta seuraa Aika matka! 
        </vParagraph>
        <vParagraph noMargin="true">
            Ihme ilmat! taipuu teatteriksi. <a href="https://www.teatteri-ilmio.fi/" target="_blank" >Teatteri Ilmi Ö</a> tarttuu haasteeseen ja luo tietokirjan pohjalta <a href="https://www.teatteri-ilmio.fi/nosto/ihme-ilmat-forumteatteriesitys-2/" target="_blank">forumteatteriesityksen.</a>
        </vParagraph>
        <h3>Ihme ilmat! valloittaa maailmaa</h3>
        <vParagraph noMargin="true">
            <b>Imelik ilm! Miks kliima muutub </b>
            <a href="https://www.avita.ee/32413" target="_blank"> Avita, Viro 2020</a>
        </vParagraph>

        <div class="re-content-block__separator"></div>

        <vQuotes :quotes="quotes" color="blue" />
    </vPage>
</template>

<script>
import IhmeIlmatImage from '@/assets/ihmeilmat/ihme-ilmat-miksi-ilmasto-muuttuu.jpg';

const quotes = [
    {
        "text": "Laura Ertimon ja Mari Ahokoivun lasten tietokirja Ihme ilmat! Miksi ilmasto muuttuu on kompakti ja helppolukuinen tietokirja, joka tyydyttää vielä isommankin yläkoululaisen ja jopa aikuisen tiedonnälkää. Ertimon maantieteilijän koulutus on antanut hyvän lähtökohdan tiivistää tuhtia faktaa helposti omaksuttavaan muotoon. Aloitteleva lapsilukija voi keskittyä Ahokoivun sarjakuvastrippeihin ja päätyy niidenkin avulla pohtimaan olennaisia asioista, joilla voi arkisin valinnoin – yhdessä aikuisten kanssa – vaikuttaa ilmastonmuutokseen.",
        "url": "https://www.hs.fi/kulttuuri/art-2000006281513.html",
        "urlText": "Päivi Heikkilä-Halttunen, Helsingin Sanomat, 23.10.2019"
    },
    {
        "text": "Laura Ertimon ja Mari Ahokoivun lasten tietokirja Ihme ilmat! Miksi ilmasto muuttuu on kompakti ja helppolukuinen tietokirja, joka tyydyttää vielä isommankin yläkoululaisen ja jopa aikuisen tiedonnälkää. Ertimon maantieteilijän koulutus on antanut hyvän lähtökohdan tiivistää tuhtia faktaa helposti omaksuttavaan muotoon. Aloitteleva lapsilukija voi keskittyä Ahokoivun sarjakuvastrippeihin ja päätyy niidenkin avulla pohtimaan olennaisia asioista, joilla voi arkisin valinnoin – yhdessä aikuisten kanssa – vaikuttaa ilmastonmuutokseen.",
        "url": "https://www.hs.fi/kulttuuri/art-2000006281513.html",
        "urlText": "Päivi Heikkilä-Halttunen, Helsingin Sanomat, 23.10.2019"
    },
    {   
        "text": "Ihme ilmat! on siis erinomaisesti kuvitettu, selkeä tietopaketti, joka sopii hyvin myös aikuisen ja lapsen yhdessä tutkittavaksi. Mikäli aihe yhtään kiinnostaa, kirja kannattaa kyllä ehdottomasti ottaa lukulistalle.",
        "urlText": "Kirjavinkit, 29.11.2019"
    } ,
    {   
        "text": "Tietokirja vastaa lasten kiperiin kysymyksiin ilmastonmuutoksesta ja kertoo, mitä sille voi tehdä. Maantieteilijä ja tietokirjailija Laura Ertimon teksti saa tukea viime vuonna Oksi-sarjakuvalla ihastuttaneen Mari Ahokoivun kauniista kuvituksesta.",
        "urlText": "Arla Kanerva Helsingin Sanomat, 22.9.2019"
    }, 
    {
        "text": "Lapset kuulevat ilmastouutisia joka tapauksessa, mutta pelkästään uutisia kuulemalla käsitys ilmastonmuutoksesta voi jäädä pirstaleiseksi ja ahdistavaksi. Kirjan tarkoitus on esittää kokonaiskuva asiasta.",
        "urlText": "Laura Ertimo PS Pulssin haastattelussa, 14.2.2020"
    },
    {
        "text": "Tätä on luettu lasten kanssa. Etenkin 9-vuotiasta on askarruttanut ilmaston lämpeneminen. Monimutkainen tiede on selitetty kirjassa ymmärrettävästi, eikä teos jää pintapuoliseksi niin kuin lapsille suunnatut tiedekirjat joskus jäävät. Kuvituksissa ja ilmeessä on imua. Kerronta toimii. Pidän tätä, en pelkästään onnistuneena lastenkirjana, vaan ylipäätään yhtenä parhaista johdatuksista tähän vaikeaselkoiseen aiheeseen.",
        "urlText":"Karri 'Paleface' Miettinen, Kulttuurimedia Kuiske, 23.6.2020",
        "url": "https://kuiske.fi/mina-luen-karri-paleface-miettinen/"
    },
    {
        "text":"Ajankohtaisempaa kirjaa ei oikeastaan voi olla. Ihme Ilmat! tarttuu kuumaan aiheeseen sarjakuvalla höystetyn tietokirjan muodossa. Kirja käsittelee aihettaan kattavasti. Onkin kunnioitettava suoritus, että neljällekymmenelleseitsemälle sivulle on saatu puristettua niin paljon tietoa aiheesta ilman, että tieto vaikuttaisi väkisin kansiensa väliin ahdetulta. On vaikeaa keksiä mitä kirjaan olisi vielä voinut lisätä.",
        "urlText": "Mutsimedia, 3.11.2019"
    }, 
    {
        "text":"Melkeinpä tekisi mieli sanoa, että suosittelisin maantieteilijä ja tietokirjailija Laura Ertimon kirjoittamaa ja sarjakuvataiteilija Mari Ahokoivun kuvittamaa lasten kirjaa Ihme Ilmat! – Miksi ilmasto muuttuu erityisesti aikuisille. Niin mainiosti siinä on kerrottu ilmastonmuutoksen periaatteet, syyt ja seuraukset, että lukiessa kyllä aikuinenkin oppii. Kirja ei jää vaan ilmastonmuutoksen pohtimiseen ja asian voivotteluun, vaan siinä esitetään hienosti tapoja, miten jokainen meistä voi vaikuttaa omaan käyttäytymiseensä, jotta meillä kaikilla olisi parempi tulevaisuus. Luonnollisesti kirja on oikein hyvää luettavaa myös lapsille – sanoisin, että 3-4 luokkalaisesta seiskaluokkaan.",
        "urlText": "Tiedettä Tytöille -hanke"
    },
    {
        "text":"Laura Ertimon ja Mari Ahokoivun tietokirja Ihme ilmat! tarjoaa koululaiselle ja miksei aikuisellekin tuhdin tietopaketin ilmastomuutoksen syistä ja seurauksista helposti nieltävässä paketissa.",
        "urlText": "Rouvaeriksson-kirjablogi, 27.11.2019"
    },
    {
        "text":"Laura Ertimon &  Mari Ahokoivun Ihme ilmat! – Miksi ilmasto muuttuu tulisi mielestäni ottaa huomioon Tietokirjallisuuden Finlandiaa jaettaessa.",
        "urlText": "Lastenkirjahylly-blogi, Varjo-Finlandia, 4.11.2019"
    },
    {
        "text":"Ihme ilmat! – Miksi ilmasto muuttuu -kirja on toteutettu kunnianhimoisesti. Se on ulkonäöltään kaunis ja raikas. Tekstisisällöt on kirjoitettu huolella faktoihin nojaten mutta silti niin popularisoiden, että uskon lastenkin jaksavan niitä lukea ja kuunnella.",
        "urlText": "Kirsin kirjablogi, 17.11.2019"
    },
    {
        "text":"Kirja korostaa kaikkien vaikuttamisen mahdollisuutta ja tärkeyttä. Nuoretkin voivat tehdä arjen valintoja ja herätellä aikuisia ympäristövastuullisuuteen.",
        "urlText": "Lapin Kansa, 28.10.2019"
    },
    {
        "text":"Ihme ilmat! – Miksi ilmasto muuttuu on hieno kirja. Kirja menee mielestäni hienosti oppikirjana ja vieläpä sellaisena, joka jaksaa kiinnostaa lasta. Mahtavia kuvia ja paljon asiaa mukavassa muodossa.",
        "urlText": "Mannilainen-kirjablogi, 1.11.2019"
    }
];
export default {
    name: 'IhmeIlmat',
    data() {
        return {
            IhmeIlmatImage,
            quotes,
        }
    }
};
</script>
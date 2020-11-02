<template>
    <vPage>
        <vBookHeader
            name="Ihme ilmat! Miksi ilmasto muuttuu"
            :cover="IhmeIlmatImage"
            ingress="Sarjakuvaa, tarinaa ja perinteistä tietotekstiä yhdistelevä kirja kertoo ilmastonmuutoksesta, sen mekanismeista ja hillitsemisestä."
            coAuthor="Kuvittaja Mari Ahokoivu"
            publisher="Into Kustannus"
            published="2019"
            buyLink="https://kauppa.intokustannus.fi/kirja/ihme-ilmat-miksi-ilmasto-muuttuu/"
        />
        <vNews :newsData="news" bookPage="true" /> 
        <vQuotes :quotes="quotes" />
    </vPage>
</template>

<script>
import IhmeIlmatImage from '@/assets/ihmeilmat/ihme-ilmat-miksi-ilmasto-muuttuu.jpg';


const news = [
    {
        category: 'Kirjat',
        title: "Ihme ilmat! saa jatkoa",
        text: "Vuoden 2021 alussa ilmestyy puuhakirja, josta löytyy tekemistä koko perheelle, parille sukulaiselle ja mahdollisesti myös presidentille. Syksyllä 2021 Lotan ja Kasperin seikkailut jatkuvat, kun mehiläinen pistää Lottaa jalkaan ja onnettomuudesta seuraa Aika matka!",
    },
    {
        category: 'Uutta',
        title: "Yhteistyötä Teatteri Ilmi Ö:n kanssa",
        text: "Teatteri Ilmi Ö tarttuu haasteeseen ja luo Ihme Ilmojen pohjalta osallistavan esityksen koululaisille.",
        link: "https://www.teatteri-ilmio.fi/nosto/ihme-ilmat-forumteatteriesitys-2/"
    },
    {
        category: 'Ulkomailla',
        title: "Ihme ilmat! valloittaa maailmaa",
        text: "Ihme ilmat on julkaistu Suomen lisäksi monissa Euroopan maissa: muun muassa Espanjassa, Italiassa, Puolassa ja Ruotsissa. Keväällä 2021 kirja ylittää jälleen yhden kynnyksen, kun se ilmestyy Yhdysvalloissa nimellä Why does climate change? Tutustu eri kieliversioihin Foreign Rights -sivulla.",
        link: "/foreign"
    },
];

const quotes = [
    {
        "text": "Laura Ertimon ja Mari Ahokoivun lasten tietokirja Ihme ilmat! Miksi ilmasto muuttuu on kompakti ja helppolukuinen tietokirja, joka tyydyttää vielä isommankin yläkoululaisen ja jopa aikuisen tiedonnälkää. Ertimon maantieteilijän koulutus on antanut hyvän lähtökohdan tiivistää tuhtia faktaa helposti omaksuttavaan muotoon. Aloitteleva lapsilukija voi keskittyä Ahokoivun sarjakuvastrippeihin ja päätyy niidenkin avulla pohtimaan olennaisia asioista, joilla voi arkisin valinnoin – yhdessä aikuisten kanssa – vaikuttaa ilmastonmuutokseen.",
        "url": "https://www.hs.fi/kulttuuri/art-2000006281513.html",
        "urlText": "Päivi Heikkilä-Halttunen, Helsingin Sanomat, 23.10.2019"
    },
    {   
        "text": "Ihme ilmat! on siis erinomaisesti kuvitettu, selkeä tietopaketti, joka sopii hyvin myös aikuisen ja lapsen yhdessä tutkittavaksi. Mikäli aihe yhtään kiinnostaa, kirja kannattaa kyllä ehdottomasti ottaa lukulistalle.",
        "url": "https://www.kirjavinkit.fi/arvostelut/ihme-ilmat-miksi-ilmasto-muuttuu/",
        "urlText": "Kirjavinkit, 29.11.2019"
    } ,
    {   
        "text": "Tietokirja vastaa lasten kiperiin kysymyksiin ilmastonmuutoksesta ja kertoo, mitä sille voi tehdä. Maantieteilijä ja tietokirjailija Laura Ertimon teksti saa tukea viime vuonna Oksi-sarjakuvalla ihastuttaneen Mari Ahokoivun kauniista kuvituksesta.",
        "url": "https://www.hs.fi/kulttuuri/art-2000006246737.html",
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
        "url": "https://mutsimedia.fi/lapsen-kanssa/ihme-ilmat-kasittelee-ilmastonmuutosta-seikkailun-ja-tietopaketin-avulla/?fbclid=IwAR3tFCipvGL2sXQuEF-DNc8UC2JUOxv-QyDJ5hbEN_6SXzQE6pQYAflhhiw",
        "urlText": "Mutsimedia, 3.11.2019"
    }, 
    {
        "text":"Melkeinpä tekisi mieli sanoa, että suosittelisin maantieteilijä ja tietokirjailija Laura Ertimon kirjoittamaa ja sarjakuvataiteilija Mari Ahokoivun kuvittamaa lasten kirjaa Ihme Ilmat! – Miksi ilmasto muuttuu erityisesti aikuisille. Niin mainiosti siinä on kerrottu ilmastonmuutoksen periaatteet, syyt ja seuraukset, että lukiessa kyllä aikuinenkin oppii. Kirja ei jää vaan ilmastonmuutoksen pohtimiseen ja asian voivotteluun, vaan siinä esitetään hienosti tapoja, miten jokainen meistä voi vaikuttaa omaan käyttäytymiseensä, jotta meillä kaikilla olisi parempi tulevaisuus. Luonnollisesti kirja on oikein hyvää luettavaa myös lapsille – sanoisin, että 3-4 luokkalaisesta seiskaluokkaan.",
        "urlText": "Tiedettä Tytöille -hanke"
    },
    {
        "text":"Laura Ertimon ja Mari Ahokoivun tietokirja Ihme ilmat! tarjoaa koululaiselle ja miksei aikuisellekin tuhdin tietopaketin ilmastomuutoksen syistä ja seurauksista helposti nieltävässä paketissa.",
        "url": "https://rouvaeriksson.blogspot.com/2019/11/ihme-ilmat-kertoo-ilmastonmuutoksesta.html?m=1&fbclid=IwAR1vkZS81AlTcadlfNDOdjlGyHBaO_goRPYoEoRq6Yys8M0cYnMLWIWuE4U",
        "urlText": "Rouvaeriksson-kirjablogi, 27.11.2019"
    },
    {
        "text":"Laura Ertimon &  Mari Ahokoivun Ihme ilmat! – Miksi ilmasto muuttuu tulisi mielestäni ottaa huomioon Tietokirjallisuuden Finlandiaa jaettaessa.",
        "url": "https://lastenkirjahylly.blogspot.com/2019/11/lastenkirjahyllyn-varjolistalla-suuria.html",
        "urlText": "Lastenkirjahylly-blogi, Varjo-Finlandia, 4.11.2019"
    },
    {
        "text":"Ihme ilmat! – Miksi ilmasto muuttuu -kirja on toteutettu kunnianhimoisesti. Se on ulkonäöltään kaunis ja raikas. Tekstisisällöt on kirjoitettu huolella faktoihin nojaten mutta silti niin popularisoiden, että uskon lastenkin jaksavan niitä lukea ja kuunnella.",
        "url": "http://www.kirsinkirjanurkka.fi/2019/11/laura-ertimo-ja-mari-ahokoivu-ihme.html",
        "urlText": "Kirsin kirjablogi, 17.11.2019"
    },
    {
        "text":"Kirja korostaa kaikkien vaikuttamisen mahdollisuutta ja tärkeyttä. Nuoretkin voivat tehdä arjen valintoja ja herätellä aikuisia ympäristövastuullisuuteen.",
        "urlText": "Lapin Kansa, 28.10.2019"
    },
    {
        "text":"Ihme ilmat! – Miksi ilmasto muuttuu on hieno kirja. Kirja menee mielestäni hienosti oppikirjana ja vieläpä sellaisena, joka jaksaa kiinnostaa lasta. Mahtavia kuvia ja paljon asiaa mukavassa muodossa.",
        "url": "https://mannilainen.blogspot.com/2019/11/laura-ertimo-mari-ahokoivu-ihme-ilmat.html",
        "urlText": "Mannilainen-kirjablogi, 1.11.2019"
    }
];
export default {
    name: 'IhmeIlmat',
    data() {
        return {
            IhmeIlmatImage,
            news,
            quotes,
        }
    }
};
</script>
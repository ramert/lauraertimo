<template>
    <vPage>
        <vBookHeader 
            name="Aika matka!"
            :cover="AikaMatkaImage"
            ingress="Aika matka! on huima seikkailu, joka piirtää esiin ihmisen aiheuttaman luontokadon ja hahmottelee suunnanmuutoksen, joka valaisee tulevaisuuden sateenkaaren väreillä. Sarjakuvaa, tarinoita ja tietotekstejä yhdistelevä teos on suunnattu alakoululaisille ja ihan kaikille. Se on itsenäinen jatko-osa kirjalle Ihme ilmat! Miksi ilmasto muuttuu."
            coAuthor="Kuvittaja Mari Ahokoivu"
            publisher="Into Kustannus"
            published="2021"
            buyLink="https://kauppa.intokustannus.fi/kirja/aika-matka-lotta-kasper-ja-luontokadon-arvoitus/"
        />
        <vNews :newsData="news" bookPage="true" />
        <vQuotes :quotes="quotes" />
    </vPage>
</template>

<script>
import AikaMatkaImage from '@/assets/aikamatka/aika-matkakansi.jpeg';

const news = [
    {
        category: 'Ehdokkuus',
        title: 'Aika matka! Finlandia-palkintoehdokkaana',
        text: 'Laura Ertimon ja Mari Ahokoivun Aika matka! Lotta, Kasper ja luontokadon arvoitus oli ehdolla 2021 Lasten- ja nuortenkirjallisuuden Finlandia-palkinnon saajaksi. "Kokonaisuus on eloisa runsaudensarvi, joka houkuttelee tutkimaan, palaamaan ja vaikuttamaan."',
        link: 'https://kirjasaatio.fi/finlandia/lasten-ja-nuortenkirjallisuuden-finlandia'
    },
    {
        category: 'Mediassa',
        title: '"Aihe on kaikkea muuta kuin kepeä, mutta kokonaisuudesta ei jää silti ahdistunutta oloa."',
        text: '"Vaikka epämukavia asioita sanotaan suoraan, Lotan ja Kasperin toiveikkuus, tarmokkuus ja tiedonjano ovat tarttuvaa laatua." Marjo Jääskä, Demokraatti, 25.11.2021',
        link: 'https://demokraatti.fi/kirja-arvio-lasten-ja-nuortenkirjallisuuden-finlandia-ehdokkaat-tarjoavat-avartavia-ajatuksia-ja-villeja-seikkailuja/'
    },
];

const quotes = [
    {
        text: '"Edeltäjänsä tavoin Aika matka! on onnistunut valitsemaan oikeat esimerkit, jotka sopivat monenikäisille lukijoille. (...) Aika matka! tarjoaa niin selkeää tietotekstiä ja havainnollisia laatikoita, että sitä alkaa ihmetellä, miksi vastaavaa kirjaa ei ole tehty suoraan aikuisille."',
        urlText: "Vesa Rantama, Helsingin Sanomat, 30.11.2021",
        url: 'https://www.hs.fi/kulttuuri/art-2000008430170.html'
    },
    {
        "text": "Äkkiseltään lasten kuvakirjalta näyttävä teos on uskomaton tiivistys lähestulkoon kaikesta, sillä syy-seuraus-suhteet ovat tekijöillä harvinaisen hyvin hallussa. Pidän myös siitä, miten teos havainnollistaa vaikeaselkoisia asioita vertaamalla niitä sekä sanoin että kuvin johonkin arjesta tuttuun.",
        "urlText": " Mari Viertola, Turun Sanomat, 1.12.2021"
    },
    {
        "text": "Maantieteilijä Laura Ertimo osaa yhdistää luonnon ja ihmisen toiminnan loogiseksi kertomukseksi, missä eloisa rakenne ja rytmi liittyvät oivaltaviin sanavalintoihin. Kuvittaja Mari Ahokoivun visualisointi vie osaltaan tarinaa vauhdikkaasti eteenpäin.",
        "urlText": "Ilta-Kanerva Kankaanrinta, Onnimanni 4/2021"
    },
    {
        "text": "Uteliaan lapsen kanssa jokainen aukeama synnyttää vähintään kymmenen kysymystä, joihin pitää ryhtyä etsimään vastauksia. Se on ehkä kirjan tekijöiden tarkoituskin. Teoksen laajuudella on myös suurempi mieli. Koska selvitettävä ja kuvattava ilmiö eli luontokato on laaja ja monimutkainen, sitä tulee myös käsitellä riittävän laajasti.",
        "url": "https://kirjakkoruispellossa.blogspot.com/2021/11/laura-ertimo-ja-mari-ahokoivu-aika.html",
        "urlText": "Kirjakko ruispellossa -blogi 19.11.2021"
    },
    {
        "text": "Tämä luonnon monimuotoisuudesta ja luontokadosta kertova lasten tietokirja on samaan aikaan informatiivinen, värikäs ja hauska. Sarjakuvaa ja tarinaa hyödyntävässä kirjassa on faktat kohdallaan ja ratkaisukeskeinen ote. Ympäristökasvatuksen yliopistonlehtori suosittelee!",
        "url": "https://nekunpartioblogi.blogspot.com/2021/12/mika-kirja-lahjaksi-partiolaiselle.html?m=1",
        "urlText": "Nekun partioblogi, 14.12.2021"
    },
]

export default {
    name: 'AikaMatka',
    data() {
        return {
            AikaMatkaImage,
            news,
            quotes
        }
    }
};

</script>
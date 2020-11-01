<template>
    <vPage>
        <vBookHeader 
            name="Pikkutieto: missä sinä olet?"
            :cover="PikkuTieto"
            coAuthor="Kuvittaja Sanna Pelliccioni"
            publisher="Minerva Kustannus"
            published="2020"
        />
        <section>
            <vParagraph noMargin="true">
                Missä sinä olet? sukeltaa avaruuteen, maapallolle ja lopulta solujen kautta atomien maailmaan. Kirja opettaa hahmottamaan asioiden ja ilmiöiden mittakaavoja. Se näyttää ihmisen osana suurempia kokonaisuuksia ja paljastaa toisaalta sisällemme kätkeytyvät universumit.
            </vParagraph>
        </section>
        <vNews :newsData="news" bookMargin="true" /> 
        <vQuotes :quotes="quotes" />
    </vPage>
</template>

<script>
import PikkuTieto from '@/assets/missa-sina-olet.jpg';

const news = [
    {
        category: 'Kirjat',
        title:"Plop matkaa maailmalle",
        text: "Pikkutieto-kirja kiinnostaa kansainvälisiä kustantajia. Avita julkaisi ensimmäisen Pikkutiedon syksyllä 2020. Kirjan käännösoikeudet on myyty myös Kreikkaan ja Turkkiin.",
        link: "http://www.ahlbackagency.com/book/mini-science-where-are-you/"
    },
];

const quotes = [
    {
        "text": "Välittäjä voi joutua kovillekin jatkokysymysten äärellä. Johdatus on kuitenkin lennokas ja avaa samalla miettimään maailmankaikkeutta ja missä se oikeastaan on – aikuisellekin. Ja kun kirja on Pikku tieto-sarjaa, jatkoakin voi olla luvassa.",
        "url": "http://karivaijarvi.blogspot.com/2020/09/lumotun-maan-kartastossa-irvikissa.html",
        "urlText": "Lastenkulttuurin vinkkari Kai Vaijärvi"
    },
    {
        "text": "Kirja on sopivan lyhyt ja yksinkertainen pienillekin lapsille. Kuvittelisin, että kirja herättää myös isompien lasten mielikuvituksen ja johdattaa mielenkiintoisiin keskusteluihin.",
        "url": "https://lapsennimi.com/2020/08/lasten-tietokirja/",
        "urlText": "Lapsen nimi-blogi"
    },
    {
        "text": "Kirja opettaa hienosti lapselle mittakaavoja ja sitä miten asioita hahmotetaan. (...) Kirjassa on kiva kuvitus sekä mukava tarinankerronta isoista asioista. Suosittelen lämpimästi tutustumaan tähän kirjaan, eritoten perheen pienempien kanssa.",
        "url": "https://nonnula.blogspot.com/2020/03/missa-sina-olet.html",
        "urlText": "Nonnula-blogi / Jonna"
    }
]

export default {
    name: 'PikkuTietoMissa',
    data() {
        return {
            PikkuTieto,
            news,
            quotes
        }
    }
}
</script>
<template>
    <vPage>
        <vBookHeader 
            name="Lumotun maan kartasto - Tarinoita muuttuvalta planeetalta"
            :cover="Cover"
            coAuthor="Kuvittaja Satu Kontinen"
            publisher="Kustantamo S&S"
            published="2020"
            buyLink="https://kustantamo.sets.fi/kirja/lumotun-maan-kartasto/"
        />
        <section>
            <vParagraph noMargin="true">
                Lumotun Maan kartasto on karttakirja ja rakkaudentunnustus kotiplaneetallemme Maalle. Kirjassa on kymmenen satua, jotka ovat totta. Satuja kuvittavat kymmenen karttaa, jotka toteutimme Satu Kontisen kanssa tiiviissä yhteistyössä. Kaikkien karttojen pohjalla on sama Winkel Tripel -projektion mukainen maailmankartta ja kaikkien karttojen sisältö perustuu tosimaailmaan. 
            </vParagraph>
            <vParagraph noMargin="true">
                Satu loi teeman mukaisen visuaalisen ilmeen, joka kutsuu seikkailemaan, haaveilemaan ja kuvittelemaan. Tarjoamme matkoja maisemiin, joihin ei voi matkustaa lentokoneella. Lumotun Maan kartaston kehystarina kertoo karttojen tekemisestä, planeettamme kehityksestä ja paikasta avaruudesta sekä eräästä selvittämättömästä onnettomuudesta.
            </vParagraph>
        </section>
        <vNews :newsData="news" bookPage="true" /> 
        <vQuotes :quotes="quotes" />

    </vPage>
    

</template>

<script>
    import Cover from '@/assets/lumotunmaankartasto/lumotun-maan-kartasto.jpg'

    const news = [
        {
            category: 'Mediassa',
            title:"Kunniamaininta Lumotun Maan kartaston kuvituksesta",
            text: "Satu Kontinen sai kunniamaininnan Lumotun Maan kartaston kuvituksilla kansainvälisessä 3x3 -lehden ammattilaissarjassa. Lumotun Maan kartasto on mukana 17. annaalissa.",
            link: "http://www.3x3mag.com/shows/show17/professional-show/professional-show-no-17-winners "
        },
        {
            category: "Ulkomailla",
            title:"Lumotun Maan kartaston käännösoikeudet myytiin Venäjälle!",
            text: "”We are happy to be the future publisher of this beautiful book. Those maps of the enchanted planet Earth will help children learn a lot more about our planet and will fascinate the adults, too. We feel that such wonderful books may become even more important in this time of uncertainty to show us that life on the planet Earth still goes on and on.”",
            quoter: "Anastasia Filippova, AST Publishing Group, Russia",
            link: "http://www.ahlbackagency.com/2020/04/russian-rights-sold-for-enchanted-planet-earth/"
        }
    ];

    const quotes = [
        {
            "text": "Kun tekstiä kohdellaan interaktiivisena elämyksenä eikä passiivisena lukemisena... niin Laura Ertimon kirja on breikannut jonkun seinän tästä välistä... Jos digitaalinen maailma on johtanut siihen, meidän tekstilajit monimuotoistuvat näin paljon ja meillä on hienoja kirjailijoita, jotka pystyvät luomaan tällaisen tunnelman kirjojen sivuille, niin toivottavasti tämä jatkuu.",
            "url": "https://www.kirjastokaista.fi/pia-goos-lasten-ja-nuorten-tietokirjavinkit/",
            "urlText": "Pia Göös Espoon kirjastosta puhuu Lumotun Maan kartastosta kohdasta 43:30 alkaen."
        },
        {
            "text": "Upea kokonaisuus yhdistääkin kuvaa ja tekstiä tavalla, jolle on turha asettaa ikärajoja.",
            "url": "https://www.hs.fi/kulttuuri/art-2000006479111.html",
            "urlText": "Arla Kanerva, Helsingin Sanomat 18.4.2020"
        },
        {
            "text": "Tässä kirjassa näkyy mainiolla tavalla Laura Ertimon työ maantieteilijänä ja maailmankartastojen tekijänä. Kymmenen tarinaa muodostavat huiman kokonaisuuden maapallomme salaisuuksista.",
            "url": "https://karivaijarvi.blogspot.com/2020/09/lumotun-maan-kartastossa-irvikissa.html?m=0",
            "urlText": "Lastenkulttuurin vinkkari Kai Vaijärvi"
        },
        {
            "text": "Mitä se esilukijani sitten kirjaa luettuaan tuumasi? Hän näki Lumotun maan kartaston olevan sekoitus mielikuvitusta, tietoa ja sarjakuvaa. Kyseessä on hänen mielestään hyvällä tavalla erilainen kirja, sellainen jota lukevat myös he, joita ei lukeminen itsessään niin kiinnostaisi.",
            "url": "http://rouvaeriksson.blogspot.com/2020/08/se-vahan-uudenlainen-karttakirja.html",
            "urlText": "Kirjallisuusblogi Mrs. Eriksson’s Room "
        },
        {
            "text": "Vaikka tarinat kuulostavat sadulta, pystyy niistä silti erottamaan tosiasiat. Kirja houkuttaakin lukijaa tutkimaan näitä asioita enemmän. Meillä ainakin kirja innosti googlaamaan: ”Äiti, voitko katsoa Googlesta, millainen on rubiinikurkkukolibri?",
            "url": "https://www.hurlumhei.fi/lumotun-maan-kartasto/",
            "urlText": "Perheblogi Hurlumhei"
        },
        {
            "text": "Sanataiteilijan kirja saa tuijottelemaan kauas ja miettimään karttoja, joita voisi vielä piirtää, ja tarinoita kartoista, jotka odottavat kertomista.",
            "url": "http://www.sanataidesanoja.fi/?p=1666",
            "urlText": "Sanoja - Oulun lastenkulttuurikeskuksen sanataideblogi"
        },
        {
            "text": "Ertimo kirjoittaa lumoavasti ja vangitsevasti.",
            "url": "https://hemulinkirjahylly.blogspot.com/2020/06/lastenkirjalauantai-laura-ertimo.html",
            "urlText": "Kirjallisuusblogi Hemulin kirjahylly"
        },
        {
            "text": "Se ei niinkään esitä tietoa mahdollisimman tehokkaasti, selvästi ja tylsästi vaan herättää valtavan rakkauden tunteen tietoon. Kirjaa lukiessani en lakkaa ihmettelemästä, miten lumoavalla planeetalla elän.",
            "url": "https://kuiske.fi/mina-luen-timo-harju/",
            "urlText": "Timo Harju, Kulttuurimedia Kuiske 2.7.2020"
        }
    ]
    export default {
        name: 'lumotun',
        data() {
            return {
                Cover,
                news,
                quotes
            }
        }
    };
</script>
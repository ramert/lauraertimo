<template>
    <vPage>
        <vBookHeader 
            ingress="Selkokielinen maapallokirja selvittää planeettamme toimintaa kaasupallon tiivistymisestä tulevaisuuden kynnykselle."
            :cover="Cover"
            coAuthor="Kirjailija MarkusHotakainenn"
            publisher="Opike"
            published="2020"
            buyLink="https://www.opike.fi/"
        />

        <vQuotes :quotes="quotes" color="blue" />
    </vPage>
</template>

<script>
import Cover from '@/assets/Maapallo_etukansi.jpg';
const quotes = [
    {
        "text": "Laura Ertimon ja Markus Hotakaisen kirja Maapallo – planeettamme selkokielellä on helppolukuinen mutta paljon tietoa sisältävä tietokirja Maan historiasta ja nykypäivästä. ",
        "url": "https://www.kehitysvammaliitto.fi/selkokielinen-tietokirja-maapallosta/",
        "urlText": "Kehitysvammaliitto, 01.09.2020"
    }
];
export default {
    name: 'selkomaapallo',
    data() {
        return {
            Cover,
            quotes
        }
    }
};
</script>
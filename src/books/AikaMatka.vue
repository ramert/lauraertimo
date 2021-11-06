<template>
    <vPage>
        <vBookHeader 
            name="Aika matka!"
            :cover="AikaMatkaImage"
            ingress="Suuri seikkailu ympäri maailman ja aikakaudelta toiselle valottaa luontokadon juuria. Sateenkaaren kyydissä löytyy myös ratkaisuja!"
            coAuthor="Kuvittaja Mari Ahokoivu"
            publisher="Into Kustannus"
            published="2021"
            buyLink="https://kauppa.intokustannus.fi/kirja/aika-matka-lotta-kasper-ja-luontokadon-arvoitus/"
        />
    </vPage>
</template>

<script>
import AikaMatkaImage from '@/assets/aikamatka/aika-matkakansi.jpeg';

export default {
    name: 'AikaMatka',
    data() {
        return {
            AikaMatkaImage
        }
    }
};

</script>
<template>
    <div>
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
        <h3>IHME ILMAT! VALLOITTAA MAAILMAA</h3>
        <vParagraph noMargin="true">
            <b>Imelik ilm! Miks kliima muutub </b>
            <a href="https://www.avita.ee/32413"> Avita, Viro 2020</a>
        </vParagraph>
    </div>
</template>

<script>
    import IhmeIlmatImage from '@/assets/ihmeilmat/ihme-ilmat-miksi-ilmasto-muuttuu.jpg';
    export default {
        name: 'IhmeIlmat',
        data() {
            return {
                IhmeIlmatImage
            }
        }
    };
</script>
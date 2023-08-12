<template>
    <vPage>
        <vBookHeader 
            name="Mikä Mahti!"
            :cover="MikaMahtiImage"
            ingress="Lotan ja Kasperin seikkailut jatkuvat yläkoulun puolella. Kun lähimetsä on uhattuna, on esitettävä kiperiä kysymyksiä ihmisten harjoittamasta vallankäytöstä."
            coAuthor="Kuvittaja Mari Ahokoivu"
            publisher="Into Kustannus"
            published="2023"
            buyLink="https://intokustannus.fi/kirja/mika-mahti/"
        />
    </vPage>
</template>

<script>
import MikaMahtiImage from '@/assets/mikamahti/mika-mahtikansi.jpeg';


export default {
    name: 'MikaMahti',
    data() {
        return {
            MikaMahtiImage,
        }
    }
};

</script>
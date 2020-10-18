<template>
    <vPage>
        <vBookHeader 
            name="Pikkutieto: missä sinä olet?"
            ingress="Seikkailijahahmo Plop kuljettaa perheen pienimmät ensimmäiseen suureen seikkailuun."
            :cover="PikkuTieto"
            coAuthor="Kuvittaja Sanna Pelliccioni"
            publisher="Minerva Kustannus"
            published="2020"
        />
    </vPage>
</template>

<script>
import PikkuTieto from '@/assets/missa-sina-olet.jpg';

export default {
    name: 'PikkuTietoMissa',
    data() {
        return {
            PikkuTieto,
        }
    }
    
}
</script>
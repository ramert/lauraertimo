<template>
    <vPage>
        <vBookHeader 
            ingress="Kymmenen lumoavaa tositarinaa ja kymmenen satumaista karttaa."
            :cover="Cover"
            coAuthor="kuvittaja Satu Kontinen"
            publisher="Kustantamo S&S"
            published="2020"
            buyLink="https://kustantamo.sets.fi/kirja/lumotun-maan-kartasto/"
        />
    </vPage>
</template>

<script>
    import Cover from '@/assets/lumotunmaankartasto/lumotun-maan-kartasto.jpg'
    export default {
        name: 'lumotun',
        data() {
            return {
                Cover
            }
        }
    };
</script>
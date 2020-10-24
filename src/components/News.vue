<template>
    <ul class="list navi-spacing">
        <li v-for="news in AllNews" :key="news.id" class="list-item">
            <div class="list-item__content">
                <span class="h1 decoration-text">{{news.category}}</span>
                <span class="h3 list-item__title">{{news.title}} </span>
                <p>{{news.text}}</p>
                <router-link v-if="news.link.startsWith('/')" :to="news.link" tag="a" class="list-item__button">Lue lisää...</router-link>
                <a v-else class="list-item__button" :href="news.link" target="_blank">Lue lisää...</a>
            </div>
        </li>
    </ul>
</template>

<script>
import Vue from "vue";

const AllNews = [
    {
        category: 'Kirjat',
        title: "Lumotun Maan kartasto",
        text: "Kymmenen lumoavaa tositarinaa ja kymmenen satumaista karttaa.",
        link: "/lumotunMaanKartasto"
    },
    {
        category: 'Vierailut',
        title: "Lastenkirja- ja sanataidefestivaali Kirjalitta",
        text: "Kirjalitassa on tänä vuonna teemana taikuus. Nähdään Lumotun Maan työpajassa lauantaina 7.11.!",
        link: "https://kirjalitta.fi/kirjalitta-2020-taikavoimaa-tarinoista/"
    },
    {
        category: 'Mediassa',
        title: "Sirpaletiedon ajassa kirja on anarkistinen esine",
        text: "Lue haastatteluni Sanan arvo -sarjassa.",
        link: "https://www.sanasto.fi/sanan-arvo-sirpaletiedon-ajassa-kirja-on-anarkistinen-esine/"
    },
    {
        category: 'Uutta',
        title: "Yhteistyötä Teatteri Ilmi Ö:n kanssa",
        text: "Teatteri ILMI Ö:n syksyn ensi-iltaesitys on nuorille sunnattu osallistava Ihme Ilmat.",
        link: "https://www.teatteri-ilmio.fi/nosto/ihme-ilmat-forumteatteriesitys-2/"
    },
    {
        category: 'Mediassa',
        title: "Lumotun maan kartastossa Irvikissa törmää galaksiin",
        text: "Kai Vaijärvi esittelee ja arvioi laajasti tuotantoani Lastenkulttuurin vinkkarissa.",
        link: "http://karivaijarvi.blogspot.com/2020/09/lumotun-maan-kartastossa-irvikissa.html"
    }
]

export default {
  name: "vNews",
  data() {
    return {
        AllNews
    };
  }
};
</script>

<style lang="scss" scoped>
.list {
    display: block;

    p {
        margin: 0;
    }
}

.list-item {
    margin-bottom: calc(9 * var(--spacing-unit));

    @media screen and (min-width: 640px) {
        margin-bottom: calc(18 * var(--spacing-unit));
    }

    &__content {
        position: relative;
        display: flex;
        flex-direction: column;
        //padding: var(--typo-spacing-large);
        gap: calc(var(--spacing-unit) * 3);
        grid-template-columns: 1fr;
    }

    &__title {
        position: relative;
    }

    &__button {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

.navi-spacing {
    margin: 5vw;
    @media screen and (min-width: 640px) {
        margin: calc(12 * var(--spacing-unit)) calc(6 * var(--spacing-unit));
        padding: 0 calc(16.5vw - 110px);
    }

    @media screen and (min-width: 1400px) {
        padding-left: 160px;
    }
}


</style>

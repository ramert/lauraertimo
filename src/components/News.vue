<template>
    <ul class="list navi-spacing">
        <li v-for="news in AllNews" :key="news.id" class="list-item">
            <div class="list-item__content">
                <span class="h1 decoration-text">{{news.category}}</span>
                <span class="h3 list-item__title">{{news.title}} </span>
                <p>{{news.text}}</p>
                <a class="list-item__button" :href="news.link" target="_blank">Lue lisää...</a>
            </div>
        </li>
    </ul>
</template>

<script>
import Vue from "vue";

const AllNews = [
    {
        category: 'Kirja',
        title: "Uusin kirjani Ihme ilmat!",
        text: "Tähän jotain jotain jotain muuta?",
        link: "/Ihmeilmat"
    },
    {
        category: 'Esiintyminen',
        title: "Keskustellaan ilmastonmuutoksesta Helsingin kirjamessuilla!",
        text: "Tähän jotain",
        link: "https://kirjamessut.messukeskus.com/ohjelma/45195/mik-ihmeen-ilmastonmuutos/"
    },
    {
        category: 'Haastattelu',
        title: "Haastatteluni Sanan arvo -juttusarjassa.",
        text: "Tähän jotain",
        link: "https://www.sanasto.fi/sanan-arvo-sirpaletiedon-ajassa-kirja-on-anarkistinen-esine/"
    },
    {
        category: 'Uutisia',
        title: "Teatteri Ilmi Ö muokkaa Ihme ilmat! koululaisille suunnatuksi esitykseksi.",
        text: "Tähän jotain",
        link: "https://www.teatteri-ilmio.fi/nosto/ihme-ilmat-forumteatteriesitys-2/"
    },
    {
        category: 'Joku muu',
        title: "Kai Vaijärvi blogi kirjoistani",
        text: "Blogissa Ihme ilmat!, Lumotun Maan kartasto, Pikkutieto-sarjan avaava Missä sinä olet? ja ensimmäinen, Markus Hotakaisen kanssa kirjoittamani selkokirjan Maapallo.",
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

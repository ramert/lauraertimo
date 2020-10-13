<template>
    <ul class="list navi-spacing">
        <li v-for="(news, index) in AllNews" :key="news.id" class="list-item">
            <div class="list-item__content">
                <div>
                    <h3>{{news.title}} </h3>
                    <p>{{news.text}}</p>
                    <a class="list-item__button" :href="news.link" target="_blank">Lue lisää...</a>
                </div>
            </div>
            <div v-if="index !== (AllNews.length - 1)" class="re-content-block__separator"></div>
        </li>
    </ul>
</template>

<script>
import Vue from "vue";

const AllNews = [
    {
        title: "Keskustellaan ilmastonmuutoksesta Helsingin kirjamessuilla!",
        text: "Tähän jotain",
        link: "https://kirjamessut.messukeskus.com/ohjelma/45195/mik-ihmeen-ilmastonmuutos/"
    },
    {
        title: "Haastatteluni Sanan arvo -juttusarjassa.",
        text: "Tähän jotain",
        link: "https://www.sanasto.fi/sanan-arvo-sirpaletiedon-ajassa-kirja-on-anarkistinen-esine/"
    },
    {
        title: "Teatteri Ilmi Ö muokkaa Ihme ilmat! koululaisille suunnatuksi esitykseksi.",
        text: "Tähän jotain",
        link: "https://www.teatteri-ilmio.fi/nosto/ihme-ilmat-forumteatteriesitys-2/"
    },
    {
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
    display: flex;
    flex-direction: column;
    gap: calc(6 * var(--spacing-unit));

    h3 {
        font-family: var(--font-family);
    }

    p {
        margin-top: 0;
    }
}

.list-item {
    &__content {
        //background: #11676C;
        //color: white;
        //border: 3px solid #6C5F11;
        //border-style: solid none;
        display: grid;
        //padding: var(--typo-spacing-large);
        gap: calc(var(--spacing-unit) * 3);
        grid-template-columns: 1fr;
    }

    &__button {
        text-decoration: none;
    }
}
</style>

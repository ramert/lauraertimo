<template>
    <ul class="list" :class="{'list--no-margin': noMargin}">
        <li v-for="news in newsData" :key="news.id" class="list-item">
            <div class="list-item__content">
                <span class="h1 decoration-text">{{news.category}}</span>
                <span class="h3 list-item__title">{{news.title}} </span>
                <vParagraph noMargin="true">{{news.text}}</vParagraph>
                <router-link v-if="news.link.startsWith('/')" :to="news.link" tag="a" class="list-item__button">Lue lisää...</router-link>
                <a v-else class="list-item__button" :href="news.link" target="_blank">Lue lisää...</a>
            </div>
        </li>
    </ul>
</template>

<script>
import Vue from "vue";

export default {
  name: "vNews",
  props: ['newsData', 'noMargin'],
};
</script>

<style lang="scss" scoped>
.list {
    display: block;
    margin: 5vw 0;
    @media screen and (min-width: 640px) {
        margin: calc(12 * var(--spacing-unit)) 0;
    }

    p {
        margin: 0;
    }

    :last-of-type {
        margin-bottom: 0;
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
</style>

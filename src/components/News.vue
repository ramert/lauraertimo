<template>
    <ul class="list" :class="{'list--book-margin': bookPage}">
        <li v-for="news in newsData" :key="news.id" class="list-item">
            <div class="list-item__content">
                <span class="h1 decoration-text" :class="className()">{{news.category}}</span>
                <span class="h3 list-item__title">{{news.title}} </span>
                <div v-if="Array.isArray(news.text)">
                    <vParagraph v-for="(text, index) in news.text" :key="news.title+index" noMargin="true">{{text}}</vParagraph>
                </div>
                <vParagraph v-else noMargin="true">{{news.text}}</vParagraph>

                <span v-if="news.quoter">-{{news.quoter}}</span>
                <div v-if="news.link">
                    <ul v-if="Array.isArray(news.link)">
                        <li v-for="aLink in news.link" :key="aLink.name">
                            <a :href="aLink.link" target="_blank">{{aLink.name}} </a>
                        </li>
                    </ul>
                    <div v-else>
                        <router-link v-if="news.link.startsWith('/')" :to="news.link" tag="a" class="list-item__button">
                            <span v-if="news.linkText">
                                {{news.linkText}}...
                            </span>
                            <span v-else>
                                Lue lisää...
                            </span>
                        </router-link>
                        <a v-else class="list-item__button" :href="news.link" target="_blank">
                            <span v-if="news.linkText">
                                {{news.linkText}}...
                            </span>
                            <span v-else>
                            Lue lisää...</span>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import Vue from "vue";

export default {
  name: "vNews",
  props: ['newsData', 'bookPage', 'color'],
  methods: {
    className() {
        return this.color ? `decoration-text--${this.color}` : '';
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
    display: block;
    margin: 5vw 0;
    @media screen and (min-width: 640px) {
        margin: calc(15 * var(--spacing-unit)) 0;
    }

    .list-item:last-of-type {
        margin-bottom: 0;
    }

    &--book-margin {
        position: relative;
        margin-top: calc(10 * var(--spacing-unit));

        @media screen and (min-width: 640px) {
            margin-top: calc(15 * var(--spacing-unit));
        }
    }
}

.list-item {
    margin-bottom: calc(12 * var(--spacing-unit));

    @media screen and (min-width: 640px) {
        margin-bottom: calc(22 * var(--spacing-unit));
    }

    &__content {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: calc(var(--spacing-unit) * 3);
        grid-template-columns: 1fr;
    }

    &__title {
        position: relative;
    }

    &__button {
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>

<template>
  <div class="header">
    <section class="row row-3-9">
        <vImage v-if="cover" :image="cover" alignLeft="true" :alt="name + ' kansi'"></vImage>
        <div v-else class="placeholder">
            <span v-if="flag" class="placeholder__flag">{{flag}}</span>
        </div>
        <div class="header__text-block">
            <h2 class="header__title h3" v-if="name">{{name}}</h2>
            <div class="info">
                <span class="h4">Kirjailija Laura Ertimo</span>
                <span class="h4" v-if="coAuthor">{{coAuthor}}</span>
                <span class="h4">
                    <a :href="buyLink" target="_blank">{{publisher}}</a>
                </span>
                <span>{{published}}</span>
            </div>
            <div v-if="ingress" class="header__ingress">
                {{ingress}}
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "vBookHeader",
    props: ["name", "title", "cover", "image", "ingress", "published", "publisher", "buyLink", "coAuthor", "flag"]
}
</script>

<style lang="scss" scoped> 
.info {
  display: flex;
  flex-direction: column;
  margin: calc(4 * var(--spacing-unit)) 0;
}

.header {
    margin-top: calc(3 * var(--spacing-unit));

    @media screen and (min-width: 640px) {
        margin-top: calc(6 * var(--spacing-unit));
        background: var(--color-lightlightblue);
    }

    &__text-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: calc(4 * var(--spacing-unit));

        @media screen and (min-width: 640px) {
            margin: 0;
        }
    }

    &__ingress {
        padding: calc(2 * var(--spacing-unit)) 0;
    }

    .h2, .h4 {
        font-family: var(--font-family);
    }

    &__title {
        color: var(--color-blue);
        margin-top: 0;
    }
}

.placeholder {
    position: relative;
    background: var(--color-blue);

    &__flag {
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        font-weight: 600;
        transform: translate(-50%, -50%) rotate(-45deg);
    }
}
</style>
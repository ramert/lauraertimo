<template>
  <div class="header">
    <section class="row row-3-9 row-3-9--mobile">
        <vImage v-if="cover" :image="cover" alignLeft="true" :alt="name + ' kansi'"></vImage>
        <div v-else class="placeholder">
            <span v-if="flag" class="placeholder__flag">{{flag}}</span>
        </div>
        <div>
            <h2 class="header__title h2" v-if="title">{{title}}</h2>
            <div class="info">
                <span class="h4">Kirjailija Laura Ertimo</span>
                <span class="h4" v-if="coAuthor">{{coAuthor}}</span>
                <span class="h4">
                    <a :href="buyLink" target="_blank">{{publisher}}, {{published}}</a>
                </span>
            </div>
            <div class="header__ingress">
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
    margin-top: calc(6 * var(--spacing-unit));

    &__ingress {
        padding: calc(2 * var(--spacing-unit)) 0;
    }

    .h2, .h4 {
        font-family: var(--font-family);
    }

    &__title {
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
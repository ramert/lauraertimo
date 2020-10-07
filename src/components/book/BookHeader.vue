<template>
  <div class="header">
    <section class="row row-3-9">
        <vImage :image="cover"></vImage>
        <div>
            <h2 v-if="title">{{title}}</h2>
            <h2 v-if="coTitle">{{coTitle}}</h2>
            <div class="info">
                <h4>Kirjailija Laura Ertimo</h4>
                <h4 v-if="coAuthor">{{coAuthor}}</h4>
                <h4>
                    <a :href="buyLink" target="_blank">{{publisher}}, {{published}}</a>
                </h4>
            </div>
            <div class="header__ingress">
                {{ingress}}
            </div>
        </div>
    </section>

    <hr class="separator" />
  </div>
</template>

<script>
export default {
    name: "vBookHeader",
    props: ["title", "coTitle", "cover", "image", "ingress", "published", "publisher", "buyLink", "coAuthor"]
}
</script>

<style lang="scss" scoped> 
.info {
  display: flex;
  flex-direction: column;
  margin: calc(4 * var(--spacing-unit)) 0;
}

.header {
    margin-top: calc(4 * var(--spacing-unit));

    &__ingress {
        padding: calc(2 * var(--spacing-unit)) 0;
    }

    h2, h4 {
        font-family: var(--font-family);
    }
}

.separator {
    background-color: var(--color-lightgray);
    color: var(--color-blue);
    min-width: 50%;
    height: 3px;
    border: none;
    margin: 40px 0;
    position: relative;
    overflow: visible;

    &::before {
        font-family: cursive;
        content: '❦';
        display: block;
        width: 20%;
        padding: 0.3em;
        font-size: 2em;
        text-align: center;
        position: absolute;
        top: 0;
        left: 50%;
        background-color: var(--color-background2);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
}

</style>
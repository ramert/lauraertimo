<template>
  <div>
    <h2 v-if="title" class="center">{{title}}</h2>
    <div class="info">
        <div>
            <h3 >Kirjailija Laura Ertimo</h3>
            <h3 v-if="coAuthor">{{coAuthor}}</h3>
        </div>
        <h3>
            <a :href="buyLink" target="_blank">{{publisher}}, {{published}}</a>
        </h3>
    </div>
    <div class="header-ingress">
        <vIngress :image="image">{{ingress}}
        </vIngress>
    </div>
    <hr class="separator" />
  </div>
</template>

<script>
export default {
    name: "vBookHeader",
    props: ["title", "image", "ingress", "published", "publisher", "buyLink", "coAuthor"]
}
</script>

<style lang="scss" scoped> 
.info {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: calc(4 * var(--spacing-unit)) 0;
}

@media screen and (min-width: 640px) {
    .info {
        flex-direction: row;
    }
}

.header-ingress {
    padding: calc(2 * var(--spacing-unit)) 0;
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
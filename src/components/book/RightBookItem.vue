<template>
    <li class="list-item">
        <vImage :image="cover" />
        <div>
            <h3>{{title}} </h3>
            <span>orig. {{orig}}</span>
        </div>
        <div class="list-item__sold">
            <h4>
            Rights sold: 
            </h4>
            <ul v-for="right in rights" :key="right">
                <li class="rights-sold">{{right}}</li>
            </ul>
        </div>
    </li>
</template>

<script>
export default {
    name: "vRightBookItem",
    props: ["title", "orig", "cover", "rights"]
}
</script>

<style lang="scss" scoped> 
  .list-item {
    margin: calc(var(--spacing-unit) * 8) 0;
    display: grid;
    gap: 12px;
    grid-template-columns: 70px 1fr;
    
    &__sold {
      grid-column: 1 / span 2;
    }
  }
  .rights-sold::before {
    content: '\2767';
    color: var(--color-blue);
    padding-right: 0.2em;
  }

</style>
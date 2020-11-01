<template>
    <li class="list-item" :class="{'list-item--no-cover': !cover}">
        <vImage v-if="cover" :image="cover" />
        <div>
            <h3>{{title}} </h3>
            <div>Original title: {{orig}}</div>
            <a class="list-item__button" :href="link" target="_blank">Book details</a>
        </div>
        <div class="list-item__sold">
            <h4>
            Rights sold: 
            </h4>
            <ul>
                <li v-for="right in rights" :key="right.label" class="rights-sold">
                  <a v-if="right.link" target="_blank" href="right.link">
                    {{right.label}}
                  </a>
                  <span v-else>{{right.label}}</span>
                  </li>
            </ul>
        </div>
    </li>
</template>

<script>
export default {
    name: "vRightBookItem",
    props: ["title", "orig", "link", "cover", "rights"]
}
</script>

<style lang="scss" scoped> 
  .list-item {
    margin: calc(var(--spacing-unit) * 6) 0 calc(var(--spacing-unit) * 10);
    display: grid;
    gap: calc(var(--spacing-unit) * 3);
    grid-template-columns: 80px 1fr;

    &--no-cover {
      grid-template-columns: 1fr;
    }
    
    &__sold {
      grid-column: 1 / span 2;
    }

    &__button {
      display: inline-block;
      background: var(--color-blue);
      margin-top: var(--spacing-unit);
      color: white;
      text-decoration: none;
      padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
    }
  }

</style>
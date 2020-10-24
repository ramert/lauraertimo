<template>
  <li>
    <router-link v-if="toLink" :to="toLink" class="book book--link">
      <div class="book__image-wrapper" :class="{'book__image-wrapper--bg': !image && flag}">
        <vImage v-if="image" class="book__image" :image="image" :loadingColor="loadingColor" isThumbnail="true" :alt="name + ' kansi'"/>
        <span v-if="flag" class="book__flag">Tulossa</span>
      </div>
      <div>
        <h2 class="book__link h3 book__link--underline">{{name}}</h2>
        <div>
          <span>Laura Ertimo</span>
          <span v-if="illustrator">ja {{illustrator}}</span>
        </div>
        <span>{{publisher}}</span>
        <p class="book__description">{{description}}</p>
      </div>
    </router-link>
    <div v-else class="book">
      <div class="book__image-wrapper" :class="{'book__image-wrapper--bg': !image && flag}">
        <vImage v-if="image" class="book__image" :image="image" :loadingColor="loadingColor" isThumbnail="true"/>
        <span v-if="flag" class="book__flag">Tulossa</span>
      </div>
      <div>
        <h2 class="book__link h3">{{name}}</h2>
        <div>
          <span>Laura Ertimo</span>
          <span v-if="illustrator">ja {{illustrator}}</span>
        </div>
        <span>{{publisher}}</span>
        <p class="book__description">{{description}}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "book",
  props: ["name", "image", "altText", "toLink", "publisher", "publisherLink", "illustrator", "description", "loadingColor", "flag"],
  methods: {
    routeTransition() {
      this.$router.push(this.link);
    }
  }
};
</script>

<style lang="scss" scoped>
.book {
  display: grid;
  padding: calc(3 * var(--spacing-unit)) 0;
  margin-bottom: calc(3 * var(--spacing-unit));
  color: var(--color-foreground1);
  grid-template-columns: 100px 1fr;
  column-gap: calc(3 * var(--spacing-unit));
  text-decoration: none;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  @media screen and (min-width: 640px) {
    grid-template-columns: 125px 1fr;
    padding-right: calc(4 * var(--spacing-unit));
  }

  &--link {
    &:hover, &:focus {
      background:var(--color-lightblue);
      box-shadow: -12px 0px 0px 0px var(--color-lightblue);
    }
  }

  &__link {
    font-family: var(--font-family);
    text-transform: uppercase;
    margin: 0;

    &--underline {
      color: var(--color-blue);
      text-decoration: underline;
    }
  }

  &__description {
    color: var(--color-blue);
    margin: calc(2* var(--spacing-unit)) 0;
    font-size: 1rem;
  }

  &__publisher {
    color: var(--color-gray);
  }

  &__image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 120px;
    height: 120px;
    margin-bottom: calc(2 * var(--spacing-unit));
    
    @media screen and (min-width: 640px) {
      margin-right: calc(4 * var(--spacing-unit));
      margin-bottom: 0;
    }

    &--bg {
      background: var(--color-lightblue);
    }
  }

  &__image {
    position: relative;
    margin-bottom: calc(2 * var(--spacing-unit));
    box-shadow: -12px -12px 0px 0px var(--color-lightblue);
    @media screen and (min-width: 640px) {
      margin-bottom: 0;
    }
  }

  &__flag {
    position: absolute;
    top: 50%;
    left: 50%;
    color: var(--color-blue);
    font-weight: 600;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>

<template>
  <li class="book">
      <div class="book__image-wrapper" :class="{'book__image-wrapper--bg': !image && flag}">
        <vImage v-if="image" class="book__image" :image="image" :loadingColor="loadingColor" isThumbnail="true"/>
        <div v-else class="book__placeholder"></div>
        <span v-if="flag" class="book__flag">Tulossa</span>
      </div>
      <div>
        <div class="book__info">
          <router-link v-if="toLink" :to="toLink">
            <h2 class="book__link">{{name}}</h2>
          </router-link>
          <h2 v-else class="book__link">{{name}}</h2>
          <a :href="publisherLink" class="book__publisher">{{publisher}}</a>
        </div>
        <div>
          <span>Laura Ertimo</span>
          <span v-if="illustrator">ja {{illustrator}}</span>
        </div>
        <p class="book__description">{{description}}</p>
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
  padding: calc(2 * var(--spacing-unit));
  padding-right: calc(4 * var(--spacing-unit));
  background: white;
  border: 1px solid var(--color-lightgray);

  @media screen and (min-width: 640px) {
    grid-template-columns: 100px 1fr;
  }

  margin: 0 0 calc(2 * var(--spacing-unit));

  &__link {
    margin: 0;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  &__description {
    color: var(--color-blue);
    margin: calc(2* var(--spacing-unit)) 0;
    font-size: 1.1rem;
    font-style: italic;
  }

  &__publisher {
    color: var(--color-gray);
  }

  &__image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    min-height: 90px;
    margin-right: calc(4 * var(--spacing-unit));

    &--bg {
      background: var(--color-blue);
    }
  }

  &__image {
    margin-bottom: calc(2 * var(--spacing-unit));
    @media screen and (min-width: 640px) {
      margin-bottom: 0;
    }
  }

  &__flag {
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    font-weight: 600;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &__placeholder {
    &::before {
      content: '\2767';
      font-size: 4em;
      color: var(--color-blue);
    }
  }
}
</style>

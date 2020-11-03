<template>
  <div class="image" :class="{border: isBorder, hero__image: isHero, 'image--left': alignLeft}" v-lazy-container="{ selector: 'img' }">
    <img :data-src="image" :data-loading="loadingImage" :alt="alt" :class="{thumbnail: isThumbnail, hero: isHero}" /> 
  </div>
</template>

<script>
export default {
  name: "vImage",
  props: ["image", "loadingImage", "isThumbnail", "isBorder", "isHero", 'alt', 'alignLeft'],
  data: function () {
    return {
      isLoaded: false,
    }
  },
  methods: {
    loaded() {
      this.isLoaded = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &--left {
    justify-content: flex-start;
  }
}

.border {
  border: 1px solid var(--color-lightgray)
}

img {
  max-width: 100%;

  &.thumbnail {
    max-height: 120px;
  }

  &.hero {
    max-width: initial;
    max-height: 50vh;

    @media screen and (min-width: 640px) {
      max-width: 100%;
      max-height: initial;
    }

    @media screen and (min-width: 1280px) {
      width: 100%;
    }
  }
}
</style>
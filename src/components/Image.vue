<template>
  <div class="image" :class="{border: isBorder, hero__image: isHero}">
    <transition>
      <img :src="image" :alt="alt" :class="{thumbnail: isThumbnail, hero: isHero}" v-show="isLoaded" @load="loaded"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "vImage",
  props: ["image", "loadingColor", "isThumbnail", "isBorder", "isHero", 'alt'],
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
}

.border {
  border: 1px solid var(--color-lightgray)
}

img {
  transition: all .1s ease;
  opacity: 1;
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
  }
}

img.v-enter, img.v-leave {
  //height: 0;
  opacity: 0;
}
</style>
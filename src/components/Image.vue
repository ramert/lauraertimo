<template>
  <div class="image" :class="{border: isBorder}">
    <transition>
      <img :src="image" :class="{thumbnail: isThumbnail}" v-show="isLoaded" @load="loaded"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "vImage",
  props: ["image", "loadingColor", "isThumbnail", "isBorder"],
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
  max-height: 34vh;

  @media screen and (min-width: 640px) {
    max-width: 100%;
    max-height: initial;
  }

  &.thumbnail {
    max-height: 120px;
  }
}

img.v-enter, img.v-leave {
  height: 0;
  opacity: 0;
}
</style>
<template>
  <div class="image">
    <transition>
      <img :src="image" v-show="isLoaded" @load="loaded"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "vImage",
  props: ["image", "loadingColor"],
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

<style scoped>
.image {
  margin: var(--typo-spacing-unit);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

img {
  max-width: 100%;
  transition: all .3s ease;
  opacity: 1;
}

img.v-enter, img.v-leave {
  height: 0;
  opacity: 0;
}
</style>
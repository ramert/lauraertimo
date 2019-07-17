<template>
  <li class="book">
    <a @click="routeTransition">
      <picture>
        <source media="(max-width: 640px)" :srcset="mobileImage">
        <img class="image" :src="image" :alt="altText">
      </picture>
    </a>
  </li>
</template>

<script>
export default {
  name: "book",
  props: ["link", "image", "mobileImage", "altText", "text"],
  methods: {
    routeTransition() {
      setTimeout(() => {
        this.$router.push(this.link);
      }, 350);
    }
  }
};
</script>

<style scoped>
.image {
  max-width: 100%;
}
.book {
  cursor: pointer;
}
</style>

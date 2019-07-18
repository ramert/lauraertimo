<template>
  <li class="book">
    <a @click="routeTransition">
      <vImage :image="image" :loadingColor="loadingColor"/>
    </a>
  </li>
</template>

<script>
export default {
  name: "book",
  props: ["link", "image", "altText", "text", "loadingColor"],
  methods: {
    routeTransition() {
      this.$router.push(this.link);
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

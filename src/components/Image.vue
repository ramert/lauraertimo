<template>
  <div class="image">
    <img :src="image"/>
  </div>
</template>

<script>
export default {
  name: "vImage",
  props: ["image"]
};
</script>

<style scoped>
.image {
  margin: var(--typo-spacing-unit);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.image img{
  max-width: 100%;
}
</style>
<template>
  <section class="row" :class="{'row-9-3': image}">
      <p class="h2 ingress bold-quote"><slot></slot></p>
      <vImage v-if="image" :image="image" isBorder="true" />
  </section>
</template>

<script>
export default {
  name: "vIngress",
  props: ["image"]
};
</script>
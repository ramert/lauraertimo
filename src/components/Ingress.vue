<template>
  <section class="row-8-4">
      <div class="re-content-block__paragraph">
          <p class="ingress"><slot></slot></p>
      </div>
      <vImage :image="image"/>
  </section>
</template>

<script>
export default {
  name: "vIngress",
  props: ["image"]
};
</script>
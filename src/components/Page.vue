<template>
    <div class="page">
        <vHeader :routeData="routeData"></vHeader>
        <div class="content">
          <slot/>
        </div>
        <vFooter></vFooter>
    </div>
</template>

<script>
import Vue from "vue";
import { EventBus } from "@/common/event-bus.js";

export default {
  name: "vPage",
  data() {
    this.route = EventBus.initial;
    this.path = this.route.meta.parent || EventBus.parent;
    this.routeData = { ...this.route.meta, parent: this.path};
    return {
      routeData: this.routeData,
    };
  },
};
</script>

<style lang="scss" scoped>

.page {
  background: var(--color-background2);
  @media screen and (min-width: 640px) {
    padding: calc(5 * var(--spacing-unit)) 0 0;
  }
}

.content {
  padding: 0 5vw calc( 10 * var(--spacing-unit));
  overflow: hidden;
  position: relative;
}
</style>

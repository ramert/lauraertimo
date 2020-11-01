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
    // Set initial route to set stage
    if (!this.route) {
      this.route = EventBus.initial;
      this.routeData = this.route.meta || {title: "Laura Ertimo"};
      this.isRoot = this.route.path === '/';
    }
    return {
      route: this.route,
      transition: this.transition,
      isRoot: this.isRoot
    };
  },
  watch: {
    $route(to, from) {
      this.routeData = to.meta || "Laura Ertimo";
      this.isRoot = to.path === '/';
    }
  }
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

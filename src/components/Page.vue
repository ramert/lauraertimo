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
  //clip-path: polygon(35px 0, 100% 0%, 100% 100%, 0 100%, 0 35px);
}

.content {
  padding: 0 5vw calc( 6 * var(--spacing-unit));
  overflow: hidden;
  position: relative;

  h3 {
    margin: calc( 6 * var(--spacing-unit)) 0 0;
  }
}
</style>

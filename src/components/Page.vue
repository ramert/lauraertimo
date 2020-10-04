<template>
    <div>
        <button class="curl-top-left" tabIndex="0" @click="$router.go(-1)"></button>
        <vHeader :routeData="routeData"></vHeader>
        <div class="page">
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
  padding: 0 5vw calc( 6 * var(--spacing-unit));
  overflow: hidden;
  position: relative;

  h3 {
    margin: calc( 6 * var(--spacing-unit)) 0 0;
  }
}

.curl-top-left {
  position: absolute;
  z-index: 1;
  text-decoration: none;
  font-size: 2rem;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  background: none;
  color: var(--color-blue);
  border: none;
  height: 50px;
  width: 50px;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}

.curl-top-left:hover:before {
  width: 70px;
  height: 70px;
}

.curl-top-left:focus {
  outline: none;
}

.curl-top-left:focus:before {
  width: 150px;
  height: 130px;
}

.curl-top-left:hover {
  cursor: pointer;
}

.curl-top-left:before {
  pointer-events: none;
  position: absolute;
  content: '';
  height: 40px;
  width: 40px;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, transparent 45%, #aaa 50%, #ccc 50%, #fff 80%);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  transition: 0.2s;
}

</style>

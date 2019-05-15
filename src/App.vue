<template>
  <div id="app" class="app">
    <vHeader :routeData="routeData"></vHeader>
    <section class="main">
      <transition name="re-fade" mode="out-in">
        <router-view class="router-animation"></router-view>
      </transition>
    </section>
    <vFooter></vFooter>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EventBus } from "@/common/event-bus.js";

Vue.component("vHeader", Header);
Vue.component("vFooter", Footer);

export default {
  name: "App",
  mounted() {
    EventBus.$on("route-changed", to => {
      this.route = to;
    });
  },
  data() {
    // Set initial route to set stage
    if (!this.route) {
      this.route = EventBus.initial;
      console.log(this.route.meta);
      this.routeData = this.route.meta || {title: "Laura Ertimo", background: "black"};
    }
    return {
      route: this.route,
      transition: this.transition
    };
  },
  watch: {
    $route(to, from) {
      this.routeData = to.meta || "Laura Ertimo";
    }
  }
};
</script>

<style>
@import "./assets/styles/variables.css";
@import "./assets/styles/base.css";
@import "./assets/styles/typography.css";
@import "./assets/styles/grid.css";

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--color-background2);
}
.app {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 56px 1fr 110px;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

@media screen and (min-width: 640px) {
  .app {
    grid-template-rows: 72px 1fr 110px;
  }
}

.header {
  grid-area: header;
}
.main {
  grid-area: main;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  background: var(--color-background2);
}
.footer {
  grid-area: footer;
}

.re-fade-enter-active,
.re-fade-leave-active {
  transition-duration: 0.75s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.re-fade-enter,
.re-fade-leave-active {
  opacity: 0
}
</style>

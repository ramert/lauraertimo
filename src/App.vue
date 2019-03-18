<template>
  <div id="app" class="app">
    <vHeader :title="title"></vHeader>
    <section class="main">
      <transition name="re-fade">
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
      this.title = this.route.meta || "Laura Ertimo";
    }
    return {
      route: this.route,
      transition: this.transition
    };
  },
  watch: {
    immediate: true,
    $route(to, from) {
      this.title = to.meta || "Laura Ertimo";
    }
  }
};
</script>

<style>
@import "./assets/styles/variables.css";
@import "./assets/styles/base.css";
@import "./assets/styles/typography.css";

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--v-primary);
}
.app {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 58px 1fr 110px;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

@media screen and (min-width: 640px) {
  .app {
    grid-template-rows: 80px 1fr 110px;
  }
}

.header {
  grid-area: header;
}
.main {
  grid-area: main;
  display: flex;
  background: var(--color-background2);
}
.footer {
  grid-area: footer;
}
</style>

<template>
  <div id="app" class="app">
    <vHeader :routeData="routeData"></vHeader>
    <section class="main">
      <div class="background"></div>
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
import Ingress from '@/components/Ingress';
import Paragraph from '@/components/Paragraph';
import Image from '@/components/Image';
import Quote from '@/components/Quote';
import Quotes from '@/components/Quotes';

import { EventBus } from "@/common/event-bus.js";

Vue.component("vHeader", Header);
Vue.component("vFooter", Footer);
Vue.component("vIngress", Ingress);
Vue.component("vImage", Image);
Vue.component("vParagraph", Paragraph);
Vue.component("vQuote", Quote);
Vue.component("vQuotes", Quotes);


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
@import "./assets/styles/alignment.css";

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--color-background2);
}

.background {
  background-image: url('~@/assets/background.png');
  width: 100%;
  top: 0;
  left: 0;
  height:100%; 
  opacity: 0.06;
  position: absolute;
  background-repeat: repeat;
  padding: 0;
  margin: 0;
  z-index:0;
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

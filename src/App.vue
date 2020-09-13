<template>
  <div id="app" class="app">
    <section class="main">
      <vHeader :routeData="routeData"></vHeader>
      <transition name="re-fade" mode="out-in">
        <router-view class="router-animation" :class="{'page': !isRoot}"></router-view>
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
import BookHeader from '@/components/book/BookHeader';
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
Vue.component("vBookHeader", BookHeader);


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

.app {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 52px;
  grid-template-areas:
    "main"
    "footer";
}

.header {
  grid-area: header;
}
.main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
}

.page {
  margin:  54px 5vw 0 ;
  overflow: hidden;
  position: relative;
}

@media screen and (min-width: 640px) {
  .page {
    margin-top: 84px;
  }
}

.footer {
  grid-area: footer;
}

.re-fade-enter-active,
.re-fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.re-fade-enter,
.re-fade-leave-active {
  opacity: 0;
}
</style>

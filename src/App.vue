<template>
  <div id="app" class="app">
    <section class="main">
      <transition name="re-fade" mode="out-in">
        <router-view>
        </router-view>
      </transition>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import Page from "@/components/Page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ingress from '@/components/Ingress';
import BookHeader from '@/components/book/BookHeader';
import Paragraph from '@/components/Paragraph';
import Image from '@/components/Image';
import Quote from '@/components/Quote';
import Quotes from '@/components/Quotes';

import { EventBus } from "@/common/event-bus.js";

Vue.component("vPage", Page);
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
}

.app {
  padding: calc(3 * var(--spacing-unit)) 0;
  overflow-x: hidden;
}

.main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 95vw;
  margin: 0 auto;
  background: var(--color-background2);
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  position: relative;
}
.main:before, .main:after {
  content: "";
  height: 98%;
  position: absolute;
  width: 100%;
  z-index: -1;
}
.main:before {
  background: #fafafa;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  left: -5px;
  top: 4px;
  transform: rotate(-2.5deg);
}
.main:after {
  background: #f6f6f6;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  right: -3px;
  top: 1px;
  transform: rotate(1.4deg);
}

.main__page {
  position: relative;
}

.footer {
  grid-area: footer;
}

.re-fade-leave-active, .re-fade-enter-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.re-fade-enter, .re-fade-leave-active {
  opacity: 0;
}

@media ( prefers-reduced-motion ) {
  .re-fade-enter, .re-fade-leave-active {
    opacity: 1;
  }
}

.hide {
  display: none;
}
</style>

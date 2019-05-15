<template>
  <header class="header">
    <nav class="main-nav" :style="{'background':background, 'transition-duration': duration}">
      <!-- TODO: make this as component -->
      <router-link class="main-nav__nav" to="/">
        <logo></logo>
      </router-link>
      <div class="typewriter" >
        <h1 class="dark" :class="changing? 'clean': 'write'" :style="{'animation-timing-function': timing, 'animation-duration': duration}">{{pageTitle}}</h1>
      </div>
    </nav>
  </header>
</template>

<script>
import Vue from "vue";
import Logo from "@/components/Logo";

export default {
  name: "vHeader",
  props: ["currentRoute", "routeData"],
  data: function () {
    return { 
      pageTitle: '',
      changing: false,
    }
  },
  watch: {
    routeData: {
      handler: function(newVal, oldVal) {
        console.log(oldVal, newVal);
        if (!oldVal) {
          this.pageTitle = newVal.title;
          this.timing = 'steps('+this.pageTitle.length+', end)';
          this.duration = 0.06*this.pageTitle.length +'s';
          this.background = newVal.background;
        }
        else {
          this.changing = true;
          setTimeout(() => {
            const title = newVal.title;
            this.timing = 'steps('+title.length+', end)';
            this.duration = 0.06*title.length +'s';
            this.background = newVal.background;
            this.changing = false;
            this.pageTitle = title;
          }, 0.06*oldVal.title.length*1000-50);
        }
      },
      immediate: true,
    },
  }
};

Vue.component("logo", Logo);
</script>

<style scoped>
.header {
  position: fixed;
  width: 100vw;
  background: var(--color-background2);
  z-index: 1;
}
.typewriter {
  display: inline-block;
  align-self: center;
}
h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0;
}
.write {
  animation: typing 0.75s steps(12, end);
}
.clean{
  animation: untyping 0.75s steps(12, end);
}

.main-nav {
  display: flex;
  padding: calc(3 * var(--spacing-unit));
  align-items: center;
  justify-content: center;
  background: var(--color-background1);
  transition: all 0.75s ease;
  border-radius: 0 0 1em 1em;
}

.main-nav__nav {
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes untyping {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
</style>

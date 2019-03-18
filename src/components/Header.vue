<template>
  <header class="header">
    <nav class="main-nav">
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
  props: ["currentRoute", "title"],
  data: function () {
    return { 
      pageTitle: '',
      changing: false,
    }
  },
  watch: {
    title: {
      handler: function(newVal, oldVal) {
        console.log(oldVal, newVal);
        if (!oldVal) {
          this.pageTitle = newVal;
          this.timing = 'steps('+newVal.length+', end)';
          this.duration = 0.06*newVal.length +'s';
        }
        else {
          this.changing = true;
          setTimeout(() => {
            this.timing = 'steps('+newVal.length+', end)';
            this.duration = 0.06*newVal.length +'s';
            this.changing = false;
            this.pageTitle = newVal;
          }, 0.06*oldVal.length*1000-50);
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
  position: relative;
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

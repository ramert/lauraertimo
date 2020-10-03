<template>
  <header class="header" :class="{'hide': isRoot}">
    <nav class="main-nav" :style="{'background':background}">
      <!-- TODO: make this as component -->
      <button v-if="!isRoot" class="main-nav__nav" tabIndex="0" @click="$router.go(-1)">
        &lt;
      </button>
      <div class="title">
        <h1 class="dark">{{pageTitle}}</h1>
        <h3 class="dark" v-if="pageSubTitle"> - {{pageSubTitle}}</h3>
      </div>
    </nav>
  </header>
</template>

<script>
import Vue from "vue";

export default {
  name: "vHeader",
  props: ["routeData"],
  data: function () {
    return { 
      pageTitle: '',
      pageSubTitle: undefined
    }
  },
  watch: {
    routeData: {
      handler: function(newVal, oldVal) {
        this.isRoot = window.location.pathname === "/";
        this.background = newVal.background;
        this.pageTitle = newVal.title;
        this.pageSubTitle = newVal.subTitle;
      },
      immediate: true,
    },
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: var(--color-blue);
  transition: all 0.3s ease-in-out;
  transform: translateY(0);

  &.hide {
    transform: translateY(-100%);
  }
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.title h3 {
  margin-left: var(--spacing-unit);
  margin-top: var(--spacing-unit);
}
h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0;
}

.main-nav {
  position: relative;
  display: flex;
  padding: calc(3 * var(--spacing-unit)) 0 ;
  align-items: center;
  justify-content: center;
  background: var(--color-blue);
}

.main-nav__nav {
  position: absolute;
  text-decoration: none;
  font-size: 2rem;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  background: none;
  color: white;
  border: none;
  // TODO - add focus style
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>

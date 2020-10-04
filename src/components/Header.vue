<template>
  <header class="header" :class="{'hide': isRoot}">
    <nav class="main-nav">
        <h1>{{pageTitle}}</h1>
        <h3 v-if="pageSubTitle">{{pageSubTitle}}</h3>
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
    width: 100%;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--color-blue);  
  }

  .title h3 {
    margin-left: var(--spacing-unit);
    margin-top: var(--spacing-unit);
  }

  h1 {
    margin: 0;
  }

  .main-nav {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: calc(3 * var(--spacing-unit)) 0 ;
    color: var(--color-blue);
    align-items: center;
    justify-content: center;
  }

</style>

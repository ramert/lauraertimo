<template>
  <header class="header" :class="{'hide': isRoot}">
    <nav class="main-nav title">
        <h1 >{{pageTitle}}</h1>
        <h3 v-if="pageSubTitle">{{pageSubTitle}}</h3>
    </nav>
    <router-link class="back" :to="parent">&lt;</router-link>
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
        this.parent = newVal.parent
      },
      immediate: true,
    },
  }
};
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    color: var(--color-blue);  
    position: relative;
  }

  .title {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: calc(3 * var(--spacing-unit)) 0 ;
    color: var(--color-blue);
    align-items: center;
    justify-content: center;

    h1 {
      margin: 0;
    }

    h3 {
      margin-left: var(--spacing-unit);
      margin-top: var(--spacing-unit);
    }
  }
  .back {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-family: var(--font-family-header);
    font-weight: 600;
    font-size: 1.5rem;
    top: 0px;
    left: 0px;
    padding: 10px;
    height: 100%;
    background: none;
    color: var(--color-blue);
    border: none;
    cursor: pointer;
    text-decoration: none;

    &:focus {
      outline: none;
    }

    @media screen and (min-width: 640px) {
      font-size: 3rem;
      padding: 20px 30px;
    }
}

</style>

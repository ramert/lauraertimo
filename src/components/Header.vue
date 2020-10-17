<template>
  <header class="header" :class="{'hide': isRoot}">
    <nav class="header__title">
        <router-link class="header__back" :to="parent">V</router-link>
        <h1 class="header__title-text">
          <span class="h1">{{pageTitle}}</span>
          <span class="h3" v-if="pageSubTitle">{{pageSubTitle}}</span>
        </h1>
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

    &__title {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: calc(3 * var(--spacing-unit));
      color: var(--color-blue);
      align-items: center;
      justify-content: center;
    }

    &__title-text {
      margin: 0 auto;
      padding: 0 calc(6* var(--spacing-unit));
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    &__back {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(90deg);
        font-family: var(--font-family-header);
        font-weight: 600;
        font-size: 1.5rem;
        padding: 10px;
        background: none;
        color: var(--color-blue);
        border: none;
        cursor: pointer;
        text-decoration: none;

        &:focus {
          outline: none;
        }

        @media screen and (min-width: 640px) {
          font-size: 2.25rem;
          padding: 20px 30px;
        }
    }
}

</style>

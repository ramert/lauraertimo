<template>
  <header class="header">
    <nav class="header__title">
        <router-link class="header__back" :to="routeData.parent">&lt;</router-link>
        <h1 class="header__title-text">
          <span class="h1">{{routeData.title}}</span>
          <span class="h3" v-if="routeData.subTitle">{{routeData.subTitle}}</span>
        </h1>
    </nav>
  </header>
</template>

<script>
import Vue from "vue";

export default {
  name: "vHeader",
  props: ["routeData"]
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
        line-height: 1.3em;
        top: 0;
        left: 0;
        font-family: var(--font-family-header);
        font-weight: 600;
        font-size: 1.75rem;
        padding: 10px;
        background: none;
        color: var(--color-blue);
        border: none;
        cursor: pointer;
        text-decoration: none;

        &:focus {
          outline: none;
          box-shadow: none;
        }

        @media screen and (min-width: 640px) {
          font-size: 3rem;
          padding: 20px 30px;
        }
    }
}

</style>

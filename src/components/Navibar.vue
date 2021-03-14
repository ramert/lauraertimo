<template>
  <div class="button-wrapper" role="group" :class="{light: light}">
    <router-link to="/books" tag="button" class="button">
      <span class="h3 button-text">Kirjat</span>
    </router-link>
    <router-link to="/author" tag="button" class="button">
      <span class="h3 button-text">Tietokirjailija</span>
    </router-link>
    <router-link to="/media" tag="button" class="button">
      <span class="h3 button-text">Mediassa</span>
    </router-link>
    <router-link to="/foreign" tag="button" class="button">
      <span class="h3 button-text">Foreign rights</span>
    </router-link>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "navibar",
  props: ['light']
};
</script>

<style lang="scss" scoped> 
.button-wrapper {
  display: block;
  border-bottom: 2px solid var(--color-blue);
  margin-bottom: calc( 12 * var(--spacing-unit));

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: calc( 18 * var(--spacing-unit));
  }
}

.button-text {
  display: flex;
  color: inherit;
  align-items: center;
  position: relative;
  flex-direction: row;
  font-weight: 600;;
  letter-spacing: 1px;
  padding: calc(3 * var(--spacing-unit)) 0;
  margin: 0 auto;
}

.button {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 0 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  background: inherit;
  font-family: var(--font-family-sub-header);
  padding: 0 5vw;
  color: var(--color-blue);
  border: none;
  
  font-weight: 600;
  font-size: 1.2em;
  transition: all 0.3s ease-out;

  @media screen and (min-width: 768px) {
      border-left: 2px solid var(--color-blue);
      justify-content: center;
      padding: calc(2* var(--spacing-unit)) calc(4* var(--spacing-unit));

      &:first-of-type {
        border-left: none;
      }
  }

  &__separator {
    background-color: var(--color-blue);
    width: 100%;
    height: 2px;
    border: none;
    margin: var(--spacing-unit) 0;
    position: relative;
    overflow: visible;
  }

  &:hover {
    color: var(--color-background2);
    background-color: var(--color-blue);
  }

  &:focus {
    outline: none;
    box-shadow: inset 0px -10px 0 0px var(--color-lightblue);
  }

    &:hover {
    color: var(--color-background2);
    background-color: var(--color-blue);
    box-shadow: none;
  }
}

.light {
  &.button-wrapper {
    padding: 0;
    box-shadow: none;
    margin-bottom: 0;
    border-bottom: none;
  }
  .button {
    margin: 0;
    background: inherit;
    color: white;
    padding: 0;
    border-left: none;

    &:hover {
      background: black;
    }
  }
}

</style>

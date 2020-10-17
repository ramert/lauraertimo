<template>
  <div class="button-wrapper" role="group" :class="{light: light}">
    <router-link to="/books" tag="button" tabIndex="0" class="button">
      <h3 class="button-text">Kirjat</h3>
    </router-link>
    <router-link to="/author" tag="button" tabIndex="0" class="button">
      <h3 class="button-text">Tietokirjailija</h3>
    </router-link>
    <router-link to="/foreign" tag="button" tabIndex="0" class="button">
      <h3 class="button-text">Foreign rights</h3>
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
  box-shadow: -2px 5px 5px -5px rgba(0,0,0,0.46);
  margin-bottom: calc( 18 * var(--spacing-unit));

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
  border-left: 2px solid var(--color-blue);
  font-weight: 600;
  font-size: 1.2em;
  transition: all 0.3s ease-out;

  &:first-of-type {
    border-left: none;
  }

  @media screen and (min-width: 768px) {
      justify-content: center;
      padding: calc(2* var(--spacing-unit)) calc(4* var(--spacing-unit));
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

  &:hover, &:focus {
    color: var(--color-background2);
    background-color: var(--color-blue);
  }

  &:focus {
    outline: none;
  }
}

.light {
  &.button-wrapper {
    padding: 0;
    box-shadow: none;
    margin-bottom: 0;
  }
  .button {
    margin: 0;
    background: inherit;
    color: white;
    padding: 0;

    &:hover, &:focus {
      background: black;
    }
  }
}

</style>

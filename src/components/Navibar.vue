<template>
  <div class="button-wrapper" role="group">
    <router-link to="/books" tag="button" tabIndex="0" class="button">
      <div class="button__separator"></div>
      <h3 class="button-text">Kirjat</h3>
      <div class="button__separator "></div>
    </router-link>
    <!--<router-link to="/Blog" tag="button" class="button">Blogi</router-link>-->
    <router-link to="/author" tag="button" tabIndex="0" class="button">
      <div class="button__separator"></div>
      <h3 class="button-text">Tietokirjailija</h3>
      <div class="button__separator"></div>
    </router-link>
    <router-link to="/foreign" tag="button" tabIndex="0" class="button">
      <div class="button__separator"></div>
      <h3 class="button-text">Foreign rights</h3>
      <div class="button__separator"></div>
    </router-link>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "navibar",
};
</script>

<style lang="scss" scoped> 
.button-wrapper {
  display: block;
  background: var(--color-background2);

  @media screen and (min-width: 640px) {
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
.button-text::before {
  content: '\2767';
  font-size: 2em;
  padding-right: 0.2em;
}
.button-text::after {
  content: '\2767';
  font-size: 2em;
  padding-right: 0.2em;
  transform: rotateY(180deg);
}

.button {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 0 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  font-family: var(--font-family-sub-header);
  padding: 5vw;
  color: var(--color-blue);
  background: var(--color-background2);
  border: none;
  font-weight: 600;
  font-size: 1.2em;
  transition: all 0.3s ease-out;

  @media screen and (min-width: 640px) {
      justify-content: center;
      padding: calc(6 * var(--spacing-unit));
  }

  &__separator {
    background-color: var(--color-blue);
    width: 100%;
    height: 3px;
    border: none;
    margin: var(--spacing-unit) 0;
    position: relative;
    overflow: visible;
  }

  &:hover, &:focus {
    color: var(--color-background2);
    background-color: var(--color-blue);
    .button__separator {
      background-color: var(--color-background2);
    }
  }
}



.button:focus {
  outline: none;
}
</style>

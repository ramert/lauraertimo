<template>
  <div class="button-wrapper" role="group" :class="{light: light}">
    <router-link to="/books" tag="button" tabIndex="0" class="button">
      <div v-if="!light" class="button__separator"></div>
      <h3 class="button-text">Kirjat</h3>
      <div v-if="!light" class="button__separator button__separator--hide"></div>
    </router-link>
    <!--<router-link to="/Blog" tag="button" class="button">Blogi</router-link>-->
    <router-link to="/author" tag="button" tabIndex="0" class="button">
      <div v-if="!light" class="button__separator"></div>
      <h3 class="button-text">Tietokirjailija</h3>
      <div v-if="!light" class="button__separator button__separator--hide"></div>
    </router-link>
    <router-link to="/foreign" tag="button" tabIndex="0" class="button">
      <div v-if="!light" class="button__separator"></div>
      <h3 class="button-text">Foreign rights</h3>
      <div v-if="!light" class="button__separator"></div>
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
  padding: calc(4* var(--spacing-unit)) 0;
  display: block;

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
  padding: 0 5vw;
  color: var(--color-blue);
  background: inherit;
  border: none;
  font-weight: 600;
  font-size: 1.2em;
  transition: all 0.3s ease-out;

  @media screen and (min-width: 768px) {
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

    /*&--hide {
      @media screen and (max-width: 640px) {
        display: none;
      }
    }*/
  }

  &:hover, &:focus {
    color: var(--color-background2);
    background-color: var(--color-blue);
    .button__separator {
      background-color: var(--color-background2);
    }
  }

  &:focus {
    outline: none;
  }
}

.light {
  &.button-wrapper {
    padding: 0;
  }
  .button {
    color: white;
    padding: 0;

    &:hover, &:focus {
      background: var(--color-gray);
    }
  }
}

</style>

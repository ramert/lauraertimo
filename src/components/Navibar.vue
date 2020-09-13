<template>
  <ul class="button-wrapper">
    <router-link to="/books" tag="li" class="button">
      <span class="button-text">Kirjat</span></router-link>
    <!--<router-link to="/Blog" tag="button" class="button">Blogi</router-link>-->
    <router-link to="/author" tag="li" class="button"><span class="button-text">Tietokirjailija</span></router-link>
    <router-link to="/foreign" tag="li" class="button"><span class="button-text">Foreign rights</span></router-link>
  </ul>
</template>

<script>
import Vue from "vue";

export default {
  name: "navibar",
};
</script>

<style lang="scss" scoped> 
.button-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  background: var(--color-background2);

  @media screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.button-text {
  display: block;
  margin-left: calc(2 * var(--spacing-unit));
}

.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;;
  flex: 1 0 auto;
  margin: 0;
  cursor: pointer;
  font-family: var(--font-family-sub-header);
  min-width: 100px;
  padding: calc(4 * var(--spacing-unit));
  color: var(--color-blue);
  background: var(--color-background2);
  border: none;
  font-weight: 600;
  font-size: 1.2em;
  transition: all 0.3s ease-out;

  @media screen and (min-width: 640px) {
      padding: calc(6 * var(--spacing-unit));

  }
}

.button::before {
  content: '\2767';
  font-size: 2em;
}

.button:hover {
  color: var(--color-background2);
  background-color: var(--color-blue);
}

.button:focus {
  outline: none;
}
</style>

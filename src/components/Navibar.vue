<template>
  <div class="button-wrapper">
    <router-link to="/books" tag="button" class="button">Kirjat</router-link>
    <!--<router-link to="/Blog" tag="button" class="button">Blogi</router-link>-->
    <router-link to="/author" tag="button" class="button">Tietokirjailija</router-link>
  </div>
</template>

<script>
export default {
  name: "navibar"
};
</script>

<style scoped>
.button-wrapper {
  display: flex;
  background: var(--color-background2);
}

.button {
  flex: 1 0 auto;
  margin: 0;
  cursor: pointer;
  font-family: var(--font-family);
  min-width: 100px;
  padding: calc(5 * var(--spacing-unit));
  background: var(--color-green);
  color: var(--color-foreground2);
  border: none;
  font-weight: 600;
  font-size: 1.2em;
  border-radius: 1em 1em 0 0;
}

.button:focus {
  outline: none;
}
</style>

<template>
  <div class="quote">
    <div class="quote__text">
      <slot />
    </div>
    <div class="quote__reference">
      <a v-if="link" :href="link" target="_blank">{{linkText}}</a>
      <span v-else>{{linkText}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vQuote',
    props: ['linkText', 'link', 'color']
  }
</script>

<style scoped>
.quote {
  display: flex;
  flex-direction: column;
  padding: var(--typo-spacing-large) 0;
  margin-bottom: var(--typo-spacing-large);
}

.quote__text {
  position: relative;
  max-width: var(--paragraph-max-width);
  margin: 0 auto;
}

.quote__reference {
  padding-top: calc( 2* var(--spacing-unit));
  align-self: flex-end;
}

.quote__text::before {
  font-family: var(--font-family-header);
  color: var(--color-blue);
  position: absolute;
  content: "\201D";
  opacity: 0.15;
  font-size: 8em;
  line-height: 1;
  top: -35px;
  left: -30px;
}
</style>
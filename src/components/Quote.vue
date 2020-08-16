<template>
  <div class="quote" :class="color? 're-'+color: ''">
    <div class="quote__text">
      <slot />
    </div>
    <div class="quote__reference">
      <a :href="link" target="_blank">{{linkText}}</a>
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
  color: white;
  padding: var(--typo-spacing-large);
  margin-bottom: var(--typo-spacing-large);
}

.quote__text {
  max-width: var(--paragraph-max-width);
  margin: 0 auto;
}

.quote__reference {
  margin-top: var(--typo-spacing-large);
  align-self: flex-end;
}

.quote__reference a {
  color: white;
}

.quote__text::before, .quote__text::after {
  color: white;
  font-style: italic;
  content: '"';
  font-size: 3em;
  line-height: 0.1em;
  margin-right: 0.2em;
  vertical-align: -0.4em;

}
</style>
<template>
   <ul class="margin-l-top-bottom">
    <li v-for="quote in quotes" class="quote-list" :key="quote.urlText">
      <vQuote :link="quote.url" :linkText="quote.urlText" :color="color">
        {{ quote.text }}
      </vQuote>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'vQuotes',
    props: ['quotes', 'color']
  }
</script>

<style scoped>
.quote-list {
  max-width: 650px;
}

.quote-list:nth-child(even) {
  margin-left: auto;
}

.quote-list:nth-child(odd) {
  margin-right: auto;
}
</style>
<template>
  <div class="re-content-block__paragraph" :class="{'re-content-block__paragraph--no-margin': noMargin}">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'vParagraph',
    props: ['noMargin']
  };
</script>
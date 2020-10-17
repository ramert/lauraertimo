<template>
  <div class="re-content-block__paragraph" :class="{'re-content-block__paragraph--no-margin': noMargin, 're-content-block__paragraph--no-margin-top': noMarginTop}">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'vParagraph',
    props: ['noMargin', 'noMarginTop']
  };
</script>
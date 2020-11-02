<template>
  <footer class="footer">
    <vNaviBar light="true"/> 
    <div class="col-sm-12">
      <ul class="footer-links">
        <li class="footer-link">
          <a href="https://www.facebook.com/lauraertimokirjailija/" target="_blank">Facebook</a>
        </li>
        <li class="footer-link">
          <a href="https://www.instagram.com/lauraertimo/" target="_blank">Instagram</a>
        </li>
      </ul>
      <div class="footer__copywrite">
          <span>Copyright © 2020, Laura Ertimo</span>
          <span class="hide-mobile">, </span>
          <span class="footer-link footer-link--no-margin">Valokuvat: <a href="https://www.annaautio.com">Anna Autio</a></span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "vFooter"
};
</script>

<style scoped lang="scss">

.hide-mobile {
  display: none;
  @media screen and (min-width: 640px) {
    display: inline;
  }
}
.footer {
  background: var(--color-background1);
  padding: 0 calc(2 * var(--spacing-unit));
  position: relative;
  color: white;

  &__copywrite {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding-bottom: calc(6 * var(--spacing-unit));
  }
}
.footer-links {
  display: flex;
  padding: calc(6 * var(--spacing-unit));
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.footer-link {
  font-size: 1rem;
  margin: 0 calc(2 * var(--spacing-unit));

  & a {
    color: white;
  }

  &--no-margin {
    margin: 0;
  }
}
</style>

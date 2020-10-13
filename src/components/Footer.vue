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
    </div>
  </footer>
</template>

<script>
export default {
  name: "vFooter"
};
</script>

<style scoped>
.footer {
  background: var(--color-background1);
  position: relative;
}
.footer-links {
  display: flex;
  padding: calc(6 * var(--spacing-unit));
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.footer-link {
  font-size: 1.2rem;
  margin: 0 calc(2 * var(--spacing-unit));
}

.footer-link a {
  color: white;
}
</style>

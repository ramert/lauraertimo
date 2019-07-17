<template>
  <footer class="footer">
    <naviBar></naviBar>
    <div class="col-sm-12">
      <ul class="footer-links">
        <li class="footer-link">
          <a href="https://fi.linkedin.com/in/laura-ertimo-033a394" target="_blank">LinkedIn</a>
        </li>
        <li class="footer-link">
          <a href="https://www.instagram.com/lauraertimo/" target="_blank">Instagram</a>
        </li>
        <li class="footer-link">
          <a href="mailto:laura.ertimo@gmail.com" target="_blank">Email</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import Vue from "vue";
import Navibar from "@/components/Navibar";

Vue.component("naviBar", Navibar);

export default {
  name: "vFooter"
};
</script>

<style scoped>
.footer {
  position: relative;
}
.footer-links {
  display: flex;
  background: var(--color-background1);
  padding: calc(4 * var(--spacing-unit));
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.footer-link {
  margin: 0 calc(2 * var(--spacing-unit));
}
</style>

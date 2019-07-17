<template>
  <div class="home">
    <ul class="center-wrapper">
      <book
        link="vesi"
        alt-text="Vesi-kirja"
        text="Vesi-kirja"
        :image="VesiImage"
        :mobileImage="VesiImage"
      ></book>
      <book link="yo" alt-text="Yo-kirja" text="Yö-kirja" :image="YoImage" :mobileImage="YoImage"></book>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import Book from "@/components/Book";
import YoImage from "@/assets/yo/kansi-embedded.png";
import VesiImage from "@/assets/vesi/kansi-embedded.png";

export default {
  name: "Home",
  data() {
    return {
      VesiImage,
      YoImage
    };
  }
};

Vue.component("book", Book);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  position: relative;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}
.center-wrapper {
  display: inline-grid;
  grid-template-columns: 1fr;
}

@media screen and (min-width: 640px) {
  .center-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

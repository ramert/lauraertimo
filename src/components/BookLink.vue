<template>
  <li>
    <router-link v-if="toLink" :to="toLink" class="book-link">
      <book-content
        :name="name"
        :image="image"
        :illustrator="illustrator"
        :publisher="publisher"
        :publisherLink="publisherLink"
        :description="description"
        :flag="flag"
        :isLink="true"
      />
    </router-link>
    <a v-if="extLink" :href="extLink" target="_blank" rel="noreferrer" class="book-link">
      <book-content
        :name="name"
        :image="image"
        :illustrator="illustrator"
        :publisher="publisher"
        :publisherLink="publisherLink"
        :description="description"
        :flag="flag"
        :isLink="true"
      />
    </a>
    <div v-if="!toLink && !extLink">
      <book-content
        :name="name"
        :image="image"
        :illustrator="illustrator"
        :publisher="publisher"
        :publisherLink="publisherLink"
        :description="description"
        :flag="flag"
        :isLink="false"
      />
    </div>
  </li>
</template>

<script>
import Vue from "vue";
import BookContent from "@/components/BookContent";
Vue.component("bookContent", BookContent);
export default {
  name: "book",
  props: ["name", "image", "altText", "toLink", "extLink", "publisher", "publisherLink", "illustrator", "description", "loadingColor", "flag"],
  methods: {
    routeTransition() {
      this.$router.push(this.link);
    }
  }
};
</script>

<style lang="scss" scoped>
.book-link {
  text-decoration: none;
}
</style>

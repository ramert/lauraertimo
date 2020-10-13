<template>  
    <div class="home">
      <div class="hero"> 
        <h1 class="hero__text">Kirjallisia matkoja ympäröivään maailmaan ja saavuttamattomiin todellisuuksiin</h1>
        <vImage :image="Laura" isHero="true"/>
      </div>
      <section>
        <h2 class="hero__title navi-spacing">
          <span>Laura Ertimo</span>
          <span class="hero__subtitle">Tietokirjailija ja maantieteilijä</span>
        </h2>
      </section>
      <vNaviBar/> 
      <vNews />  
      <vFooter />
    </div>
</template>

<script>
import Vue from "vue";
import Navibar from "@/components/Navibar";
import News from "@/components/News";
import Laura from '@/assets/Laura-home.jpg';

Vue.component("vNaviBar", Navibar);
Vue.component('vNews', News)

export default {
  name: "Home",
  data() {
    return {
      Laura
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  width: 100%;
  margin: 0 auto;
}

.hero {
  position: relative;
  max-height: calc(100vh - 200px);
  overflow: hidden;
  max-width: 100%;


  &__text {
    font-family: var(--font-family);
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
    position: absolute;
    width: 40%;
    transform: translateY(-50%);
    color: white;
    right: 5%;
    top: 50%;

    @media screen and (min-width: 640px) {
      top: 60%;
      font-size: 1.8rem;
    }
  }

  &__title {
    font-size: 1.75rem;
    display: flex;
    flex-direction: column;


    @media screen and (min-width: 640px) {
      font-size: 2.5rem;
    }
  }
  &__subtitle {
    font-size: 1.5rem;
    @media screen and (min-width: 640px) {
      font-size: 1.75rem;
    }
  }
}
</style>

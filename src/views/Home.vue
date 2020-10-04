<template>
  <div class="re-content-block">
    <div class="hero"> 
      <h1 class="hero__text">Kirjallisia matkoja ympäröivään maailmaan ja saavuttamattomiin todellisuuksiin</h1>
      <vImage :image="Laura" isHero="true"/>
    </div>
    <section>
      <h2 class="hero__title">
        <span>Laura Ertimo</span>
        <span class="hero__subtitle">Tietokirjailija ja Maantieteilijä</span>
      </h2>
    </section>
    <naviBar/>      
  </div>

</template>

<script>
import Navibar from "@/components/Navibar";
import Laura from '@/assets/Laura-home.jpg';

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
  display: flex;
  position: relative;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
}

.hero {
  position: relative;
  max-height: calc(100vh - 200px);
  overflow: hidden;
  max-width: 100vw;


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
    margin: 5vw;

    @media screen and (min-width: 640px) {
      font-size: 2.5rem;
      margin: calc(12 * var(--spacing-unit)) calc(6 * var(--spacing-unit));
      padding-left: calc(16.5vw - 95px);
    }
    @media screen and (min-width: 1400px) {
      padding-left: 160px;
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

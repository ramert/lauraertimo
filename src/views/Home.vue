<template>
  <div class="re-content-block">
    <div class="hero"> 
      <h2 class="hero__text hero__text--left">Laura  <br/>Ertimo</h2>
      <h2 class="hero__text hero__text--right">Tietokirjailija <br/>ja <br/>Maantieteilijä</h2>
      <vImage :image="Laura" isHero="true"/>
    </div>
    <section>
      <div class="re-content-block__paragraph re-content-block__paragraph--center">
          <h2 class="bold-quote">Kirjallisia matkoja ympäröivään maailmaan ja saavuttamattomiin todellisuuksiin.</h2>
      </div>
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
  h2 {
    font-size: 1rem;
  }

  @media screen and (min-width: 640px) {
    & h2 {
      font-size: 1.5rem;

      }
  }

  &__text {
    background: rgba(0,0,0,0.1);
    text-align: center;
    position: absolute;
    width: 30%;
    top: 50%;
    transform: translateY(-50%);
    color: white;

    &--left {
      left: 5%;
    }

    &--right {
      right: 5%;
      top: 50%;
    }
  }
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

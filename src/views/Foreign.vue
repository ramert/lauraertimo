<template>
  <vPage>
    <section>
        <div class="re-content-block__paragraph re-content-block__paragraph--center">
          <h2 class="ingress ingress--center">Non fiction for children and the whole family</h2>
        </div>
      </section>
      <section class="row row-8-4">
        <div>
        <vParagraph>
            <div>
          I am a geographer and full time author specialising in children’s non fiction. <a href="http://www.ahlbackagency.com/author/laura-ertimo/">Elina Ahlbeck Literary Agency</a> represents my work outside Finland.
            </div>
            <div>
                Feel free to contact the <a href="http://www.ahlbackagency.com/author/laura-ertimo/">agency</a> for more information and reading material:
            </div>
        </vParagraph>
        <vParagraph>
        <h2>Sold Foreign rights</h2>
            <ul>
              <li>
                <h3>Weird Weather! </h3>
                orig. Ihme ilmat! 2019
                <h4>
                  Rights sold: 
                </h4>
                FINLAND: Into Kustannus (orig.), <br/>
                ESTONIA: Avita, <br/> 
                HUNGARY: Ciceró Könyvstúdió, <br/>
                ITALY: Mondadori/Edizioni Piemme, <br/>
                LITHUANIA: Obuolys, <br/>
                MEXICO: (Latin American Spanish rights): Ordinal Books, <br/>
                NORWAY: Aschehoug, <br/>
                POLAND: Amber, <br/>
                SERBIA: Odiseja, <br/>
                SLOVAKIA: Ikar, <br/>
                SPAIN: Astronave, <br/>
                SWEDEN: Rabén & Sjögren, <br/>
                TURKEY: Kolektif, <br/>
                UNITED STATES (North America) Skyhorse Publishing/Sky Pony Press
                <h4>
                  NEWS
                </h4> 
                Weather activity book will be published in the beginning of 2021! And there’s next book in the making too.
            </li>
            <li>
                <h3>Where are you?</h3>
                orig. Missä sinä olet? 2020
                <h4>Rights sold: </h4> 
                FINLAND: Minerva (orig.), <br/> 
                ESTONIA: Avita, <br/> 
                GREECE: Klidarithmos, <br/> 
                TURKEY: Yapi Kredi Publishing
              </li>
           <li>
                <h3>Invisible World</h3>
                orig. Mennään piiloon! 2021
                <h4>Rights sold: </h4> 
                FINLAND: Karisto (orig.), <br/> 
                TURKEY: Yapi Kredi Publishing
              </li>
           <li>
                <h3>Enchanted Planet Earth</h3>
                orig. Lumotun Maan kartasto 2020
                <h4>Rights sold: </h4> 
                FINLAND: Kustantamo S&S (orig.), <br/> 
                RUSSIA: AST
              </li>
           <li>
                <h3>What is Water?</h3>
                orig. Vesi - kirja maailman tärkeimmästä aineesta 1997
                <h4>Rights sold: </h4> 
                FINLAND, Myllylahti (orig.), <br/>
                RUSSIA, KompasGuide
              </li>
           <li>
                <h3>What is the night?</h3>
                orig. Yö - kirja unesta ja pimeän salaisuuksista 1996
                <h4>Rights sold: </h4> 
                FINLAND, Myllylahti (orig.),<br/>
                CHINA, CITIC Press,  RUSSIA, KompasGuide
            </li>
          </ul>
        </vParagraph>
        </div>
      <vImage :image="Laura" class="first-on-mobile"/>
    </section>
  </vPage>
</template>

<script>
  import Vue from 'vue';
  import Laura from '@/assets/author/LauraPortrait.jpg';
  import Facebook from '@/components/Facebook';
  import Instrram from '@/components/Instagram';
  Vue.component("facebook", Facebook);
  Vue.component("instagram", Instrram);


  export default {
    name: 'Author',
    data() {
      return {
        Laura
      }
    }
  }
</script>

<style lang="scss" scoped>
  li {
    padding: calc(var(--spacing-unit) * 4) 0;
  }

</style>

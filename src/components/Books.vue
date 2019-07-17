<template>
  <div class="re-page home">
    <div class="book">
      <h2>
        <router-link to="/vesi">Vesi - kirja maailman tärkeimmästä aineesta</router-link>
      </h2>
      <p>Kuvitus: Satu Kontinen
        <br>Myllylahti 2017
        <br>sidottu, 152 sivua
        <br>käännösoikeudet: KompasGuide Venäjä
        <br>Foreign Rights: Elina Ahlbäck Literary Agency
        <br>
        <a href="https://www.ahlbackagency.com/book/what-is-water/">What is water</a>
      </p>
    </div>
    <div class="book">
      <h2>
        <router-link to="/yo">Yö - kirja unesta ja pimeän salaisuuksista</router-link>
      </h2>
      <p>Kuvitus: Satu Kontinen
        <br>Myllylahti 2016
        <br>sidottu, 120 sivua
        <br>käännösoikeudet: Citic Press Kiina, KompasGuide Venäjä
        <br>Foreign Rights: Elina Ahlbäck Literary Agency
        <br>
        <a href="https://www.ahlbackagency.com/book/what-is-the-night/">What is the night</a>
      </p>
    </div>
    <div class="book">
      <h2>Indiefood</h2>
      <p>Lähiruokaopas Suomeen
        <br>Myllylahti 2016
        <br>nidottu, 272 sivua
      </p>
    </div>
    <div class="book">
      <h2>Sudenpentujen karttakirja</h2>
      <p>Sanoma Magazines Finland Oy 2012
        <br>sidottu, 64 sivua
      </p>
    </div>
    <div class="book">
      <h2>Suomen 100 Lähiruokakohteet</h2>
      <p>Karttakeskus 2011
        <br>nidottu, 150 sivua
      </p>
    </div>
    <div class="book">
      <h2>Muumit ja maailmankartasto</h2>
      <p>asiatekstit Laura Niiranen (nyk. Ertimo), muumitekstit Noomi Herbert
        <br>Kirjalito ja Karttakeskus 2009
        <br>sidottu, 48 sivua
      </p>
    </div>
    <div class="book">
      <h2>Kurvisen perheen liikennekirja</h2>
      <p>Laura Niiranen (nyk. Ertimo), asiasisältö Laura Loikkanen
        <br>Kuvitus: Maria Björklund
        <br>Karttakeskus ja Liikenneturva 2009
        <br>sidottu, 36 sivua
      </p>
    </div>
    <div class="book">
      <h2>Kartta-Kirppu maailmalla</h2>
      <p>Laura Niiranen (nyk. Ertimo)
        <br>Kuvitus: Satu Paakkala (nyk. Kontinen)
        <br>Karttakeskus 2008
        <br>sidottu, 48 sivua
      </p>
    </div>
    <div class="book">
      <h2>Tutkimusmatka maailmaan</h2>
      <p>
        Laura Niiranen (nyk. Ertimo) ja Riikka Nurminen
        <br>Suunnittelu ja taitto: Satu Paakkala (nyk. Kontinen)
        <br>Karttakeskus 2007
        sidottu, 104 sivua
      </p>
    </div>
    <div class="book">
      <h2>Matkan varrella lasten kanssa</h2>
      <p>Laura Niiranen (nyk. Ertimo)
        <br>Karttakeskus 2006
        <br>sidottu, 80 sivua
        <br>Matkailukartastossa esitellään lapsille sopivia kohteita Suomesta.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Books"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

.book {
  padding: calc(4 * var(--spacing-unit));
  border-bottom: 2px solid var(--color-green);
}
.book:last-of-type {
  border-bottom: none;
}
</style>

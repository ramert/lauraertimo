<template>
  <div class="home">
    <div class="button-wrapper">
      <router-link to="/" tag="button" class="button">Takaisin</router-link>
    </div>
        <div>
<h3>
        Vesi - kirja maailman tärkeimmästä aineesta
        </h3>
<p>
Kuvitus: Satu Kontinen<br>
Myllylahti 2017<br>
sidottu, 152 sivua<br>
käännösoikeudet: KompasGuide Venäjä<br>
Foreign Rights: Elina Ahlbäck Literary Agency<br>
<a href="https://www.ahlbackagency.com/book/what-is-water/">What is water</a>
</p>
</div>
<div>
<h3>
Yö - kirja unesta ja pimeän salaisuuksista
</h3>
<p>
Kuvitus: Satu Kontinen<br>
Myllylahti 2016<br>
sidottu, 120 sivua<br>
käännösoikeudet: Citic Press Kiina, KompasGuide Venäjä<br>
Foreign Rights: Elina Ahlbäck Literary Agency<br>
<a href="https://www.ahlbackagency.com/book/what-is-the-night/">What is the night</a>
</p>
</div>
<div>
<h3>
Indiefood
</h3>
<p>
Lähiruokaopas Suomeen<br>
Myllylahti 2016<br>
nidottu, 272 sivua
</p>
</div>
<div>
<h3>
Sudenpentujen karttakirja
</h3>
<p>
Sanoma Magazines Finland Oy 2012<br>
sidottu, 64 sivua
</p>
</div>
<div>
<h3>
Suomen 100 Lähiruokakohteet
</h3>
<p>
Karttakeskus 2011<br>
nidottu, 150 sivua
</p>
</div>
<div>
<h3>
Muumit ja maailmankartasto
</h3>
<p>
asiatekstit Laura Niiranen (nyk. Ertimo), muumitekstit Noomi Herbert<br>
Kirjalito ja Karttakeskus 2009<br>
sidottu, 48 sivua
</p>
</div>
<div>
<h3>
Kurvisen perheen liikennekirja
</h3>
<p>
Laura Niiranen (nyk. Ertimo), asiasisältö Laura Loikkanen<br>
Kuvitus: Maria Björklund<br>
Karttakeskus ja Liikenneturva 2009<br>
sidottu, 36 sivua
</p>
</div>
<div>
<h3>
Kartta-Kirppu maailmalla
</h3>
<p>
Laura Niiranen (nyk. Ertimo)<br>
Kuvitus: Satu Paakkala (nyk. Kontinen)<br>
Karttakeskus 2008<br>
sidottu, 48 sivua
</p>
</div>

<div>
<h3>Tutkimusmatka maailmaan</h3>
<p>
Laura Niiranen (nyk. Ertimo) ja Riikka Nurminen<br>
Suunnittelu ja taitto: Satu Paakkala (nyk. Kontinen)<br>
Karttakeskus 2007
sidottu, 104 sivua
</p>
</div>
<div>
<h3>Matkan varrella lasten kanssa</h3>
<p>
Laura Niiranen (nyk. Ertimo)<br>
Karttakeskus 2006<br>
sidottu, 80 sivua<br>
Matkailukartastossa esitellään lapsille sopivia kohteita Suomesta.
</p>
</div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
      msg: 'Laura Ertimo.fi',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

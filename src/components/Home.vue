<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>Kohta kirjoitettu...</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  height: 100vh;
  width: 100vw;
}
h1, h2 {
  font-size: 3rem;
  font-weight: normal;
  color: #fff;
}
h2 {
  font-size: 2rem;
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

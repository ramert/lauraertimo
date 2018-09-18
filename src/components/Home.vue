<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div class="button-wrapper">
      <router-link to="/Books" tag="button" class="button">Kirjat</router-link>
    </div>
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
  min-height: 100vh;
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
.button-wrapper {
  display: fled;
  justify-content: center;
}
</style>

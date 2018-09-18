<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font: 400 100px/1.2 'Merienda One', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2 {
  font: 400 36/1.2 'Merienda One', Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: normal;
  color: #fff;
}
h2 {
  font: 400 24x/1.2 'Merienda One', Helvetica, sans-serif;
  font-size: 2rem;
}
h3 {
  font: 400 20px/1.2 'Merienda One', Helvetica, sans-serif;
  font-weight: normal;
  color: #fff;
}
p {
  font-family: Helvetica, sans-serif;
  font-size: 1rem;
  color: #fff;
}
button {
  font: 400 18px/1.2, Helvetica, sans-serif;
  min-width: 100px;
  padding: 12px 20px;
  background: white;
  color: black;
  border: none;
}

</style>

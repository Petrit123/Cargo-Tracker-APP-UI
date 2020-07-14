<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F5FFFA;
  font-weight: bold;
  position: relative;
}body {
  background-image:    
      linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
  url('./assets/cargo-tracker.jpeg');
    background-attachment: fixed;
  background-size: cover;
  background-size: cover;
}

</style>

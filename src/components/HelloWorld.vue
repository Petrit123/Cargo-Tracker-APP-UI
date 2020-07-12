<template>
  <div class="hello">
    <h1>Cargo Tracker</h1>
    <p>
    Applied domain-driven design blueprints for Java EE
    </p>
    <ul>
      <li><router-link to="home">Public Tracking Interface</router-link></li> <br> <br>
      <li><router-link :to="{ name: 'ADI' }">Administration Interface</router-link></li> <br> <br>
      <li><router-link to="home">Mobile Event Logger</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
img {
    max-width: 100%;
    max-height: 100%;
}
h1 {
  font-size: 400%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: orange;
}
a {
  color: #42b983;
}

p {
  font-size: 120%;
}

</style>

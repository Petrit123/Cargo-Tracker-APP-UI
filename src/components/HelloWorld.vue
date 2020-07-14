<template>
  <div id="hello">
    <h1>Cargo Tracker</h1>
    <img src="@/assets/shiplogo.png">
    <p>
    Applied domain-driven design blueprints for Java EE
    </p>
    <ul>
      <li><router-link class = "routerLinks" to="home">Public Tracking Interface</router-link></li> <br> <br>
      <li><router-link class = "routerLinks" :to="{ name: 'AdministrationInterface' }">Administration Interface</router-link></li> <br> <br>
      <li><router-link class = "routerLinks" to="home">Mobile Event Logger</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    margin-top: -.2%;;
    width: 5%;
    height: 5%;
}
h1 {
  font-size: 430%;
  margin-top: 6%;
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
}
.routerLinks {
  color: orange;
  font-size: 140%;
}
a {
  color: #42b983;
}

p {
  font-size: 150%;
  margin-top: 1%;
}

</style>

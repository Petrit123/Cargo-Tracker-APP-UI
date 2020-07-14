<template>
<div>
  <b-navbar toggleable="lg"  type="dark" style="background-color: #190033;">
    <b-navbar-brand href="#"><router-link class = "routerBrandLink" :to="{ name: 'HelloWorld' }">Cargo Tracker</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
   


        <b-navbar-nav style="color: white">
        <b-nav-item href="#"><router-link class = "routerLinks" :to="{ name: 'AdministrationInterface' }">Dashboard</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class = "routerLinks" :to="{ name: 'BookCargo' }">Book</router-link></b-nav-item>
         <b-nav-item href="#">Track</b-nav-item>
        <b-nav-item href="#" >Live</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: 'ADI'
}
</script>

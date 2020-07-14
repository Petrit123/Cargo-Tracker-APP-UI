<template>
<div>

<NavbarDirection/>
<br>
<br>
<form>
    <select v-model="portOrigin">
        <option disabled value="">Please select one</option>
        <option  v-for="origin in portLocations" v-bind:value="{ id: origin.id, name: origin.name }" :key="origin.id"> 
        {{origin.name}}
        </option>
    </select> 
    <br> <br>
        <select v-model="portDestination">
        <option disabled value="">Please select one</option>
        <option  v-for="destination in portLocations" v-bind:value="{ id: destination.id, name: destination.name }" :key="destination.id"> 
        {{destination.name}}
        </option>
    </select> 
 <br> <br>
    <input type = "date" v-model="input.arrivalDeadline"> <br> <br>
<input type="submit" value = "Book Cargo" v-on:click="bookCargo">
</form>
</div>

</template>
 <script>
 import NavbarDirection from "@/components/NavBar";

 export default {
     name: 'BookCargo',
     components: {
         NavbarDirection
     }, data () {
         return {
             input: {},
             apiResponse: null,
             portLocations: [],
             id: ''
         }
     },
     mounted () {
         this.$axios.get('/port')
         .then( response => {
             this.apiResponse = response.data
             this.getAllPortNames()
         })

     }, 
     methods: {
         getAllPortNames() {
              this.apiResponse.map((res) => {
                  this.portLocations.push({"id":res.id, "name": res.name})
             })
         },

         bookCargo() {
             console.log(this.input.arrivalDeadline);
             console.log(this.portOrigin.name);
             console.log(this.portDestination.id)

             let destinationObject = {
                 id: this.portDestination.id,
                 name: this.portDestination.name
             }

             let originObject = {
                 id: this.portOrigin.id,
                 name: this.portOrigin.name
             }
             
             fetch("/cargo", {
                 method: 'POST',
                 headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                 body: JSON.stringify({
                 arrivalDeadline: this.input.arrivalDeadline, destination: destinationObject, lastKnownLocation: this.portOrigin.name,  origin: originObject
                 })
             })

             this.$router.push('/Administration Interface')
         }
     },
 };
 </script>

 <style>
option {
    color:red;
}
 </style>
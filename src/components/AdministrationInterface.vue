<template>
<div>

<NavbarDirection/>

  <div>
     <div id="Routedlabel">
    <label>Routed </label>
   </div>
   <b-table sticky-header :items="otherCargos" head-variant="light" style= "background-color: white; width: 75%; margin-left:auto; margin-right:auto;"></b-table>


   <div id="NotRoutedlabel">
    <label> Not Routed </label>
   </div>
    <b-table sticky-header :items="nonRoutedCargos" head-variant="light" style= "background-color: white; width: 75%; margin-left:auto; margin-right:auto;"></b-table>



       <div id="ClaimedLabel">
    <label> Claimed </label>
   </div>
    <b-table sticky-header :items="claimedCargos" head-variant="light" style= "background-color: white; width: 75%; margin-left:auto; margin-right:auto;"></b-table>
  </div>


</div>

</template>
 <script>
 import NavbarDirection from "@/components/NavBar";

 export default {
     name: 'AdministrationInterface',
     components: {
         NavbarDirection
     },
     data () {
         return {
             apiResponse: null,
             cargoStatus: [],
             nonRoutedCargos: [],
             claimedCargos:[],
             otherCargos: []
         }
     },
     mounted () {
         this.$axios.get('/cargo')
         .then( response => {
             this.apiResponse = response.data
             this.getCargoStatus();
             console.log(this.nonRoutedCargos)
         })
     },
     methods: {
         getCargoStatus() {
             this.apiResponse.map((res) => {
                 this.cargoStatus.push({"status": res.status})
                if (res.status == "NOTROUTED") {
                    this.nonRoutedCargos.push({"id": res.cargoId, "origin": res.origin.name, "destination": res.destination.name, "deadline": res.arrivalDeadline})
                 } else if (res.status == "CLAIMED") {
                    this.claimedCargos.push({"id": res.cargoId, "origin": res.origin.name, "destination": res.destination.name, "deadline": res.arrivalDeadline})
                 } else {
                    this.otherCargos.push({"id": res.cargoId, "origin": res.origin.name, "destination": res.destination.name, "lastKnownLocation": res.lastKnownLocation, "status": res.status, "deadline": res.arrivalDeadline})
                 }
             })
         }
     }
 };
 </script>
 <style>

#NotRoutedlabel {
    width: 75%;
    background-color: orange;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-size: 20px;
    padding-left: .5%;
    margin-top: 2%;

}

#Routedlabel {
    width: 75%;
    background-color: orange;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-size: 20px;
    padding-left: .5%;
    margin-top: 2%;

}

#ClaimedLabel {
    width: 75%;
    background-color: orange;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-size: 20px;
    padding-left: .5%;
    margin-top: 2%;

}


</style>
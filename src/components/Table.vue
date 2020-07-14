<template>
  <div>
   <div id="label">
    <label> Not Routed </label>
   </div>
    <b-table sticky-header :items="items" head-variant="light" style= "background-color: white; width: 75%; margin-left:auto; margin-right:auto;"></b-table>
  </div>
     

</template>

<script>
  export default {
    data() {
      return {
        items: [
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' }
        ]
      }
    }
  }
</script>
<style>

#label {
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
<template>
    <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-10 col-md-6 col-lg-4 col-xl-4">

            <pre>
            das
            das
            das
            das
            das
            das
            das
            das
            das
            
            </pre>

            {{ auth }}

        </div>
    </div>
</template>

<script>

import {  } from 'mdbvue'
import bus from '../bus.js'

export default {
  methods: {
      
  },
  components: {
      
  },
  created() {
    //   bus.$on('authenticated', data => {
    //       this.auth = true;
    //       alert("xd?");
    //       });

          console.log(bus);
  },
  data() {
      return {
          auth: false
      }
  }
}
</script>

<style scoped>



</style>
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

            {{ logged }}


        </div>
    </div>
</template>

<script>

import {  } from 'mdbvue'
import EventBus from '../main.js'

export default {
  methods: {
        authUser() {
            EventBus.$on('authenticated', data => {
                this.logged = data;
                alert(data);
            });
        }
  },
  components: {
      
  },
  created() {

    this.authUser();
    
    if (this.logged == false) this.$router.replace({ name: "login" });

  },
  data() {
      return {
          logged: ''
      }
  }
}
</script>

<style scoped>



</style>
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

import EventBus from '../main.js'

export default {
  methods: {
        authUser(data) {
           alert(data);
        }
  },
  components: {
      
  },
  created() {

    EventBus.$on('authenticated', this.authUser);
    
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
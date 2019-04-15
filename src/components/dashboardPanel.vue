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

            <input v-model="logged">

            {{test}}<button @click="this.test = !this.test;">switch</button>

        </div>
    </div>
</template>

<script>

//import EventBus from '../main.js'

export default {
  methods: {
        authUser(data) {
           alert(data);
        }
  },
  components: {
      
  },
  mounted() {

    this.$root.$on('authenticated', data => {
        console.log(data);
        this.logged = data;
        alert(this.logged);
    })
    
    //if (this.logged == false) this.$router.replace({ name: "login" });

  },
  data() {
      return {
          logged: false,
          test: false
      }
  }
}
</script>

<style scoped>



</style>
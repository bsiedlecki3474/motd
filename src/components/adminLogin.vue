<template>
    <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-10 col-md-6 col-lg-4 col-xl-4">

            <form>
                <p class="h4 text-center mb-4">Admin</p>
                <div class="grey-text">
                    <mdb-input label="Username" type="text" v-model="login.username"/>
                    <mdb-input label="Password" type="password" v-model="login.password"/>
                </div>
                <div class="text-center">
                    <button class="btn btn-elegant" @click.prevent="loginAdmin">Login</button>
                </div>
                <p class="h4 text-center mb-4" v-if="this.loginError">{{ this.loginError }}</p>
            </form>

        </div>
    </div>
</template>

<script>

import EventBus from '../main.js'
import { mdbInput } from 'mdbvue'


export default {
  methods: {
      loginAdmin() {
            if (this.login.username.length < 1 || this.login.password.length < 1) {
                this.loginError = 'Fill both username and password fields first';
            }
            else {
                const axios = require('axios');

                var self = this;

                axios.get('http://speedrun.minespace.net/api/public/api/login', {
                    params: {
                        username: self.login.username,
                        password: self.login.password
                    }
                })
                .then(function (response) {
                    // handle success
                    self.logged = response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                    if (self.logged == false) self.loginError = 'Wrong username or password';
                    // else { 
                    //     self.loginError = '';
                    //     this.$emit('authenticated', true);
                    //     //self.$router.replace({ name: "dashboard" });
                    // }
                    else self.loginSuccess();
                        
                });
            }
      },
      loginSuccess() {
          console.log("loginsuccess");
          this.$root.$emit('authenticated', true);
          console.log("loginsuccess-2");
          this.$router.replace({ name: "dashboard" });
          console.log("loginsuccess-3");
      }

  },
  components: {
      mdbInput
  },
  data() {
      return {
        login: {
            username: '',
            password: ''
        },
        logged: '',
        loginError: ''
      }
  }
}
</script>

<style scoped>

</style>
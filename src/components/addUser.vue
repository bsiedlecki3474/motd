<template>
    <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-10 col-md-6 col-lg-4 col-xl-4">

            <form>
                <p class="h4 text-center mb-4">Create new user</p>
                <div class="grey-text">
                    <mdb-input label="Username" type="text" v-model="create.username"/>
                    <mdb-input label="Password" type="password" v-model="create.password"/>
                </div>
                <div class="text-center">
                    <button class="btn btn-elegant" @click.prevent="createAdmin">create</button>
                </div>
                <p class="h4 text-center mb-4" v-if="this.createMsg">{{ this.createMsg }}</p>
            </form>

        </div>
    </div>
</template>

<script>

import { mdbInput } from 'mdbvue'

export default {
  methods: {
      createAdmin() {
          if (this.create.username.length < 1 || this.create.password.length < 1) {
                this.createMsg = 'Fill both username and password fields first';
          }
          else {

              var self = this;

              axios.get('http://speedrun.minespace.net/api/public/api/login', {
                    params: {
                        username: self.create.username,
                        password: self.create.password
                    }
                })
                .then(function(response) {
                    self.alreadyExists = response.data;
                    if (self.alreadyExists != true) 
                        this.createMsg = 'User already exists';
                    else {
                        axios.post('http://speedrun.minespace.net/api/public/api/useradd', {
                             username: self.username,
                             password: self.password })
                            .then(function (response) {
                                // handle success
                                alert("success");
                                console.log(response);
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .then(function () {
                                // always executed
                            });
                    }
                })
                .catch(function(error) {

                });
          }
      }
  },
  components: {
      mdbInput
  },
  data() {
      return {
        create {
            username: '',
            password: ''
        },
        alreadyExists: ''
      }
  }
}
</script>

<style scoped>



</style>
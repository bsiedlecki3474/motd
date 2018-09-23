<template>
    <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-10 col-md-6 col-lg-4 col-xl-4">

            <form>
                <p class="h4 text-center mb-4">Change password</p>
                <div class="grey-text">
                    <mdb-input label="Username" type="text" v-model="userdata.username"/>
                    <mdb-input label="Old password" type="password" v-model="userdata.password_old"/>
                    <mdb-input label="New password" type="password" v-model="userdata.password_new"/>
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
          if (this.userdata.username.length < 1 || this.userdata.password.length < 1) {
                this.createMsg = 'Fill both username and password fields first';
          }
          else {

              var self = this;

              axios.get('http://speedrun.minespace.net/api/public/api/login', {
                    params: {
                        username: self.userdata.username,
                        password: self.userdata.password_old,
                    }
                })
                .then(function(response) {
                    self.logged = response.data;
                    if (self.logged == true) {

                        axios.put('http://speedrun.minespace.net/api/public/api/changepass', {
                            params: {
                                username: self.userdata.username,
                                password: self.userdata.password_new,
                            }
                        })
                        .then(function(response) {
                            console.log(response)
                        })
                        .catch(function(error) {
                
                        });

                    }
                    else self.createMsg = 'Wrong sth idk testing stuff';
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
        userdata {
            username: '',
            password_old: '',
            password_new: ''
        },
        alreadyExists: ''
      }
  }
}
</script>

<style scoped>



</style>
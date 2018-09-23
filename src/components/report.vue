<template>
    <div class="row wow fadeIn justify-content-center">

        <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">

            <h1 id="reportabug" class="h1 text-center topmargins">Report a bug</h1>
            <h6 class="text-center">Have you seen a bug or glitch recently? report it here!</h6>
            <h6 id="charcounter" class="text-center">{{ countChars() }} / 100</h6>
            
            <div class="md-form">
                <input type="text" class="form-control text-center" name="text" maxlength="100" placeholder="Your bug or suggestion..." v-model="report">
            </div>
            
            <h6 id="bugapply" class="text-center topmargins"></h6>
            <button v-on:click.once="sendReport" :class="[clicked ? 'btn-danger' : 'btn-elegant', 'btn', 'obj-center']">Send!</button>
            <h6 class="text-center" v-if="message">{{ message }}</h6>

        </div>

    </div>
</template>

<script>
export default {
  methods: {
      sendReport() {
            this.clicked = true;

            if (this.report.length <= 100) {

                if (this.report == "")
                    this.message = 'Write the message before submitting :)';
                
                else {

                    const axios = require('axios');

                    var self = this;

                    // Make a request for a user with a given ID
                    axios.post('http://speedrun.minespace.net/api/public/api/report/add', { message: self.report })
                    .then(function (response) {
                        // handle success
                        self.message = 'Thanks for reporting the issue!';
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });

                }

            }
            else if (this.report.length > 100)
                this.message = 'Your message is too long, you sneaky!';

      },
      countChars() {
          if (this.report.length > 100) {
              return "too long";
          }
          else return this.report.length;
      }
  },
  data() {
      return {
          report: "",
          message: "",
          clicked: false
      }
  }
}
</script>

<style scoped>

.obj-center {
    float: none !important;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

</style>
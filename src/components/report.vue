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
            <button v-on:click.once="sendReport" class="btn btn-elegant obj-center">Send!</button>
            error alert do wyjebania

        </div>

    </div>
</template>

<script>
export default {
  methods: {
      sendReport() {
            if (this.report.length <= 100) {

                const axios = require('axios');

                var self = this;

                // Make a request for a user with a given ID
                axios.post('http://localhost/motdapi/public/api/report/add', { message: self.report })
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

            } else {
                alert("> 100")
            }

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
          report: ""
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
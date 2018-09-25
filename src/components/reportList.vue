<template>
    <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">

            <tbl striped responsive>
                <tbl-head>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Is fixed?</th>
                        <th>Fix</th>
                        <th>Remove</th>
                    </tr>
                </tbl-head>
                <tbl-body>
                    <tr v-for="report, index in reports">
                        <td>{{ index + 1 }}</td>
                        <td>{{ report.text }}</td>
                        <td :key="report.id">{{ report.fixed == true ? 'Yep' : 'Nope' }}</td>
                        <td><button type="button" class="btn btn-outline-success btn-sm waves-effect" @click="invert(report.id, report.fixed)">Change</button></td>
                        <td><button type="button" class="btn btn-outline-danger btn-sm waves-effect" @click="remove(report.id)">Remove</button></td>
                    </tr>
                </tbl-body>
            </tbl>

        </div>
    </div>
</template>

<script>

import { Tbl, TblHead, TblBody } from 'mdbvue'

export default {
  methods: {
      invert(id, fixed) {

            const axios = require('axios');

            var self = this;

            // Make a request for a user with a given ID
            axios.put('http://speedrun.minespace.net/api/public/api/report/change', {
                id: id,
                fixed: fixed 
            })
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

      },
      remove(id) {
            const axios = require('axios');

            var self = this;

            // Make a request for a user with a given ID
            axios.delete('http://speedrun.minespace.net/api/public/api/report/delete', { 
                params: { id: id }
                })
            .then(function (response) {
                // handle success
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
      }
  },
  components: {
     Tbl,
	 TblHead,
	 TblBody
  },
  created() {

      var self = this;

      axios.get('http://speedrun.minespace.net/api/public/api/reports')
		.then(function (response) {
			// handle success
			self.reports = response.data;
		})
		.catch(function (error) {
			// handle error
		})
		.then(function () {
			// always executed
		});
  },
  data() {
      return {
         reports: [],
         changedValue: ''
      }
  }
}
</script>

<style scoped>



</style>
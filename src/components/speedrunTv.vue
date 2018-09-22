<template>
    <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">

            <tbl striped responsive>
                <tbl-head>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Map</th>
                        <th>Download</th>
                    </tr>
                </tbl-head>
                <tbl-body>
                    <tr v-for="demo, index in demodata">
                        <td>{{ demo.date }}</td>
                        <td>Download</td>
                    </tr>
                </tbl-body>
            </tbl>

        </div>
    </div>
</template>

<script>

import { 
    Tbl,
	TblHead,
	TblBody 
    } 
from 'mdbvue'

export default {
  methods: {
      
  },
  components: {
    Tbl,
	TblHead,
	TblBody
  },
  data() {
      return {
        demolist: [],
            date: [],
            time: [],
            map: []
      }
  },
  created() {

      var self = this;

      axios.get('http://speedrun.minespace.net/api/public/api/demolist')
        .then(function (response) {
            // handle success
            self.demolist = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

        for (var i = 0; i < this.demolist.length; i++) {
            var data = demolist[i].split("-");

            var year = substr(data[1], 4);
            var month = substr(data[1], 4, 2);
            var day = substr(data[1], 6, 2);

            this.date.push(day + "." + month + "." + year);

            var hour = substr(data[2], 2);
            var minute = substr(data[2], 2, 2);
            var second = substr(data[2], 4, 2);

            this.time.push(hour + ":" + minute + ":" + second);

            this.map.push(substr(data[5], 8));

            unset(demolist);

            console.log(JSON.stringify(this.demodata));
        }

  }
}
</script>

<style scoped>



</style>
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
                        <th>Link</th>
                    </tr>
                </tbl-head>
                <tbl-body>
                    <tr v-for="(index, id) in demolist.length"> <!-- lol -->
                        <td>{{ id + 1 }}</td>
                        <td>{{ demodata.date[id] }}</td>
                        <td>{{ demodata.time[id] }}</td>
                        <td>{{ demodata.map[id] }}</td>
                        <td><a>Download</a></td>
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
        demodata: {
            date: {},
            time: {},
            map: {}
        }
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
            for (var i = 0; i < self.demolist.length; i++) {

                var data = self.demolist[i].split("-");

                var year = data[1].substr(0, 4);
                var month = data[1].substr(4, 2);
                var day = data[1].substr(6, 2);

                var date = day + "." + month + "." + year;

                var hour = data[2].substr(0, 2);
                var minute = data[2].substr(2, 2);
                var second = data[2].substr(4, 2);

                var time = hour + ":" + minute + ":" + second;

                var map = data[5].slice(0, -8)

                self.$set(self.demodata.date, i, date);
                self.$set(self.demodata.time, i, time);
                self.$set(self.demodata.map, i, map);

            }

        });

  }
}
</script>

<style scoped>



</style>
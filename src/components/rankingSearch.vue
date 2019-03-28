<template>
	<div class="row justify-content-center">

		<div class="hidden-xs col-sm-12 col-md-12 col-lg-12 col-xl-12 navbarfixer">

			<div class="card">

				<img class="img-fluid" src="../assets/background.jpg" alt="Card image cap">
				<div class="card-body">
					<h4 class="card-title">Player ranking</h4>
					<p class="card-text">Choose map and style to see top players!</p>
					<div class="row">
						<div class="col-6 text-center scrollable-menu" tabindex="0" @click="mapsMenu = !mapsMenu">
							<h5 v-if="!mapsMenu" class="align-middle">{{ map.name }}</h5>
							
							<dropdown-item v-if="mapsMenu" v-for="(mapdata, id) in maps" :key="id">

								<div @click="checkMap($event)">{{ removeIndex(mapdata.map) }}</div>
							<!--
								<span @click="checkMap($event)" v-if="mapdata.map.includes(substr[0])">{{ mapdata.map.substr(0, (mapdata.map.length - (mapdata.map.length - mapdata.map.indexOf(substr[0])))) }}</span>
								<span @click="checkMap($event)" v-else-if="mapdata.map.includes(substr[1])">{{ mapdata.map.substr(0, (mapdata.map.length - (mapdata.map.length - mapdata.map.indexOf(substr[1])))) }}</span>
								<span @click="checkMap($event)" v-else-if="mapdata.map.includes(substr[2])">{{ mapdata.map.substr(0, (mapdata.map.length - (mapdata.map.length - mapdata.map.indexOf(substr[2])))) }}</span>
								<span @click="checkMap($event)" v-else-if="mapdata.map.includes(substr[3])">{{ mapdata.map.substr(0, (mapdata.map.length - (mapdata.map.length - mapdata.map.indexOf(substr[3])))) }}</span>
								<span @click="checkMap($event)" v-else-if="mapdata.map.includes(substr[4])">{{ mapdata.map }}</span>
							-->


							</dropdown-item>
							
						</div>

						<div class="col-6 text-center scrollable-menu" tabindex="0" @click="stylesMenu = !stylesMenu">
							<h5 v-if="!stylesMenu" class="align-middle"> {{ map.style }}</h5>
							<dropdown-item v-if="stylesMenu" v-for="(styledata, id) in styles" :key="id">
								<div @click="checkStyle($event)">{{ id+1 }}. {{ styleList[styledata.style].name }}</div>
							</dropdown-item>
						</div>
						
					</div>

				</div>	

				<button class="btn btn-elegant" @click.prevent="getRecords">Show</button>

			</div>

			<card class="text-center space">
				<card-header>
					<div class="row tabClass">
						<!--<tbl borderless sm>
							<tr>
								<th @click="switchAll(); switchRanking()">Map ranking</th>
								<th @click="switchAll(); switchTop15()">Top 15 players</th>
								<th @click="switchAll(); switchSeasons()">Top season players</th>
							</tr>
						</tbl>-->
						<button class="btn btn-outline-elegant" @click.prevent="switchAll(); switchRanking()">Map ranking</button>
						<button class="btn btn-outline-elegant" @click.prevent="switchAll(); switchTop15()">Top 15 players</button>
						<button class="btn btn-outline-elegant" @click.prevent="switchAll(); switchSeasons()">Top season players</button>
						<button class="btn btn-outline-elegant" @click.prevent="switchAll(); switchNerds()">Top speedrun nerds</button>
						
					</div>
				</card-header>
				<card-body>

					<div v-if="menu.ranking">

						<div v-if="map.recordAccess==false">
							<card-title>Before you look for records</card-title>
							<card-text>set the map and style</card-text>
						</div>

						<div v-else-if="map.recordAccess==true">

							<card-title>{{ map.name }}</card-title>
							<card-text>Style: {{ map.style }}</card-text>
							<card-text>Tier: {{ map.tier }}</card-text>

							<tbl striped responsive>
								<tbl-head>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Time</th>
										<th>Difference</th>
										<th>Jumps</th>
										<th>Strafes</th>
										<th>Sync</th>
										<th>Country</th>
										<th>Date</th>
									</tr>
								</tbl-head>
								<tbl-body>
									<tr v-for="record, index in records">
										<td>{{ index + 1 }}</td>
										<td>{{ record.name }}</td>
										<td>{{ zeroAdder(record.time) }}</td>
										<td>{{ rounder(record.time - timeDiff(record.time, index)) }}</td>
										<td>{{ record.jumps }}</td>
										<td>{{ record.strafes }}</td>
										<td>{{ record.sync }}</td>
										<td>{{ record.country }}</td>
										<td>{{ convertDate(record.date) }}</td>
									</tr>
								</tbl-body>
							</tbl>

						</div>
					</div>

					<div v-if="menu.top15">

						<card-title>Top 15 speedrunners</card-title>
						<card-text>See the top 15 players on the server</card-text>

						<tbl striped responsive>
							<tbl-head>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Points</th>
								</tr>
							</tbl-head>
							<tbl-body>
								<tr v-for="player, index in top15">
									<td><b v-if="index <= 2">{{ index + 1 }}</b><span v-else>{{ index + 1 }}</span> 
										<i class="far fa-star gold-star" v-if="index == 0"></i>
										<i class="far fa-star silver-star" v-else-if="index == 1"></i>
										<i class="far fa-star bronze-star" v-else-if="index == 2"></i>
									</td>
									<td>
										<b v-if="index <= 2">{{ player.name }}</b><span v-else>{{ player.name }}</span>
									</td>
									<td>
										<b v-if="index <= 2">{{ player.points }}</b><span v-else>{{ player.points }}</span>
									</td>
								</tr>
							</tbl-body>
						</tbl>
					</div>

					<div v-if="menu.seasons">

							<card-title>Seasons</card-title>
							<card-text>Top 3 players of every season</card-text>

						<div class="row">

							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
								<div class="card card-left">
								<img class="card-img-top" src="../assets/spring.jpg" alt="Spring image">
									<div class="card-body">
										<h4 class="card-title">Spring Season 1</h4>
										<div class="flex-row">
											<ol>
												<li>pablo</li>
												<li>tresher</li>
												<li>milosh</li>
											</ol>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
								<div class="card card-left">
								<img class="card-img-top" src="../assets/summer.jpg" alt="Summer image">
									<div class="card-body">
										<h4 class="card-title">Summer Season 1 (no AC)</h4>
										<div class="flex-row">
											<ol>
												<li>pablo</li>
												<li>diabel</li>
												<li>aang</li>
											</ol>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
								<div class="card card-left">
								<img class="card-img-top" src="../assets/autumn.jpg" alt="Summer image">
									<div class="card-body">
										<h4 class="card-title">Autumn Season 1</h4>
										<div class="flex-row">
											<ol>
												<li>diabel</li>
												<li>noqman</li>
												<li>pablo</li>
											</ol>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
								<div class="card card-left">
								<img class="card-img-top" src="../assets/winter.jpg" alt="Summer image">
									<div class="card-body">
										<h4 class="card-title">Winter Season 1</h4>
										<div class="flex-row">
											<ol>
												<li>kiruu</li>
												<li>panzer</li>
												<li>diabel</li>
											</ol>
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>

					<div v-if="menu.nerds">

						<card-title>Top 15 speedrun nerds</card-title>
						<card-text>Who played the most on speedrun :D</card-text>

						<tbl striped responsive>
							<tbl-head>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Duration</th>
								</tr>
							</tbl-head>
							<tbl-body>
								<tr v-for="player, index in nerds">
									<td>{{ index + 1 }}</td>
									<td>{{ player.name }}</td>
									<td>{{ rounder((player.dur / 3600)) }} hrs</td>
								</tr>
							</tbl-body>
						</tbl>

					</div>

				</card-body>
			</card>

		</div>

	</div>
</template>

<script>

import { 
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Card,
	CardHeader,
	CardTitle,
	CardBody,
	CardText,
	NavbarItem,
	Tbl,
	TblHead,
	TblBody
} from 'mdbvue'

export default {
  name: 'App',
  props: ['styleList'],
  components: {
      Dropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
	  Card,
	  CardHeader,
	  CardTitle,
	  CardBody,
	  CardText,
	  NavbarItem,
	 Tbl,
	 TblHead,
	 TblBody
  },
  methods: {
	  checkMap(event) {
	  	this.map.name = event.target.innerHTML;
	  },
	  checkStyle(event) {
	  	this.map.style = event.target.innerHTML.substr(3);
		let id = event.target.innerHTML.split(".");
		this.styleID = id[0] - 1;
	  },
	  convertDate(timeStamp) {
		var theDate = new Date(timeStamp * 1000);
		var dateString = theDate.toGMTString();
		return dateString;
	  },
	  switchAll() {
		this.menu.top15 = false;
		this.menu.ranking = false;
		this.menu.seasons = false;
		this.menu.nerds = false;
	  },
	  switchRanking() {
		this.menu.ranking = !this.menu.ranking;
	  },
	  switchTop15() {
		this.menu.top15 = !this.menu.top15;
	  },
	  switchSeasons() {
		this.menu.seasons = !this.menu.seasons;
	  },
	  switchNerds() {
		this.menu.nerds = !this.menu.nerds;
	  },
	  timeDiff(time, index) {
		  if (index == 0) {
			  this.firstTime = time;
		  }
		  return this.firstTime;
	  },
	  rounder(value) {
		  return Math.round(value * 100) / 100;
	  },
	  zeroAdder(value) {
		  if (value == 0) return '';
		  else {
			  let time = value.split(".");
			  let s = time[0];
			  let ms = time[1];
			  while (ms.length < 3)
			  	ms += "0";
			  time = s+"."+ms;
			  return time;
		  }
	  },
	  removeIndex(map) {
		  let pieces = map.split("_");
		  if (map != 'speedrun_3h' && map != 'speedrun_otton' && map != 'speedrun_blocks2') {
			if (map == 'speedrun_alley_beta2_21f') pieces.pop();
		 	pieces.pop();
			return pieces.join('_');
		  }
		  else return map;
		  
	  },
	  getRecords() {

		this.menu.ranking = true;
		this.menu.top15 = false;
		this.menu.seasons = false;
		this.menu.nerds = false;

		var self = this;

		axios.get('http://speedrun.minespace.net/api/public/api/ranking/'+self.map.name+'/style='+self.styleID)
		.then(function (response) {
			//handle success
			//console.log(response);
			self.records = response.data;
			self.map.tier = self.records[0].tier;
			self.map.recordAccess = true;
			
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
  data(){
      return {
          maps: [],
          styles: [],
		  top15: [],
		  records: [],
		  nerds: [],
		  substr: ['_beta', '_final', '_full', '_demo', ''],
		  mapsMenu: false,
		  stylesMenu: false,
		  styleID: '',
		  firstTime: '',
		  menu: {
			top15: true,
		  	ranking: false,
		 	seasons: false,
			nerds: false
		  },
		  map: {
			  name: 'Select map',
			  style: 'Select style',
			  tier: 'not set',
			  recordAccess: false
		  }
		  
      }
  },
  created() {

	const axios = require('axios');

	var self = this;

	axios.get('http://speedrun.minespace.net/api/public/api/ranking/top15')
	.then(function (response) {
		// handle success
		self.top15 = response.data;
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.then(function () {
		// always executed
	});

  },
  mounted() {
	const axios = require('axios');

	var self = this;

	axios.get('http://speedrun.minespace.net/api/public/api/ranking/maps')
	.then(function (response) {
		// handle success
		self.maps = response.data;
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.then(function () {
		// always executed
	});

	axios.get('http://speedrun.minespace.net/api/public/api/ranking/styles')
	.then(function (response) {
		// handle success
		self.styles = response.data;
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.then(function () {
		// always executed
	});

	axios.get('http://speedrun.minespace.net/api/public/api/ranking/nerds')
	.then(function (response) {
		// handle success
		self.nerds = response.data;
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
</script>

<style scoped>

.scrollable-menu {
	height: auto;
	max-height: 200px;
	overflow-x: hidden;
	outline: none;
	cursor: pointer;
}

.tabClass {
	display: inline-flex;
	list-style-type: none;
}

.space {
	margin-top: 50px;
}

.card .card-left {
	text-align: left;
}

/*
.dropdown-item {
	padding: 0 10px 0 10px;
}
*/

.gold-star {
	color: #FF8800;
}

.silver-star {
	color: #bdbdbd;
}

.bronze-star {
	color: #795548;
}

</style>
<template>
    <div>
       <h1 class="text-center margins navbarfixer" id="styles">Styles</h1>

		<div class="row wow fadeIn">

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
				<div class="card">
				<img class="card-img-top" src="../assets/cat1.jpg" alt="speedrun-image-1">
					<div class="card-body">
						<h4 class="card-title">Speedrun styles</h4>
						<div class="flex-row">
							The default flavour of the speedrun mod<br />
							<h6 class="weblinks" v-on:click="style = 1">Try it out!</h6>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
				<div class="card">
				<img class="card-img-top" src="../assets/cat2.jpg" alt="speedrun-image-2">
					<div class="card-body">
						<h4 class="card-title">Fastrun styles</h4>
						<div class="flex-row">
							Super challenging speed at the start<br />
							<h6 class="weblinks" v-on:click="style = 2">Try it out!</h6>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
				<div class="card">
				<img class="card-img-top" src="../assets/cat3.jpg" alt="speedrun-image-3">
					<div class="card-body">
						<h4 class="card-title">Crazyspeed styles</h4>
						<div class="flex-row">
							More and more speed on every single jump<br />
							<h6 class="weblinks" v-on:click="style = 3">Try it out!</h6>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
				<div class="card">
				<img class="card-img-top" src="../assets/cat4.jpg" alt="speedrun-image-4">
					<div class="card-body">
						<h4 class="card-title">Bhop styles</h4>
						<div class="flex-row">
							Generic styles you may find on many bhop servers<br />
							<h6 class="weblinks" v-on:click="style = 4">Try it out!</h6>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<div class="card">
					<div class="card-body">
						<h3 class="text-center card-title">Demonstation</h3>
						<div class="flex-row justify-content-center demonstration">
							<div v-if="style == 1" tabindex="0"
							 v-on:keyup.49="tickrateChooser" v-on:keyup.97="tickrateChooser"
							 v-on:keyup.50="marker(2)" v-on:keyup.98="marker(2)"
							 v-on:keyup.51="marker(3)" v-on:keyup.99="marker(3)"
							 v-on:keyup.52="marker(4)" v-on:keyup.100="marker(4)"
							 v-on:keyup.53="marker(6)" v-on:keyup.101="marker(6)">
								<h6 class="text-center">(keyboard interacted)</h6>
								<h4>1. <span data-toggle="tooltip" title="choose tickrate simulation">Tickrate</span> <span id="tickrate">{{ tickrates[index] }}</span></h4>
								<h4>2. <span id="shortcuts">{{ values[value] }}</span> <span data-toggle="tooltip" title="enable/disable shortcuts">No shortcuts</span></h4> <br />
								<h4>4. <span id="halftime_sr">{{ values[value] }}</span> <span data-toggle="tooltip" title="double slow-motion">Halftime</span> <span class="vip_sr"></span></h4>
								<h4>5. <span id="lowgravity">{{ values[value] }}</span> <span data-toggle="tooltip" title="lowered gravity">Low gravity</span> <span class="vip_sr"></span></h4>
								<h4>6. <span id="doublejump">{{ values[value] }}</span> <span data-toggle="tooltip" title="double jump">Double jump</span> <span class="vip_sr"></span></h4>
							</div>
							<div v-if="style == 2">
								<h4>1. <span data-toggle="tooltip" title="starting velocity=2000">2k VelRun</span></h4>
								<h4>2. <span data-toggle="tooltip" title="starting velocity=3000">3k VelRun</span></h4>
								<h4>3. <span data-toggle="tooltip" title="starting velocity=4000">4k VelRun</span></h4>
								<h4>4. <span data-toggle="tooltip" title="starting velocity=6000">6k VelRun</span></h4>
								<h4>5. <span data-toggle="tooltip" title="hold W to get more speed">True Fastrun</span></h4>
							</div>
							<div v-if="style == 3">
								<h6 class="text-center">(keyboard interacted)</h6>
								<h4>1. <span id="halftime_cs"></span> <span data-toggle="tooltip" title="double slow-motion">Halftime</span> </h4><br />
								<h4>3. <span data-toggle="tooltip" title="+20% speed per jump">Crazy Speed</span> <span class="plushalf"></span></h4>
								<h4>4. <span data-toggle="tooltip" title="+40% speed per jump">Hard Crazy Speed</span> <span class="plushalf"></span> <span class="vip_cs"></span></h4>
								<h4>5. <span data-toggle="tooltip" title="+250 speed per jump">Classic Crazy Speed</span> <span class="plushalf"></span> <span class="vip_cs"></span></h4>
							</div>
							<div v-if="style == 4">
								<h4>1. <span data-toggle="tooltip" title="ability of using W and S only">Sideways</span></h4>
								<h4>2. <span data-toggle="tooltip" title="ability of using W and A/D only">Half-Sideways</span></h4>
								<h4>3. <span data-toggle="tooltip" title="ability of using W only">W-Only</span></h4>
								<h4>4. <span data-toggle="tooltip" title="ability of using A only">A-Only</span></h4>
								<h4>5. <span data-toggle="tooltip" title="ability of using D only">D-Only</span></h4>
								<h4>6. <span data-toggle="tooltip" title="no autobhop">Legit</span></h4>
								<h4>7. <span data-toggle="tooltip" title="velocity limited to 400">400 Velocity</span></h4>
								<h4>8. <span data-toggle="tooltip" title="third person pov">Third Person</span></h4>
							</div>
							Complete js scripting
						</div>
					</div>
				</div>
			</div>

		</div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
	  return {
		  style: 0,
		  index: 0,
		  value: 0,
		  value2: 0,
		  tickrates: ["[ 100 ]", "[ 128 ]", "[ 200 ]", "[ 250 ]", "[ 333 ]", "[ 500 ]", "[ 1000 ]"],
		  values: ["[   ]", "[ x ]"]
	  }
  },
  methods: {
	tickrateChooser() {
		this.index < (this.tickrates.length - 1) ? this.index++ : this.index = 0;
	},
	marker(btn) {
		this.value = 1 - this.value;
	}

  }
}
</script>

<style scoped>

.weblinks {
	animation: pulse 2s infinite;
	cursor: pointer;
}

@keyframes pulse {
	0% {color: #4286f4; letter-spacing: none;}
	50% {color: #41a6f4; letter-spacing: 1px;}
	100% {color: #4286f4; letter-spacing: none;}
}

.demonstration div {
	outline: none;
}

</style>
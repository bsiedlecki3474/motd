<template>
    <div>
        <h1 class="text-center margins navbarfixer" id="commands">Commands</h1>
		<h5 class="text-center">note: plugin commands can be executed with ! / or sm_"your command" in console.</h5>

		<div class="row wow fadeIn">

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center">
				<h4 class="h4 topmargins">Customization</h4>
				<transition name="fade" mode="out-in" v-for="index, id in commands.customization" :key="id">
					<span v-if="!commands.customization[id].visible" key="1" @mouseover="commands.customization[id].visible = !commands.customization[id].visible"><b>{{ commands.customization[id].text1 }}</b><br /></span>
					<span v-else key="2" @mouseleave="commands.customization[id].visible = !commands.customization[id].visible">{{ commands.customization[id].text2 }}<br /></span>
				</transition> 
			</div>

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center">
				<h4 class="h4 topmargins">Main</h4>
				<transition name="fade" mode="out-in" v-for="index, id in commands.main" :key="id">
					<span v-if="!commands.main[id].visible" key="1" @mouseover="commands.main[id].visible = !commands.main[id].visible"><b>{{ commands.main[id].text1 }}</b><br /></span>
					<span v-else key="2" @mouseleave="commands.main[id].visible = !commands.main[id].visible">{{ commands.main[id].text2 }}<br /></span>
				</transition>
			</div>

			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center">
				<h4 class="h4 topmargins">Server</h4>
				<transition name="fade" mode="out-in" v-for="index, id in commands.server" :key="id">
					<span v-if="!commands.server[id].visible" key="1" @mouseover="commands.server[id].visible = !commands.server[id].visible"><b>{{ commands.server[id].text1 }}</b><br /></span>
					<span v-else key="2" @mouseleave="commands.server[id].visible = !commands.server[id].visible">{{ commands.server[id].text2 }}<br /></span>
				</transition>
			</div>

			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center">
				<h4 class="h4 topmargins">Ranking</h4>
				<transition name="fade" mode="out-in" v-for="index, id in commands.ranking" :key="id">
					<span v-if="!commands.ranking[id].visible" key="1" @mouseover="commands.ranking[id].visible = !commands.ranking[id].visible"><b>{{ commands.ranking[id].text1 }}</b><br /></span>
					<span v-else key="2" @mouseleave="commands.ranking[id].visible = !commands.ranking[id].visible">{{ commands.ranking[id].text2 }}<br /></span>
				</transition>
			</div>

			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center">
				<h4 class="h4 topmargins">Voting</h4>
				<transition name="fade" mode="out-in" v-for="index, id in commands.voting" :key="id">
					<span v-if="!commands.voting[id].visible" key="1" @mouseover="commands.voting[id].visible = !commands.voting[id].visible"><b>{{ commands.voting[id].text1 }}</b><br /></span>
					<span v-else key="2" @mouseleave="commands.voting[id].visible = !commands.voting[id].visible">{{ commands.voting[id].text2 }}<br /></span>
				</transition>
			</div>

		</div>
    </div>
</template>

<script>

import {  } from 'mdbvue'

export default {
  name: 'App',
  components: {

  },
  data() {
	  return {
		  commands: {
			  customization: [
				  {text1: "!radio", text2: "turns radio on", visible: false},
				  {text1: "!radiooff", text2: "turns radio off", visible: false},
				  {text1: "!hud", text2: "opens up hud settings", visible: false},
				  {text1: "!knife", text2: "gives you knife back", visible: false},
				  {text1: "!usp", text2: "gives you an usp", visible: false},
				  {text1: "!glock", text2: "gives you a glock", visible: false}
			  ],
			  main: [
				  {text1: "!help", text2: "opens up this window", visible: false},
				  {text1: "!style or !class", text2: "opens up styles menu", visible: false},
				  {text1: "!r or !start", text2: "teleports to the start zone", visible: false},
				  {text1: "!hide or !invis", text2: "hides some stuff on the server", visible: false}
			  ],
			  server: [
				  {text1: "timeleft", text2: "shows time left for the map", visible: false},
				  {text1: "thetime", text2: "shows actual time", visible: false},
				  {text1: "currentmap", text2: "shows current map", visible: false},
				  {text1: "!vipmenu", text2: "opens VIP menu (VIP only)", visible: false},
				  {text1: "!vip", text2: "opens info website about VIP", visible: false}
			  ],
			  ranking: [
				  {text1: "!wr", text2: "shows best times for the map", visible: false},
				  {text1: "!records", text2: "shows ranking", visible: false},
				  {text1: "!top", text2: "shows players' ranking", visible: false},
				  {text1: "!tier", text2: "shows map's tier [1-5]", visible: false},
				  {text1: "!topst", text2: "shows stars' top", visible: false},
				  {text1: "!stars", text2: "shows stars' levels", visible: false}
			  ],
			  voting: [
				  {text1: "nextmap", text2: "shows next map if chosen", visible: false},
				  {text1: "!rtv", text2: "votes for map change", visible: false},
				  {text1: "!unrtv", text2: "cancels vote for map change", visible: false},
				  {text1: "!nominate or nominate", text2: "opens up map nomination menu", visible: false}
			  ]
		  }
	  }
  },
  methods: {

  }
}

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
<template>
    <div>
        <h1 class="text-center margins navbarfixer" id="commands">Commands</h1>
		<h5 class="text-center">note: plugin commands can be executed with ! / or sm_"your command" in console.</h5>

		<div class="row wow fadeIn">

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center">
				<h4 class="h4 topmargins">Customization</h4>
				<span data-toggle="tooltip" title="turns radio on">!radio (TBD)</span> <br />
				<span data-toggle="tooltip" title="turns radio off">!radiooff (TBD)</span> <br />
				<span data-toggle="tooltip" title="opens up hud settings">!hud</span> <br />
				<span data-toggle="tooltip" title="moves you to spectators">!spec</span> <br />
				<span data-toggle="tooltip" title="gives you knife back">!knife</span> <br />
				<span data-toggle="tooltip" title="gives you an usp">!usp</span> <br />
				<span data-toggle="tooltip" title="gives you a glock">!glock</span> <br />
			</div>

			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center">
				<h4 class="h4 topmargins">Main</h4>
				<span data-toggle="tooltip" title="opens up this window">!help</span> <br />
				<span data-toggle="tooltip" title="opens style choosing menu">!style | !class</span> <br />
				<span data-toggle="tooltip" title="teleports to the start zone">!r | !start</span> <br />
				<span data-toggle="tooltip" title="hides other players">!hide | !invis</span> <br />
			</div>

			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center">
				<h4 class="h4 topmargins">Server</h4>
				<span data-toggle="tooltip" title="shows time left for the map">timeleft</span> <br />
				<span data-toggle="tooltip" title="shows actual time">thetime</span> <br />
				<span data-toggle="tooltip" title="shows current map">currentmap</span> <br />
				<!-- <span data-toggle="tooltip" title="calls for an admin (do NOT abuse!)">!calladmin</span> <br /> -->
				<span data-toggle="tooltip" title="opens VIP menu (VIP only)">!vipmenu</span> <br />
				<span data-toggle="tooltip" title="opens info website about VIP">!vip</span> <br />
			</div>

			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center">
				<h4 class="h4 topmargins">Ranking</h4>
				<span data-toggle="tooltip" title="shows ranking">!records</span> <br />
				<span data-toggle="tooltip" title="shows best players list">!wr</span> <br />
				<span data-toggle="tooltip" title="shows players ranking">!top</span> <br />
				<span data-toggle="tooltip" title="shows map tier [1-4]">!tier</span> <br />
				<span data-toggle="tooltip" title="shows stars' top">!topst</span> <br />
				<span data-toggle="tooltip" title="shows stars' levels">!stars</span> <br />
			</div>

			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center">
				<h4 class="h4 topmargins">Voting</h4>
				<span data-toggle="tooltip" title="shows next map if chosen">nextmap</span> <br />
				<span data-toggle="tooltip" title="votes for map change">rtv</span> <br />
				<span data-toggle="tooltip" title="opens up map nomination menu">!nominate</span> <br />
			</div>

            <h2>need tooltips!</h2>

		</div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>



</style>
<template>
    <div>
        <h1 class="text-center margins navbarfixer" id="whatisspeedrun">What is speedrun?</h1>

		<div class="row wow fadeIn justify-content-center">

			<div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

				<h4 class="h4 topmargins">Origin</h4>

				Speedrun - name comes from combining 2 english words - speed and run. It's a modification created for racing,
				which is the main goal for this modification. In speedrun the most important thing is achieving good run time
				of completing the map.
				Names of maps which are created especially for speedrun begin with 'speedrun_' prefix. Some players upload
				their gameplay on youtube.

				<h4 class="h4 topmargins">Where does it come from?</h4>

				Speedrun which was designed - as it was said - to compete. It began on public server web 'cs-enemy', where
				admins soQl and hiroshima initiated speedrun. The first map was released, titled from server name,
				speedrun_enemy. There was also a clan called 'Polish BH Gaming' which was leaded by soQl. <br /> <br />

				<h4 class="h4 topmargins">Strafes and gaining speed.</h4>

				Strafes are using engine glitch to turn mid-air and gain speed. During a jump player can turn mid-air, return
				etc. It can be used by simultaneous turning left and right causing acceleration in specific direction. While
				turning left you need to hold A key and turn the mouse to the left, for turning right you need to hold D key
				and turn the mouse to the right. Easy peasy.

				<h4 class="h4 topmargins">General rules of speedrun</h4>

				In speedrun player begins in the start zone. Time is counted from the moment you leave spawn to the end zone.
				The main rule is to run from point A to point B.

				<h4 class="h4 topmargins">Useful tricks and techniques:</h4>

				- figure eights (one-pointed, two-pointed, etc.) - technique invented by soQl, consists of smooth figure
				eights. It makes you gain some good speed. <br />
				- hook - technique which consists of making fast and certain move which will allow you to bounce from block
				which is closer than you would think.

				<h4 class="h4 topmargins">How does it work?</h4>

				Plugin counts time from the moment you leave spawn to the end zone. When you finish the map, plugin saves the
				data to the database and compares it to other players' times. It adds the label with your nickname and time to
				the ranking that is shown in !wr. When you fail, you're gonna be teleported into start zone and your time is
				gonna be reset - you need to complete the map again. <br /> <br />

				<b>You need to remember, that this modification is not like bhop, surf or codmod, but something different. That's
				true competition - trying to be better than others.</b>

			</div>

		</div>

		<h3 class="h3 text-center margins">Have Fun!</h3>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>



</style>
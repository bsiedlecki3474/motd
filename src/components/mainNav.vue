<template>
	<navbar position="top" dark color="elegant" scrolling>
		<img src="../assets/bhopicon_white.png" height="30" alt="bhopicon">
		<navbar-collapse>
			<navbar-nav class="top-nav-collapse">
				<navbar-item active><router-link to="vip" class="nav-link"><b>VIP feature</b></router-link></navbar-item>
				<navbar-item><router-link to="ranking" class="nav-link">Ranking</router-link></navbar-item>
				<navbar-item href="#rules">Rules</navbar-item>
				<navbar-item href="#styles">Styles</navbar-item>
				<navbar-item href="#commands">Commands</navbar-item>
				<navbar-item href="#whatisspeedrun">What is speedrun?</navbar-item>
				<navbar-item href="#reportabug">Report a bug</navbar-item>
				<navbar-item href="https://minespace.net/sourcebans">Bans</navbar-item>
				<navbar-item><router-link to="speedruntv" class="nav-link">SpeedrunTV</router-link></navbar-item>
				<navbar-item><router-link to="login" class="nav-link">ADMIN</router-link></navbar-item>
			</navbar-nav>
		</navbar-collapse>
	</navbar>
</template>

<script>

import { 
	Navbar, 
	NavbarItem, 
	NavbarNav, 
	NavbarCollapse, 
	Dropdown, 
	DropdownItem, 
	DropdownMenu, 
	DropdownToggle, 
	waves
} from 'mdbvue';


export default {
	components: {
		Navbar,
		NavbarItem,
		NavbarNav,
		NavbarCollapse,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		waves
	},
	data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
	}
}

</script>

<style scoped>

/* Navbar animation */
/*.navbar {
  background-color: rgba(0, 0, 0, 0.2);
}*/



/* Adding color to the Navbar on mobile */
/*@media only screen and (max-width: 768px) {*/
    /*.navbar {
        background: #2e2e2e!important; 
    }
/*}*/

.navbar .dropdown-menu a:hover {
  color: inherit !important;
}



</style>

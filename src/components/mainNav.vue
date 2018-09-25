<template>
<!--
    <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar navbar-dark" id="navbar">

		<a class="navbar-brand" href="#motdr"><img src="../assets/bhopicon_white.png" height="30" alt="bhopicon"></a>

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">

			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<router-link to="vip" class="nav-link"><b>VIP feature</b></router-link>
				</li>
				<li class="nav-item dropdown">
	                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Timer</a>
	                <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
						<router-link to="ranking" class="dropdown-item">Ranking</router-link>
	                    <a class="dropdown-item" href="alltime/alltime_maplist.php">All-time records</a>
	                    <a class="dropdown-item" href="alltime/alltime_submit.php">Submit your all-time record</a>
	                </div>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#rules">Rules</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#styles">Styles</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#commands">Commands</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#whatisspeedrun">What is speedrun?</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#reportabug">Report a bug</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="https://minespace.net/sourcebans">Bans</a>
				</li>
				<li class="nav-item">
					<router-link to="speedruntv" class="nav-link">SpeedrunTV</router-link>
				</li>
				<li class="nav-item">
					<router-link to="admin" class="nav-link">ADMIN</router-link>
				</li>
			</ul>
			<ul class="navbar-nav ml-auto">
			<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-flag" aria-hidden="true"> </i>Language</a>
                <div class="dropdown-menu dropdown-primary animated fadeIn" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="../pl/index.php">Polski</a>
                    <a class="dropdown-item" href="#">русский (TBD)</a>
                </div>
            </li>
			</ul>

		</div>

	</nav>-->
	<div>
<navbar position="top" dark color="elegant" scrolling>
  <img src="../assets/bhopicon_white.png" height="30" alt="bhopicon">
  <navbar-collapse>
    <navbar-nav class="top-nav-collapse">
      <navbar-item active><router-link to="vip" class="nav-link"><b>VIP feature</b></router-link></navbar-item>
	  <dropdown tag="li" class="nav-item">
        <dropdown-toggle tag="a" navLink color="none" slot="toggle" waves-fixed>Timer</dropdown-toggle>
        <dropdown-menu>
          <dropdown-item><router-link to="ranking">Ranking</router-link></dropdown-item>
          <dropdown-item><a href="alltime/alltime_maplist.php">All-time records</a></dropdown-item>
          <dropdown-item><a href="alltime/alltime_submit.php">Submit your all-time record</a></dropdown-item>
        </dropdown-menu>
      </dropdown>
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
</div>

</template>

<script>

// import {
// 	Navbar,
// 	NavbarNav,
// 	NavbarItem,
// 	NavbarCollapse,
// 	Dropdown,
// 	DropdownItem,
// 	DropdownToggle,
// 	DropdownMenu
// } from 'mdbvue';

import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, mdbInput, Btn, waves, mdbNavbarBrand } from 'mdbvue';


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
    mdbInput,
    Btn,
    waves,
    mdbNavbarBrand
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

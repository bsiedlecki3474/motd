<template>
	<div>
<navbar position="top" class="navbar-elegant" dark>
  <img src="../assets/bhopicon_white.png" height="30" alt="bhopicon">
  <navbar-collapse>
    <navbar-nav>
      <navbar-item><router-link to="moveRecords" class="nav-link">Move records</router-link></navbar-item>
      <navbar-item><router-link to="addUser" class="nav-link">Add user</router-link></navbar-item>
      <navbar-item><router-link to="changePassword" class="nav-link">Change password</router-link></navbar-item>
      <navbar-item><a @click.prevent="logout">Logout</a></navbar-item>
       <slot></slot>
    </navbar-nav>
  </navbar-collapse>
</navbar>
</div>

</template>

<script>

import {
	Navbar,
	NavbarNav,
	NavbarItem,
	NavbarCollapse,
	Dropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu
} from 'mdbvue';

export default {
	components: {
		Navbar,
		NavbarNav,
		NavbarItem,
		NavbarCollapse,
		Dropdown,
		DropdownItem,
		DropdownToggle,
		DropdownMenu
	},
    
}
</script>

<style scoped>

/* Navbar animation */
.navbar {
  background-color: rgba(0, 0, 0, 0.2);
}

.top-nav-collapse {
    background: #2e2e2e !important;
}

/* Adding color to the Navbar on mobile */
/*@media only screen and (max-width: 768px) {*/
    .navbar {
        background: #2e2e2e!important; 
    }
/*}*/



</style>

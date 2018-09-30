<template>
	<navbar position="top" dark color="elegant" scrolling>
		<img src="../assets/bhopicon_white.png" height="30" alt="bhopicon">
		<navbar-collapse>
			<navbar-nav class="top-nav-collapse">
				<navbar-item><router-link to="/" class="nav-link">Back to main page</router-link></navbar-item>
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
	waves
} from 'mdbvue';


export default {
	components: {
		Navbar,
		NavbarItem,
		NavbarNav,
		NavbarCollapse,
		waves
	}
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
@media only screen and (max-width: 768px) {
    .navbar {
        background: #2e2e2e!important; 
    }
}

</style>

<template>
    <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar navbar-dark rgba-red-strong" id="navbar">

		<a class="navbar-brand" href="#motdr"><img src="../assets/bhopicon_white.png" height="30" alt="bhopicon"></a>

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">

			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<!--<a class="nav-link" href="index.php">Back to help</a>-->
                    <router-link to="/" class="nav-link">Back to main page</router-link>
				</li>
			</ul>

			<ul class="navbar-nav ml-auto">
			<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-flag" aria-hidden="true"> </i>Language</a>
                <div class="dropdown-menu dropdown-primary animated fadeIn" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="../pl/login.php">Polski</a>
                    <a class="dropdown-item" href="#">русский (TBD)</a>
                </div>
            </li>
			</ul>

		</div>

	</nav>
</template>

<script>
export default {

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

<template>
    <div>

        <back-nav></back-nav>
        <div class="container-fluid">
            <speedrun-tv></speedrun-tv>
        </div>
        <bottom-nav></bottom-nav>
        
    </div>
</template>

<script>

import backNav from '@/components/backNav'
import speedrunTv from '@/components/speedrunTv'
import bottomNav from '@/components/bottomNav'

export default {
    components: {
        'backNav': backNav,
        'speedrunTv': speedrunTv,
        'bottomNav': bottomNav
    }
}
</script>

<style>

html, body, .view {
    height: 100%;
}

body {
    padding-left: 0;
}

h1, .h2, .h3, .h4, .h5, .h6 {
    padding-top: 75px;
}

/* TEMPORARY! */
.nav-link {
	padding-top: 0 !important;
    padding-bottom: 0 !important;
}

</style>

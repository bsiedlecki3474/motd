<template>
    <div>

        <back-nav></back-nav>
        <div class="container-fluid">
            <admin-login></admin-login>
        </div>
        <bottom-nav></bottom-nav>
        
    </div>
</template>

<script>

import backNav from '@/components/backNav'
import adminLogin from '@/components/adminLogin'
import bottomNav from '@/components/bottomNav'

export default {
    components: {
        'backNav': backNav,
        'adminLogin': adminLogin,
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

<template>
    <div class="container-fluid">

        <dashboard-panel></dashboard-panel>
        
    </div>
</template>

<script>

import dashboardPanel from '@/components/dashboardPanel'

export default {
    components: {
        'dashboardPanel': dashboardPanel
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

<template>
    <div class="container-fluid">

        <report-list></report-list>
        
    </div>
</template>

<script>

import reportList from '@/components/reportList'

export default {
    components: {
        'reportList': reportList
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

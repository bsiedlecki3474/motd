<template>
    <div>

        <carousel></carousel>
        
        <div class="container-fluid">
            
            <rules></rules>
            <styles></styles>
            <commands></commands>
            <what-is-speedrun></what-is-speedrun>

            <hr>

            <report></report>

        </div>
        
    </div>
</template>

<script>

import carousel from '@/components/carousel'
import rules from '@/components/rules'
import styles from '@/components/styles'
import commands from '@/components/commands'
import whatIsSpeedrun from '@/components/whatIsSpeedrun'
import report from '@/components/report'

export default {
    components: {
        'carousel': carousel,
        'rules': rules,
        'styles': styles,
        'commands': commands,
        'whatIsSpeedrun': whatIsSpeedrun,
        'report': report
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

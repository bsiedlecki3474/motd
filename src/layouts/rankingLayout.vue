<template>
    <div>

        <back-nav></back-nav>
        <div class="container-fluid">
            <ranking-search v-bind:styleList="styleList"></ranking-search>
        </div>
        <bottom-nav></bottom-nav>
        
    </div>
</template>

<script>

import backNav from '@/components/backNav'
import rankingSearch from '@/components/rankingSearch'
import bottomNav from '@/components/bottomNav'

export default {
    components: {
        'backNav': backNav,
        'rankingSearch': rankingSearch,
        'bottomNav': bottomNav
    },
    data() {
        return {
            styleList: [

                {id: 0, name: 'TR 100'},
                {id: 1, name: 'TR 128'},
                {id: 2, name: 'TR 200'},
                {id: 3, name: 'TR 250'},
                {id: 4, name: 'TR 333'},
                {id: 5, name: 'TR 500'},
                {id: 6, name: 'TR 1000'},

                {id: 7, name: 'TR 100 (NS)'},
                {id: 8, name: 'TR 128 (NS)'},
                {id: 9, name: 'TR 200 (NS)'},
                {id: 10, name: 'TR 250 (NS)'},
                {id: 11, name: 'TR 333 (NS)'},
                {id: 12, name: 'TR 500 (NS)'},
                {id: 13, name: 'TR 1000 (NS)'},

                {id: 14, name: 'TR 100 + Halftime'},
                {id: 15, name: 'TR 128 + Halftime'},
                {id: 16, name: 'TR 200 + Halftime'},
                {id: 17, name: 'TR 250 + Halftime'},
                {id: 18, name: 'TR 333 + Halftime'},
                {id: 19, name: 'TR 500 + Halftime'},
                {id: 20, name: 'TR 1000 + Halftime'},

                {id: 21, name: 'TR 100 + Low Gravity'},
                {id: 22, name: 'TR 128 + Low Gravity'},
                {id: 23, name: 'TR 200 + Low Gravity'},
                {id: 24, name: 'TR 250 + Low Gravity'},
                {id: 25, name: 'TR 333 + Low Gravity'},
                {id: 26, name: 'TR 500 + Low Gravity'},
                {id: 27, name: 'TR 1000 + Low Gravity'},

                {id: 28, name: 'TR 100 + Double Jump'},
                {id: 29, name: 'TR 128 + Double Jump'},
                {id: 30, name: 'TR 200 + Double Jump'},
                {id: 31, name: 'TR 250 + Double Jump'},
                {id: 32, name: 'TR 333 + Double Jump'},
                {id: 33, name: 'TR 500 + Double Jump'},
                {id: 34, name: 'TR 1000 + Double Jump'},

                {id: 35, name: '2K VelRun'},
                {id: 36, name: '3K VelRun'},
                {id: 37, name: '4K VelRun'},
                {id: 38, name: '6K VelRun'},
                {id: 39, name: 'True Fastrun'},

                {id: 40, name: 'Crazy Speed'},
                {id: 41, name: 'Hard Crazy Speed'},
                {id: 42, name: 'Classic Crazy Speed'},
                {id: 43, name: 'Crazy Speed + Halftime'},
                {id: 44, name: 'Hard Crazy Speed + Halftime'},
                {id: 45, name: 'Classic Crazy Speed + Halftime'},

                {id: 46, name: 'Sideways'},
                {id: 47, name: 'Half-Sideways'},
                {id: 48, name: 'W-Only'},
                {id: 49, name: 'A-Only'},
                {id: 50, name: 'D-Only'},
                {id: 51, name: 'Legit'},
                {id: 52, name: '400 Velocity'},
                {id: 53, name: 'Third Person'}

            ]
        }
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

<template>
    <div>

        <admin-nav @authenticated="setAuthenticated()">
            <router-link v-if="authenticated" to="/admin" v-on:click.native="logout()" replace>Logout</router-link>
        </admin-nav>
        <div class="container-fluid">
            <dashboard></dashboard>
        </div>
        <bottom-nav></bottom-nav>
        
    </div>
</template>

<script>

import adminNav from '@/components/adminNav'
import dashboard from '@/components/dashboard'
import bottomNav from '@/components/bottomNav'

export default {
    components: {
        'adminNav': adminNav,
        'dashboard': dashboard,
        'bottomNav': bottomNav
    },
    mounted() {
        if(!this.authenticated) {
            this.$router.replace({ name: "admin" });
        }
        this.$on('authenticated', function(status) {
            alert(status);
        });
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status;
        },
        logout() {
            this.authenticated = false;
        }
    },
    data() {
        return {
            authenticated: false
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

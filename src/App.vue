<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
}

</script>

<style>

::-webkit-scrollbar {
    background: rgba(0, 0, 0, 0.2) !important;
    width: 7px; /* The lubky number, perfect balance x) */
}

::-webkit-scrollbar-thumb {
    background: #2e2e2e !important;
}

</style>

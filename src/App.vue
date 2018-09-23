<template>
  <div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

  const default_layout = "default";
  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + "-layout";
      }
    },
    created() {
      // nothing defined here (when this.$route.path is other than "/")
      //console.log(this.$route, this.$route.meta.layout);
    },
    updated() {
      // something defined here whatever the this.$route.path
      //console.log(this.$route, this.$route.meta.layout);
    }
  };

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

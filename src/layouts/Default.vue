<script>
import backNav from "@/components/backNav";
import bottomNav from "@/components/bottomNav";
export default {
  components: {
    backNav,
    bottomNav
  }
};
</script>

<template>
  <div class="animated fadeIn">
    <back-nav />

    <slot />

    <bottom-nav />
  </div>
</template>
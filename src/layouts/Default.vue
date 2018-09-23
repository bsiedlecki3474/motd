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
  <div>
    <back-nav />

    <slot />

    <bottom-nav />
  </div>
</template>
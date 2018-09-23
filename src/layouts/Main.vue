<script>
import mainNav from "@/components/mainNav";
import bottomNav from "@/components/bottomNav";
export default {
  components: {
    mainNav,
    bottomNav
  }
};
</script>

<template>
  <div>
    <main-nav />

    <slot />

    <bottom-nav />
  </div>
</template>
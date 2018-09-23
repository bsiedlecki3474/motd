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
  <div class="animated fadeIn">
    <main-nav />

    <slot />

    <bottom-nav />
  </div>
</template>
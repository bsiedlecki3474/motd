<script>
import adminNav from "@/components/adminNav";
import bottomNav from "@/components/bottomNav";
export default {
  components: {
    adminNav,
    bottomNav
  }
};
</script>

<template>
  <div>
    <admin-nav />

    <slot />

    <bottom-nav />
  </div>
</template>
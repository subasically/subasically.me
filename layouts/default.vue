<template>
  <div class="site-shell">
    <div class="site-shell__glow site-shell__glow--left" aria-hidden="true"></div>
    <div class="site-shell__glow site-shell__glow--right" aria-hidden="true"></div>
    <div class="site-frame">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import "~/assets/styles/global.css";
</script>

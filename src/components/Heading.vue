<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/me.png" class="me" alt="me" />
    </a>
  </div>
  <h1>{{ msg }}</h1>
  <p>Hello, I'm your resident tech-geek! In the digital world, my passions lie with web development and the fascinating realm of video games. I enjoy constructing computers from scratch and maintaining my cutting-edge homelab. Outside of the cyber-verse, my heart belongs to my wife and daughters - spending quality time with them defines my happiness.</p>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<style scoped>

.me {
  height: 8em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 50%;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #ddd);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #ddd);
}
</style>

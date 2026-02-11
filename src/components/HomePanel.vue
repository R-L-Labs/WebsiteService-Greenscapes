<template>
  <a
    :href="href"
    class="home-panel group relative block overflow-hidden"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Background image placeholder with gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br" :class="gradient"></div>
    <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>

    <!-- Division label (always visible, top area) -->
    <div class="absolute top-8 left-0 right-0 text-center z-10 md:top-1/2 md:-translate-y-1/2 transition-all duration-500 md:group-hover:top-8 md:group-hover:translate-y-0">
      <h2 class="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
        {{ title }}
      </h2>
    </div>

    <!-- Hover reveal box (animates up from bottom) -->
    <div
      class="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 transform transition-all duration-500 ease-out"
      :class="[
        'translate-y-0 opacity-100',
        'md:translate-y-full md:opacity-0',
        'md:group-hover:translate-y-0 md:group-hover:opacity-100'
      ]"
    >
      <div class="bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <p class="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
          {{ description }}
        </p>
        <span
          class="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
        >
          Explore {{ title }}
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string;
  description: string;
  href: string;
  gradient: string;
}>();

const isHovered = ref(false);
</script>

<style scoped>
.home-panel {
  height: 100vh;
  height: 100dvh;
}

@media (min-width: 768px) {
  .home-panel {
    height: 100vh;
    height: 100dvh;
  }
}
</style>

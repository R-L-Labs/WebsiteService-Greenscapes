<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background image with blur -->
    <div
      v-if="backgroundImage"
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(4px)', transform: 'scale(1.05)' }"
    ></div>
    <!-- Dark overlay for text readability -->
    <div v-if="backgroundImage" class="absolute inset-0 bg-black/50"></div>
    <!-- Fallback gradient when no image -->
    <div v-else class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div :class="[
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border',
        backgroundImage ? 'bg-white/10 border-white/20' : 'bg-primary/10 border-primary/20'
      ]">
        <div
          :class="['w-2 h-2 rounded-full animate-pulse', backgroundImage ? '' : 'bg-primary']"
          :style="backgroundImage ? { backgroundColor: accentColor } : {}"
        ></div>
        <span
          :class="['text-sm font-medium', backgroundImage ? '' : 'text-primary']"
          :style="backgroundImage ? { color: accentColor } : {}"
        >{{ badge }}</span>
      </div>

      <h1 :class="['text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6', backgroundImage ? 'text-white' : 'text-text']">
        {{ title }}<br />
        <span
          :class="backgroundImage ? '' : 'text-primary'"
          :style="backgroundImage ? { color: accentColor } : {}"
        >{{ titleAccent }}</span>
      </h1>

      <p :class="['text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed', backgroundImage ? 'text-white/80' : 'text-text-muted']">
        {{ description }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a :href="ctaPrimary.href"
          class="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-center">
          {{ ctaPrimary.label }}
        </a>
        <a :href="ctaSecondary.href"
          :class="[
            'w-full sm:w-auto border px-8 py-3.5 rounded-lg font-semibold transition-colors text-center',
            backgroundImage ? 'border-white/30 hover:border-white/60 text-white' : 'border-border hover:border-primary/50 text-text'
          ]">
          {{ ctaSecondary.label }}
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto">
        <div v-for="stat in stats" :key="stat.label">
          <div
            :class="['text-2xl sm:text-3xl font-bold', backgroundImage ? '' : 'text-primary']"
            :style="backgroundImage ? { color: accentColor } : {}"
          >{{ stat.value }}</div>
          <div :class="['text-xs sm:text-sm mt-1', backgroundImage ? 'text-white/70' : 'text-text-muted']">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg :class="['w-6 h-6', backgroundImage ? 'text-white/50' : 'text-text-muted']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  badge?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  stats?: Array<{ value: string; label: string }>;
  backgroundImage?: string;
  accentColor?: string;
}

withDefaults(defineProps<Props>(), {
  badge: 'Property Maintenance Company - Sicklerville, NJ',
  title: 'Greenscapes',
  titleAccent: 'South Jersey',
  description: 'At Greenscapes SJ, we have been providing expert landscaping services to residential and commercial clients for over 5 years. Big or Small we ensure every project or service exceeds our clients expectations.',
  ctaPrimary: () => ({ label: 'Get a Free Estimate', href: '#contact' }),
  ctaSecondary: () => ({ label: 'Our Services', href: '#services' }),
  backgroundImage: '',
  accentColor: '#1e7d1e',
  stats: () => [
    { value: '5+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100%', label: 'Satisfaction' },
  ],
});
</script>
